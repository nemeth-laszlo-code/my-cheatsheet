<template>
    <svg :style="{ width: sizeValue, height: sizeValue }" viewBox="0 0 120 119" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d="M22.1325 101.154L13.71 7.4375H106.29L97.8563 101.139L59.9438 111.562L22.1325 101.154Z" :fill="colors.primary"/>
        <path d="M60 103.597L90.6375 95.174L97.845 15.1018H60V103.597Z" :fill="colors.secondary"/>
        <path d="M60 49.054H75.3375L76.395 37.2842H60V25.7895H89.0625L88.785 28.8724L85.9387 60.5487H60V49.054Z" :fill="colors.text"/>
        <path d="M60.0713 78.9044L60.0188 78.9193L47.1113 75.4609L46.2863 66.2942H34.65L36.2738 84.3413L60.015 90.8788L60.0713 90.8639V78.9044Z" :fill="colors.muted"/>
        <path d="M74.3512 60.0615L72.9562 75.4534L60.03 78.9119V90.8714L83.79 84.3412L83.9662 82.4001L85.98 60.0615H74.3512Z" :fill="colors.text"/>
        <path d="M60.0413 25.7895V37.2842H32.0438L31.8113 34.6996L31.2825 28.8724L31.005 25.7895H60.0413ZM60 49.054V60.5487H47.2538L47.0213 57.9641L46.4963 52.1369L46.2188 49.054H60Z" :fill="colors.muted"/>
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
    original: { primary: '#1572B6', secondary: '#33A9DC', text: '#FFFFFF', muted: '#EBEBEB' },
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
