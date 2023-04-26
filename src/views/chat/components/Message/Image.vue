<script setup lang="ts">
import { NImage } from 'naive-ui'

interface Props {
  inversion?: boolean
  error?: boolean
  text?: string
  loading?: boolean
  filePreview?: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-80">
    <NImage :src="filePreview" :alt="text" />
  </div>
</template>
