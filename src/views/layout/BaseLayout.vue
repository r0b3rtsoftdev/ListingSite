<template>
  <HeaderView />

  <main class="content">
    <slot />
  </main>

  <FooterView />
</template>

<script setup lang="ts">
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #323ec81a;
}

.content {
  flex: 1;
  padding-top: 70px;
}
</style>
