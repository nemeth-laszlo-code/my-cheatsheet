<template>
    <svg :style="{ width: sizeValue, height: sizeValue }" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" :fill="colors.primary"/>
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
    original: { primary: '#007FFF' },
    accent:   { primary: 'var(--accent-color-1)' },
    muted:    { primary: 'var(--text-color-1)' },
}

const sizeValue = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)
const colors = computed(() => ({
    primary: props.primary ?? variants[props.variant]?.primary ?? variants.original.primary,
}))
</script>
