<template>
  <div v-if="language === 'mermaid'" ref="mermaidEl" class="mermaid-wrap" />
  <pre v-else :class="language ? `language-${language}` : ''" class="prose-pre"><slot /></pre>
</template>

<script setup lang="ts">
const props = defineProps<{
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  meta?: string
}>()

const mermaidEl = ref<HTMLElement | null>(null)
const colorMode = useColorMode()

if (import.meta.client && props.language === 'mermaid') {
  onMounted(async () => {
    if (!mermaidEl.value || !props.code) return
    const mermaid = (await import('mermaid')).default
    mermaid.initialize({
      startOnLoad: false,
      theme: colorMode.value === 'dark' ? 'dark' : 'default',
    })
    const id = 'mermaid-' + Math.random().toString(36).slice(2, 8)
    const { svg } = await mermaid.render(id, props.code)
    mermaidEl.value.innerHTML = svg
  })
}
</script>

<style scoped>
.mermaid-wrap {
  display: flex;
  justify-content: center;
  padding: 1.5rem 1rem;
  background: var(--ui-bg-elevated);
  border-radius: 0.5rem;
  border: 1px solid var(--ui-border);
  overflow-x: auto;
  margin: 1.25rem 0;
}

.mermaid-wrap :deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
