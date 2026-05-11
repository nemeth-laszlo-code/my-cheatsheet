<!-- components/icons/IconAngular.vue -->
<template>
    <svg 
        :style="{ width: sizeValue, height: sizeValue }"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMidYMid meet"
    >
        <path 
            d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z" 
            :fill="colors.primary"
        />
        <path 
            d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z" 
            :fill="colors.secondary"
        />
        <path 
            d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z" 
            :fill="colors.text"
        />
    </svg>
</template>

<script setup>
const props = defineProps({
    size: {
        type: [Number, String],
        default: 32
    },
    variant: {
        type: String,
        default: 'original',
        // original | accent | muted | custom
    },
    // egyedi felülírás
    primary: String,
    secondary: String,
    text: String,
})

const variants = {
    original: {
        primary:   '#E23237',
        secondary: '#B52E31',
        text:      '#FFFFFF',
    },
    accent: {
        primary:   'var(--accent-color-1)',
        secondary: 'var(--accent-color-2)',
        text:      'var(--text-color-1)',
    },
    muted: {
        primary:   'var(--bg-color-500)',
        secondary: 'var(--bg-color-100)',
        text:      'var(--text-color-2)',
    },
    dark: {
        primary:   'var(--bg-color-800)',
        secondary: 'var(--bg-color-900)',
        text:      'var(--text-color-1)',
    },
}

const sizeValue = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)

const colors = computed(() => ({
    primary:   props.primary   ?? variants[props.variant]?.primary   ?? variants.original.primary,
    secondary: props.secondary ?? variants[props.variant]?.secondary ?? variants.original.secondary,
    text:      props.text      ?? variants[props.variant]?.text      ?? variants.original.text,
}))
</script>