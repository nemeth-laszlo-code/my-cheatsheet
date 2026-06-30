<template>
  <UApp>
    <!-- Mobile top bar -->
    <div class="mobile-topbar">
      <UButton icon="i-heroicons-bars-3" color="neutral" variant="ghost" size="sm" aria-label="Menü megnyitása"
        @click="mobileOpen = true" />
      <span class="mobile-logo"><span class="mobile-logo-mark">&gt;_</span> CheatSheet</span>
      <UButton icon="i-heroicons-magnifying-glass" color="neutral" variant="ghost" size="sm"
        @click="searchOpen = true" />
    </div>

    <div class="app-shell">
      <!-- Mobile backdrop -->
      <Transition name="fade">
        <div v-if="mobileOpen" class="sidebar-backdrop" @click="mobileOpen = false" />
      </Transition>

      <!-- SIDEBAR -->
      <aside :class="['sidebar', { 'sidebar--collapsed': collapsed, 'sidebar--mobile-open': mobileOpen }]">
        <div class="sidebar-header">
          <div v-if="!collapsed" class="logo">
            <span class="logo-mark">&gt;_</span>
            <div class="logo-text">
              <span class="logo-name">CheatSheet</span>
              <span class="logo-sub">dev referencia</span>
            </div>
          </div>
          <UButton :icon="collapsed ? 'i-heroicons-chevron-right' : 'i-heroicons-chevron-left'" color="neutral"
            variant="ghost" size="sm" :aria-label="collapsed ? 'Megnyitás' : 'Bezárás'" class="desktop-only"
            @click="collapsed = !collapsed" />
          <UButton icon="i-heroicons-x-mark" color="neutral" variant="ghost" size="sm" aria-label="Bezárás"
            class="mobile-close-btn" @click="mobileOpen = false" />
        </div>

        <template v-if="!collapsed">
          <!-- Search -->
          <div class="sidebar-search">
            <UButton icon="i-heroicons-magnifying-glass" label="Keresés..." color="neutral" variant="outline" size="sm"
              class="w-full justify-start cursor-pointer" @click="searchOpen = true" />
          </div>

          <!-- Navigation -->
          <nav class="sidebar-nav">
            <div v-for="cat in navigation" :key="cat.path" class="nav-section">
              <button class="nav-cat-btn " @click="toggleCat(cat.path ?? '')">
                <AppIcon :name="cat.title" :size="16" variant="original" class="nav-cat-icon" />
                <span class="nav-cat-label ">{{ cat.title }}</span>
                <UIcon
                  :name="openCats.includes(cat.path ?? '') ? 'i-heroicons-chevron-down' : 'i-heroicons-chevron-right'"
                  class="nav-cat-chevron" />
              </button>
              <Transition name="slide">
                <ul v-show="openCats.includes(cat.path ?? '')" class="nav-items">
                  <li v-for="item in cat.children" :key="item.path">
                    <NuxtLink :to="item.path" class="nav-item" active-class="nav-item--active"
                      @click="mobileOpen = false">
                      <UIcon name="i-heroicons-document-text" class="nav-item-icon" />
                      <span>{{ item.title }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </Transition>
            </div>
          </nav>

          <!-- Footer -->
          <div class="sidebar-footer">
            <UBadge color="neutral" variant="subtle" size="xs">
              {{ totalDocs }} lap
            </UBadge>
            <UBadge color="primary" variant="subtle" size="xs">
              v1.0
            </UBadge>
          </div>
        </template>

        <!-- Collapsed: csak ikonok -->
        <template v-else>
          <div class="collapsed-icons">
            <UTooltip v-for="cat in navigation" :key="cat.path" :text="cat.title" :popper="{ placement: 'right' }">
              <button class="collapsed-cat-btn" @click="collapsed = false">
                <AppIcon :name="cat.title" :size="22" variant="original" />
              </button>
            </UTooltip>
          </div>
        </template>
      </aside>

      <!-- MAIN -->
      <main class="main-content">
        <slot />
      </main>
    </div>

    <!-- Search Modal -->
    <UModal v-model:open="searchOpen" title="Keresés">
      <template #body>
        <UInput v-model="searchQuery" placeholder="Keresés a lapok között..." icon="i-heroicons-magnifying-glass"
          size="md" autofocus class="w-full mb-3" />
        <ul v-if="searchResults.length" class="search-results">
          <li v-for="item in searchResults" :key="item.path">
            <NuxtLink :to="item.path" class="search-result-link" @click="closeSearch">
              <UIcon name="i-heroicons-document-text" class="search-result-icon" />
              <span class="search-result-info">
                <span class="search-result-title">{{ item.title }}</span>
                <span v-if="item.snippet" class="search-result-snippet">{{ item.snippet }}</span>
              </span>
              <UBadge color="neutral" variant="subtle" size="xs" class="flex-shrink-0">{{ item._catTitle }}</UBadge>
            </NuxtLink>
          </li>
        </ul>
        <div v-else-if="searchQuery.trim()" class="search-empty">
          Nincs találat: <strong>"{{ searchQuery }}"</strong>
        </div>
        <div v-else class="search-hint">
          Kezdj el gépelni a kereséshez...
        </div>
      </template>
    </UModal>
  </UApp>
</template>

<script setup lang="ts">
const collapsed = ref(false)
const mobileOpen = ref(false)
const openCats = ref<string[]>([])
const searchOpen = useState('search-open', () => false)
const searchQuery = ref('')

const { data: navData } = await useAsyncData('nav', () =>
  queryCollectionNavigation('content')
)

const navigation = computed(() => navData.value ?? [])

const totalDocs = computed(() =>
  navigation.value.reduce((acc, cat) => acc + (cat.children?.length ?? 0), 0)
)

function toggleCat(path: string) {
  const idx = openCats.value.indexOf(path)
  if (idx === -1) openCats.value.push(path)
  else openCats.value.splice(idx, 1)
}

const { data: allContentDocs } = await useAsyncData('all-content-search', () =>
  queryCollection('content').all()
)

const allDocs = computed(() =>
  navigation.value.flatMap(cat =>
    (cat.children ?? []).map(item => ({
      path: item.path as string,
      title: item.title as string,
      _catTitle: cat.title as string,
    }))
  )
)

const searchIndex = computed(() =>
  (allContentDocs.value ?? []).map((doc: unknown) => {
    const d = doc as Record<string, unknown>
    // JSON.stringify captures ALL text in the body AST regardless of structure
    const bodyJson = JSON.stringify(d.body ?? '').toLowerCase()
    const descText = String(d.description ?? '').toLowerCase()
    return {
      path: String(d.path ?? ''),
      bodyJson,
      description: descText,
    }
  })
)

type SearchResult = { path: string; title: string; _catTitle: string; snippet?: string }

const searchResults = computed((): SearchResult[] => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []

  const titleMatches: SearchResult[] = allDocs.value
    .filter(doc => doc.title.toLowerCase().includes(q) || doc._catTitle.toLowerCase().includes(q))
    .map(doc => ({ path: doc.path, title: doc.title, _catTitle: doc._catTitle }))

  const seen = new Set(titleMatches.map(d => d.path))
  const contentMatches: SearchResult[] = []

  for (const indexed of searchIndex.value) {
    if (seen.has(indexed.path)) continue
    if (!indexed.bodyJson.includes(q) && !indexed.description.includes(q)) continue

    const doc = allDocs.value.find(d => d.path === indexed.path)
    if (!doc) continue

    seen.add(indexed.path)
    contentMatches.push({
      path: doc.path,
      title: doc.title,
      _catTitle: doc._catTitle,
      snippet: indexed.description || undefined,
    })
  }

  return [...titleMatches, ...contentMatches].slice(0, 15)
})

function closeSearch() {
  searchOpen.value = false
  searchQuery.value = ''
}

watch(searchOpen, (val) => {
  if (!val) searchQuery.value = ''
})

const route = useRoute()
watch(() => route.path, (p) => {
  navigation.value.forEach((cat) => {
    if (p.startsWith(cat.path ?? '') && !openCats.value.includes(cat.path ?? '')) {
      openCats.value.push(cat.path ?? '')
    }
  })
}, { immediate: true })
</script>

<style scoped>
.app-shell {
  display: grid;
  grid-template-columns: 256px 1fr;
  min-height: 100vh;
  transition: grid-template-columns 0.25s ease;
}

.app-shell:has(.sidebar--collapsed) {
  grid-template-columns: 56px 1fr;
}

/* SIDEBAR */
.sidebar {
  width: 256px;
  min-height: 100vh;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid var(--ui-border);
  background: var(--ui-bg);
  display: flex;
  flex-direction: column;
  transition: width 0.25s ease;
  z-index: 10;
}

.sidebar--collapsed {
  width: 56px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 0.875rem 0.875rem 1rem;
  border-bottom: 1px solid var(--ui-border);
  gap: 0.5rem;
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-width: 0;
}

.logo-mark {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ui-primary);
  flex-shrink: 0;
}

.logo-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.logo-name {
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  white-space: nowrap;
}

.logo-sub {
  font-size: 0.65rem;
  color: var(--ui-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* SEARCH */
.sidebar-search {
  padding: 0.75rem;
  border-bottom: 1px solid var(--ui-border);
  flex-shrink: 0;
}

/* NAV */
.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
}

.nav-section {
  border-bottom: 1px solid var(--ui-border);
}

.nav-cat-btn {
  width: 100%;
  display: flex;
  align-items: center;

  gap: 0.5rem;
  padding: 0.55rem 0.875rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--ui-text-muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  text-align: left;
  transition: color 0.15s, background 0.15s;
}

.nav-cat-btn:hover {
  color: var(--ui-text);
  background: var(--ui-bg-elevated);
}

.nav-cat-icon {
  flex-shrink: 0;
}

.nav-cat-label {
  flex: 1;
  line-height: 1;
}

.nav-cat-chevron {
  width: 14px;
  height: 14px;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.nav-items {
  list-style: none;
  padding: 0.2rem 0 0.6rem;
  margin: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.875rem 0.35rem 2rem;
  font-size: 0.82rem;
  color: var(--ui-text-muted);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
}

.nav-item:hover {
  color: var(--ui-text);
  background: var(--ui-bg-elevated);
}

.nav-item--active {
  color: var(--ui-primary) !important;
  border-left-color: var(--ui-primary) !important;
  background: color-mix(in srgb, var(--ui-primary) 8%, transparent) !important;
  font-weight: 600;
}

.nav-item-icon {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  opacity: 0.5;
}

/* FOOTER */
.sidebar-footer {
  padding: 0.75rem;
  border-top: 1px solid var(--ui-border);
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
}

/* COLLAPSED */
.collapsed-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  gap: 0.25rem;
}

.collapsed-cat-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
}

.collapsed-cat-btn:hover {
  background: var(--ui-bg-elevated);
}

/* MAIN */
.main-content {
  min-height: 100vh;
  overflow: hidden;
}

/* SEARCH MODAL */
.search-results {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.search-result-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--ui-text);
  background: var(--ui-bg-elevated);
  transition: background 0.15s;
}

.search-result-link:hover {
  background: color-mix(in srgb, var(--ui-primary) 10%, var(--ui-bg-elevated));
}

.search-result-icon {
  width: 15px;
  height: 15px;
  color: var(--ui-primary);
  flex-shrink: 0;
}

.search-result-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.search-result-title {
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-result-snippet {
  font-size: 0.75rem;
  color: var(--ui-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-empty {
  padding: 1.5rem 0;
  text-align: center;
  color: var(--ui-text-muted);
  font-size: 0.875rem;
}

.search-hint {
  padding: 1.5rem 0;
  text-align: center;
  color: var(--ui-text-muted);
  font-size: 0.875rem;
}

/* MOBILE TOP BAR */
.mobile-topbar {
  display: none;
}

/* DESKTOP ONLY / MOBILE ONLY helpers */
.mobile-close-btn {
  display: none;
}

/* BACKDROP */
.sidebar-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 40;
  backdrop-filter: blur(2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ═══ MOBILE ═══ */
@media (max-width: 767px) {

  /* Top bar megjelenítése */
  .mobile-topbar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 0.75rem;
    border-bottom: 1px solid var(--ui-border);
    background: var(--ui-bg);
    position: sticky;
    top: 0;
    z-index: 20;
  }

  .mobile-logo {
    flex: 1;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--ui-primary);
  }

  .mobile-logo-mark {
    opacity: 0.7;
  }

  /* Sidebar: teljes szélességű drawer mobilon */
  .app-shell {
    grid-template-columns: 1fr !important;
  }

  .sidebar {
    position: fixed !important;
    top: 0;
    left: -272px;
    height: 100vh;
    z-index: 50;
    width: 256px !important;
    transition: left 0.28s ease, box-shadow 0.28s ease;
    box-shadow: none;
  }

  .sidebar--mobile-open {
    left: 0 !important;
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.18);
  }

  /* Desktop collapse gomb elrejtése mobilon */
  .desktop-only {
    display: none !important;
  }

  /* Close X gomb megjelenítése mobilon */
  .mobile-close-btn {
    display: inline-flex;
  }
}

/* SLIDE ANIMATION */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  max-height: 400px;
}
</style>
