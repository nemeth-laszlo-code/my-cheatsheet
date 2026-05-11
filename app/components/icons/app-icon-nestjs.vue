<template>
    <svg :style="{ width: sizeValue, height: sizeValue }" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path :fill="colors.primary" d="M110.5 86.6L64 113.3L17.5 86.6V33.4L64 6.7l46.5 26.7v53.2z"/>
        <path :fill="colors.text" d="M85.4 75.3c-.3-1.4-1.2-2.3-2.6-2.6-1.5-.3-2.5.4-3.1 1.7-.5 1.1-.5 2.2-.1 3.3.4 1.1 1.2 1.8 2.3 2.1 1.4.3 2.5-.3 3.1-1.6.5-1.1.5-2.1.1-3.2l.3.3zm-39.1 0c-.3-1.4-1.2-2.3-2.6-2.6-1.5-.3-2.5.4-3.1 1.7-.5 1.1-.5 2.2-.1 3.3.4 1.1 1.2 1.8 2.3 2.1 1.4.3 2.5-.3 3.1-1.6.5-1.1.5-2.1.1-3.2l.3.3zm20.8-21.6c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
        <path :fill="colors.text" d="M64 42.7c-11.8 0-21.3 9.5-21.3 21.3s9.5 21.3 21.3 21.3 21.3-9.5 21.3-21.3S75.8 42.7 64 42.7zm0 37.3c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"/>
    </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: { type: [Number, String], default: 32 },
    variant: { type: String, default: 'original' },
    primary: String,
    text: String,
})

const variants = {
    original: { primary: '#E0234E', text: '#FFFFFF' },
    accent:   { primary: 'var(--accent-color-1)', text: 'var(--text-color-1)' },
    muted:    { primary: 'var(--bg-color-500)', text: 'var(--text-color-2)' },
}

const sizeValue = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)
const colors = computed(() => ({
    primary: props.primary ?? variants[props.variant]?.primary ?? variants.original.primary,
    text:    props.text    ?? variants[props.variant]?.text    ?? variants.original.text,
}))
</script>
