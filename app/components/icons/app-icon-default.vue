<template>
  <svg :style="{ width: sizeValue, height: sizeValue }" viewBox="0 0 90 110" xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet">
    <!-- Document body -->
    <path d="M8 6C8 3.79 9.79 2 12 2H56L82 28V104C82 106.21 80.21 108 78 108H12C9.79 108 8 106.21 8 104V6Z"
      :fill="colors.primary" />
    <!-- Folded corner shadow -->
    <path d="M56 2L82 28H64C59.58 28 56 24.42 56 20V2Z" :fill="colors.secondary" />
    <!-- Code lines — different lengths simulate source code -->
    <rect x="18" y="42" width="34" height="7" rx="3.5" :fill="colors.text" opacity="0.85" />
    <rect x="56" y="42" width="14" height="7" rx="3.5" :fill="colors.text" opacity="0.35" />
    <rect x="18" y="56" width="20" height="7" rx="3.5" :fill="colors.text" opacity="0.60" />
    <rect x="42" y="56" width="28" height="7" rx="3.5" :fill="colors.text" opacity="0.40" />
    <rect x="18" y="70" width="40" height="7" rx="3.5" :fill="colors.text" opacity="0.70" />
    <rect x="18" y="84" width="26" height="7" rx="3.5" :fill="colors.text" opacity="0.45" />
    <rect x="48" y="84" width="20" height="7" rx="3.5" :fill="colors.text" opacity="0.30" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: [Number, String], default: 32 },
  variant: { type: String, default: 'original' },
  primary: String,
  secondary: String,
  text: String,
})

const variants = {
  original: { primary: '#6366F1', secondary: '#4338CA', text: '#FFFFFF' },
  accent: { primary: 'var(--ui-primary)', secondary: 'var(--ui-primary-700, #4338CA)', text: 'var(--ui-bg)' },
  muted: { primary: 'var(--ui-color-neutral-400)', secondary: 'var(--ui-color-neutral-600)', text: 'var(--ui-color-neutral-50)' },
}

const sizeValue = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)
const colors = computed(() => ({
  primary: props.primary ?? variants[props.variant]?.primary ?? variants.original.primary,
  secondary: props.secondary ?? variants[props.variant]?.secondary ?? variants.original.secondary,
  text: props.text ?? variants[props.variant]?.text ?? variants.original.text,
}))
</script>
