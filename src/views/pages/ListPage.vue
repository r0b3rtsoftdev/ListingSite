<template>
  <div class="container d-flex">
    <SidebarView />

    <div class="flex-grow-1">Lista jön ide</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import SidebarView from '@/views/layout/SidebarView.vue';

const route = useRoute();
const { categoryName } = ref(route.params).value;

onMounted(() => {
  if (categoryName) {
    console.log('Category Name:', categoryName);
  } else {
    console.log('No category specified.');
  }
});
</script>
