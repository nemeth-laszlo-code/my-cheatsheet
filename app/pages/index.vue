<template>
  <div class="home">
    <!-- Hero area -->
    <div class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">
          <span class="hero-title-accent">Dev</span> CheatSheet
        </h1>
        <p class="hero-desc">
          Kereshető, böngészhető referencia-lapok egy helyen.<br>
          Válassz kategóriát a sidebarban, vagy keress itt.
        </p>

        <div class="hero-stats">
          <UBadge color="primary" variant="subtle" size="lg">
            <UIcon name="i-heroicons-document-text" class="mr-1" />
            {{ totalDocs }} lap összesen
          </UBadge>
          <UBadge color="neutral" variant="subtle" size="lg">
            <UIcon name="i-heroicons-folder" class="mr-1" />
            {{ navigation.length }} kategória
          </UBadge>
        </div>
      </div>
    </div>

    <!-- Stats + Category cards -->
    <div class="home-body">
      <!-- Stats bar -->
      <div class="stats-bar">
        <UBadge color="primary" variant="subtle" size="lg">
          <UIcon name="i-heroicons-document-text" class="mr-1" />
          {{ totalDocs }} lap összesen
        </UBadge>
        <UBadge color="neutral" variant="subtle" size="lg">
          <UIcon name="i-heroicons-folder" class="mr-1" />
          {{ navigation.length }} kategória
        </UBadge>
      </div>

      <!-- Category sections -->
      <div class="categories">
        <div v-for="cat in navigation" :key="cat.path as string" class="cat-section">
          <div class="cat-header">
            <AppIcon :name="cat.title" :size="28" variant="original" class="cat-icon" />
            <h2 class="cat-title">{{ cat.title }}</h2>
            <UBadge color="neutral" variant="outline" size="xs">
              {{ cat.children?.length ?? 0 }}
            </UBadge>
          </div>

          <div class="doc-grid">
            <NuxtLink
              v-for="item in cat.children"
              :key="item.path as string"
              :to="item.path as string"
              class="doc-card"
            >
              <div class="doc-card-header">
                <UBadge color="primary" variant="soft" size="xs" class="font-mono">.md</UBadge>
              </div>
              <h3 class="doc-card-title">{{ item.title }}</h3>
              <p v-if="item.description" class="doc-card-desc">{{ item.description }}</p>
              <div class="doc-card-footer">
                <span class="doc-card-open">Megnyitás</span>
                <UIcon name="i-heroicons-arrow-right" class="doc-card-arrow" />
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="navigation.length === 0" class="empty">
          <UIcon name="i-heroicons-folder-open" class="empty-icon" />
          <p>Még nincs tartalom. Adj hozzá `.md` fájlokat a <code>content/</code> mappába.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: navData } = await useAsyncData('nav-home', () =>
  queryCollectionNavigation('content')
)

const navigation = computed(() => navData.value ?? [])
const totalDocs = computed(() =>
  navigation.value.reduce((acc, cat) => acc + (cat.children?.length ?? 0), 0)
)

useHead({ title: 'CheatSheet — Dev Referencia' })
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* HERO */
.hero {
  padding: 4rem 2.5rem 3rem;
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--ui-primary) 5%, var(--ui-bg)) 0%,
    var(--ui-bg) 60%
  );
  border-bottom: 1px solid var(--ui-border);
}

.hero-inner {
  max-width: 640px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
}

.hero-title-accent {
  color: var(--ui-primary);
}

.hero-desc {
  color: var(--ui-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.hero-stats {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* Hero search trigger */
.hero-search-trigger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--ui-bg-elevated);
  border: 1px solid var(--ui-border);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
  max-width: 480px;
}

.hero-search-trigger:hover {
  border-color: var(--ui-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ui-primary) 12%, transparent);
}

.hs-icon {
  width: 18px;
  height: 18px;
  color: var(--ui-text-muted);
  flex-shrink: 0;
}

.hs-placeholder {
  flex: 1;
  font-size: 0.9rem;
  color: var(--ui-text-muted);
}

.hs-kbd-group {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

/* BODY */
.home-body {
  flex: 1;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-bar {
  display: flex;
  gap: 0.5rem;
}

/* CATEGORIES */
.categories {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.cat-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.cat-icon { flex-shrink: 0; }

.cat-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  flex: 1;
}

/* DOC GRID */
.doc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 0.875rem;
}

.doc-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.125rem;
  background: var(--ui-bg);
  border: 1px solid var(--ui-border);
  border-radius: 10px;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.15s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.doc-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--ui-primary) 6%, transparent),
    transparent 60%
  );
  transition: opacity 0.2s;
  pointer-events: none;
}

.doc-card:hover {
  border-color: var(--ui-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px color-mix(in srgb, var(--ui-primary) 12%, transparent);
}

.doc-card:hover::after { opacity: 1; }

.doc-card-header { display: flex; }

.doc-card-title {
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--ui-text);
  letter-spacing: -0.01em;
}

.doc-card-desc {
  font-size: 0.78rem;
  color: var(--ui-text-muted);
  line-height: 1.5;
  flex: 1;
}

.doc-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.25rem;
}

.doc-card-open {
  font-size: 0.72rem;
  color: var(--ui-primary);
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.2s;
}

.doc-card-arrow {
  width: 14px;
  height: 14px;
  color: var(--ui-primary);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s;
}

.doc-card:hover .doc-card-open,
.doc-card:hover .doc-card-arrow {
  opacity: 1;
}
.doc-card:hover .doc-card-arrow {
  transform: translateX(0);
}

/* EMPTY */
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem;
  text-align: center;
  color: var(--ui-text-muted);
}

.empty-icon {
  width: 3rem;
  height: 3rem;
  opacity: 0.3;
}
</style>
