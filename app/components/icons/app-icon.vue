<!-- components/AppIcon.vue -->
<template>
 <span class="flex items-center justify-center">
    <component
        v-if="iconComponent"
        :is="iconComponent"
        :size="size"
        :variant="variant"
       

    />
    </span>
</template>

<script setup>
import { computed } from 'vue'
import { useIcon } from '../../composables/useIcon'
const props = defineProps({
    name:    { type: String, required: true },
    size:    { type: [Number, String], default: 32 },
    variant: { type: String, default: 'original' },
})

const iconComponent = computed(() => useIcon(props.name))
</script>

<style>
@reference "@/assets/css/main.css";
   
</style>