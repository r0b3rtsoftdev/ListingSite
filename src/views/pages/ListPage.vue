<template>
  <div class="container d-flex">
    <div>
      <SidebarView />
    </div>

    <div class="flex-grow-1">
      <PageHeader :title="data.pageTitle.value" :itemNumber="data.itemNumber.value" />

      <div v-if="data.itemNumber.value === 0">Nincs találat.</div>
      <div v-else>
        <template v-for="item in data.items.value" :key="item.adId">
          <ListItem :image="item.image" :address="item.address" :price="item.price" :uploadDate="item.uploadDate" :status="item.status" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import SidebarView from '@/views/layout/SidebarView.vue'
import PageHeader from '@/components/PageHeader.vue'
import ListItem from '@/components/ListItem.vue'

const route = useRoute()
const store = useStore()
const categoryName = ref(route.params.categoryName)

onMounted(async () => {
  data.items.value = await store.dispatch('getItems')
})

const data = {
  pageTitle: computed(() => (categoryName.value === 'favourites' ? 'Kedvencek' : 'Lista')),
  itemNumber: computed(() => data.items.value.length ?? 0),
  items: ref([]),
}
</script>
