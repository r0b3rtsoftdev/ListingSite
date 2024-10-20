<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col-6 bg-white rounded-4 shadow p-4 w-100">
        <div class="row">
          <div class="col text-start">{{ props.title }}</div>
          <div class="col text-end" v-if="itemNumber !== null">{{ props.itemNumber }} db</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  itemNumber: {
    type: Number,
    default: null,
  },
})
</script>
