<script setup lang="ts">
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

import type { WLIconName } from './types'

const props = defineProps({
  name: {
    type: String as PropType<WLIconName>,
    required: true,
  },
  size: Number,
  color: String,
  strokeWidth: {
    default: 2,
    type: Number,
  },
  defaultClass: String,
})

const icon: any = computed(() => icons[props.name])
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>
