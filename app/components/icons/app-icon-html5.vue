<template>
    <svg :style="{ width: sizeValue, height: sizeValue }" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d="M22.1325 102.004L13.7062 7.5H106.294L97.8562 101.989L59.9437 112.5L22.1325 102.004Z" :fill="colors.primary"/>
        <path d="M60 104.467L90.6375 95.9737L97.845 15.2287H60V104.467Z" :fill="colors.secondary"/>
        <path d="M60 50.2763H44.6625L43.605 38.4075H60V26.8163H30.9375L31.215 29.9288L34.0613 61.8675H60V50.2763ZM60 80.3775L59.9475 80.3925L47.04 76.9088L46.215 67.665H34.5787L36.2025 85.86L59.9475 92.4525L60 92.4375V80.3775Z" :fill="colors.muted"/>
        <path d="M59.9587 50.2763V61.8675H74.2312L72.8887 76.9013L59.9587 80.3888V92.4488L83.7225 85.86L83.895 83.9025L86.6175 53.3888L86.9025 50.2763H59.9587ZM59.9587 26.8163V38.4075H87.9562L88.1887 35.805L88.7175 29.9288L88.995 26.8163H59.9587Z" :fill="colors.text"/>
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
    muted: String,
})

const variants = {
    original: { primary: '#E44F26', secondary: '#F1662A', text: '#FFFFFF', muted: '#EBEBEB' },
    accent:   { primary: 'var(--accent-color-1)', secondary: 'var(--accent-color-2)', text: 'var(--text-color-1)', muted: 'var(--bg-color-500)' },
    muted:    { primary: 'var(--bg-color-500)', secondary: 'var(--bg-color-100)', text: 'var(--text-color-2)', muted: 'var(--bg-color-800)' },
}

const sizeValue = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)
const colors = computed(() => ({
    primary:   props.primary   ?? variants[props.variant]?.primary   ?? variants.original.primary,
    secondary: props.secondary ?? variants[props.variant]?.secondary ?? variants.original.secondary,
    text:      props.text      ?? variants[props.variant]?.text      ?? variants.original.text,
    muted:     props.muted     ?? variants[props.variant]?.muted     ?? variants.original.muted,
}))
</script>
