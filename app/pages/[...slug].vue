<template>
  <div class="sheet-page">
    <template v-if="page">
      <!-- Top bar -->
      <header class="sheet-topbar">
        <div class="topbar-left">
          <UBreadcrumb :items="breadcrumbItems" />
        </div>

        <div class="topbar-right">
          <UButton
            icon="i-heroicons-magnifying-glass"
            color="neutral"
            variant="ghost"
            size="sm"
            aria-label="Keresés"
            @click="searchOpen = true"
          />
        </div>
      </header>

      <!-- Page header -->
      <div class="sheet-header">
        <div class="sheet-title-row">
          <div class="sheet-icon">
            <AppIcon :name="categoryLabel" :size="48" variant="original" />
          </div>
          <div>
            <h1 class="sheet-title">{{ page.title }}</h1>
            <p v-if="page.description" class="sheet-desc">{{ page.description }}</p>
          </div>
        </div>

        <!-- Prev / Next navigation -->
        <div v-if="prev || next" class="sheet-nav">
          <UButton
            v-if="prev"
            :to="prev.path"
            :label="prev.title"
            icon="i-heroicons-arrow-left"
            color="neutral"
            variant="outline"
            size="sm"
          />
          <div class="flex-1" />
          <UButton
            v-if="next"
            :to="next.path"
            :label="next.title"
            trailing-icon="i-heroicons-arrow-right"
            color="neutral"
            variant="outline"
            size="sm"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="sheet-body">
        <ContentRenderer :value="page" class="prose" />
      </div>

      <!-- Bottom nav -->
      <div v-if="prev || next" class="sheet-bottom-nav">
        <UButton
          v-if="prev"
          :to="prev.path"
          :label="prev.title"
          icon="i-heroicons-arrow-left"
          color="neutral"
          variant="ghost"
        />
        <div class="flex-1" />
        <UButton
          v-if="next"
          :to="next.path"
          :label="next.title"
          trailing-icon="i-heroicons-arrow-right"
          color="neutral"
          variant="ghost"
        />
      </div>
    </template>

    <!-- 404 -->
    <div v-else class="not-found">
      <UIcon name="i-heroicons-document-magnifying-glass" class="nf-icon" />
      <h2 class="nf-title">Lap nem található</h2>
      <p class="nf-desc">Ez a cheatsheet nem létezik, vagy törölték.</p>
      <UButton to="/" label="Vissza a főoldalra" icon="i-heroicons-home" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const searchOpen = useState('search-open', () => false)

// Reactive key → automatikusan újratölti a lapot navigáláskor
const { data: page } = await useAsyncData(
  () => `page-${route.path}`,
  () => queryCollection('content').path(route.path).first()
)

const { data: navData } = await useAsyncData('nav-slug', () =>
  queryCollectionNavigation('content')
)

const categoryLabel = computed(() => {
  const parts = route.path.split('/').filter(Boolean)
  return parts[0] ?? ''
})

const siblings = computed(() => {
  const nav = navData.value ?? []
  const cat = nav.find(c => route.path.startsWith(c.path ?? ''))
  return cat?.children ?? []
})

const currentIdx = computed(() =>
  siblings.value.findIndex(s => s.path === route.path)
)

const prev = computed(() =>
  currentIdx.value > 0 ? siblings.value[currentIdx.value - 1] : null
)

const next = computed(() =>
  currentIdx.value >= 0 && currentIdx.value < siblings.value.length - 1
    ? siblings.value[currentIdx.value + 1]
    : null
)

const breadcrumbItems = computed(() => [
  { label: 'Főoldal', to: '/', icon: 'i-heroicons-home' },
  { label: categoryLabel.value.replace(/^\d+/, '').replace(/^[-.]/, ''), icon: 'i-heroicons-folder' },
  { label: page.value?.title ?? '' },
])

useHead({
  title: computed(() => page.value?.title ? `${page.value.title} — CheatSheet` : 'CheatSheet'),
  meta: [{ name: 'description', content: computed(() => page.value?.description ?? '') }],
})
</script>

<style scoped>
.sheet-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.sheet-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 1.5rem;
  border-bottom: 1px solid var(--ui-border);
  background: var(--ui-bg);
  position: sticky;
  top: 0;
  z-index: 5;
}

.topbar-left { display: flex; align-items: center; gap: 0.5rem; }
.topbar-right { display: flex; align-items: center; gap: 0.5rem; }

.sheet-header {
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid var(--ui-border);
  background: linear-gradient(160deg,
    color-mix(in srgb, var(--ui-primary) 4%, var(--ui-bg)),
    var(--ui-bg) 70%
  );
}

.sheet-title-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.sheet-icon {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  margin-top: 0.1rem;
}

.sheet-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 0.35rem;
}

.sheet-desc {
  color: var(--ui-text-muted);
  font-size: 0.9rem;
}

.sheet-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sheet-body {
  flex: 1;
  padding: 2rem;
  max-width: 900px;
}

.sheet-bottom-nav {
  display: flex;
  align-items: center;
  padding: 1.25rem 2rem;
  border-top: 1px solid var(--ui-border);
  margin-top: auto;
}

.not-found {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem;
  text-align: center;
}

.nf-icon {
  width: 4rem;
  height: 4rem;
  color: var(--ui-text-muted);
  opacity: 0.4;
}

.nf-title {
  font-size: 1.5rem;
  font-weight: 800;
}

.nf-desc { color: var(--ui-text-muted); }
.flex-1 { flex: 1; }
</style>
