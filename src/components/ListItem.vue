<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-column flex-md-row bg-white rounded-4 shadow">
          <div class="image-wrapper">
            <img :src="props.image" class="rounded-start-4" :alt="props.address" />
          </div>
          <div class="flex-grow-1 d-flex text-start m-3">
            <div class="flex-grow-1">
              <h5 class="card-title">{{ props.address }}</h5>
              <p class="card-text">{{ props.price }}</p>
              <div v-if="data.isChecked.value">
                <i class="bi-calendar me-2" />
                {{ props.uploadDate }}
              </div>
            </div>
            <div>{{ data.isChecked }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    default: '',
  },
  address: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: null,
  },
  uploadDate: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: 'unchecked',
  },
})

const data = {
  isChecked: computed(() => (props.status === 'checked' ? true : false)),
}
</script>

<style>
.image-wrapper {
  width: 212px;
  height: 180px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
