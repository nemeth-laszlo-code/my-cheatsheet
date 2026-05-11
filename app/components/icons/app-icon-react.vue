<template>
    <svg :style="{ width: sizeValue, height: sizeValue }" viewBox="-11.5 -11.5 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <circle cx="0" cy="0" r="2.05" :fill="colors.primary"/>
        <g :stroke="colors.primary" stroke-width="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: { type: [Number, String], default: 32 },
    variant: { type: String, default: 'original' },
    primary: String,
})

const variants = {
    original: { primary: '#61dafb' },
    accent:   { primary: 'var(--accent-color-1)' },
    muted:    { primary: 'var(--bg-color-500)' },
}

const sizeValue = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)
const colors = computed(() => ({
    primary: props.primary ?? variants[props.variant]?.primary ?? variants.original.primary,
}))
</script>
