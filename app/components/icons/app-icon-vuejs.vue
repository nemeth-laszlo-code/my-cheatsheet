<template>
    <svg :style="{ width: sizeValue, height: sizeValue }" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d="M17.595 11.204l8.91 0l5.536 9.391l5.591-9.391l8.831 0l-14.422 25.359l-14.446-25.359Z" :fill="colors.dark"/>
        <path d="M8.089 11.204l23.952 41.845l24.126-41.845l-9.704 0l-14.422 25.359l-14.446-25.359l-9.506 0Z" :fill="colors.primary"/>
    </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: { type: [Number, String], default: 32 },
    variant: { type: String, default: 'original' },
    primary: String,
    dark: String,
})

const variants = {
    original: { primary: '#4dba87', dark: '#435466' },
    accent:   { primary: 'var(--accent-color-1)', dark: 'var(--bg-color-100)' },
    muted:    { primary: 'var(--bg-color-500)', dark: 'var(--bg-color-100)' },
}

const sizeValue = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)
const colors = computed(() => ({
    primary: props.primary ?? variants[props.variant]?.primary ?? variants.original.primary,
    dark:    props.dark    ?? variants[props.variant]?.dark    ?? variants.original.dark,
}))
</script>
