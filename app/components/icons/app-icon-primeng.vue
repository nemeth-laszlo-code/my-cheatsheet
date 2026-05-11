<template>
    <svg :style="{ width: sizeValue, height: sizeValue }" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <defs>
            <mask :id="`mask_primeng_${uid}`" maskUnits="userSpaceOnUse">
                <path fill="#fff" stroke-width="2.119" d="M28.3 0 .073 10.026l4.305 37.176L28.3 60.4l23.92-13.198 4.305-37.176Z"/>
            </mask>
        </defs>
        <path :fill="colors.primary" d="M64 0 4.181 21.248l9.124 78.784L64 128l50.695-27.968 9.124-78.784Z"/>
        <path :fill="colors.secondary" fill-rule="evenodd" d="M28.3 0v6.704-.03V60.4l23.922-13.197 4.305-37.177Z" clip-rule="evenodd" :mask="`url(#mask_primeng_${uid})`" transform="translate(4.027)scale(2.1192)"/>
        <path :fill="colors.text" d="m44.553 22.463-8.926 8.924 13.389 1.275 4.463-10.2h-8.926zm10.84 0-5.08 12.06-22.975-1.86 3.826 15.933L58.58 58.795h3.826V22.463zm9.564 0v36.332h4.463l27.416-10.2 3.826-15.933-23.611 1.863-5.08-12.062zm8.926 0 4.463 10.2 13.39-1.276-8.927-8.924zM31.8 51.146v21.67l15.303 12.748v-19.76l4.462-6.372-5.738 1.275-7.014-7.012zm63.76 0-7.014 2.55-7.014 7.011-5.738-1.275 4.465 6.373v19.76l15.3-12.749zm-41.522 8.192-5.086 7.664v28.74l3.815 5.748 4.45 4.47h12.716l4.45-4.47 3.815-5.748v-28.74l-5.086-7.664-3.18 1.916H57.22l-3.18-1.916zM38.814 81.102v8.287l8.29 8.285v-9.56zm49.733 0-8.287 7.011v9.56l8.287-8.284z"/>
    </svg>
</template>

<script setup>
import { computed } from 'vue'

const uid = Math.random().toString(36).slice(2, 7)

const props = defineProps({
    size: { type: [Number, String], default: 32 },
    variant: { type: String, default: 'original' },
    primary: String,
    secondary: String,
    text: String,
})

const variants = {
    original: { primary: '#dd0031', secondary: '#c3002f', text: '#ffffff' },
    accent:   { primary: 'var(--accent-color-1)', secondary: 'var(--accent-color-2)', text: 'var(--text-color-1)' },
    muted:    { primary: 'var(--bg-color-500)', secondary: 'var(--bg-color-100)', text: 'var(--text-color-2)' },
}

const sizeValue = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)
const colors = computed(() => ({
    primary:   props.primary   ?? variants[props.variant]?.primary   ?? variants.original.primary,
    secondary: props.secondary ?? variants[props.variant]?.secondary ?? variants.original.secondary,
    text:      props.text      ?? variants[props.variant]?.text      ?? variants.original.text,
}))
</script>
