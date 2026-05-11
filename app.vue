<script setup>
// Automatikusan lekéri a content mappa struktúráját
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <div class="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <aside class="w-64 border-r border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
      <h2 class="text-xl font-bold mb-6 italic text-primary-500">CheatSheet</h2>
      
      <nav v-for="group in navigation" :key="group._path" class="mb-4">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
          {{ group.title }}
        </h3>
        <ul class="space-y-1">
          <li v-for="link in group.children" :key="link._path">
            <NuxtLink 
              :to="link._path"
              class="block p-2 rounded hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
              active-class="bg-primary-100 dark:bg-primary-900/50 text-primary-600 font-medium"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <h2>Alma</h2>
    <main class="flex-1 p-10 overflow-y-auto">
      <UContainer>
        <article class="prose dark:prose-invert max-w-none">
          <ContentDoc />
        </article>
      </UContainer>
    </main>
  </div>
</template>