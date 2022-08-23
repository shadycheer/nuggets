<style scoped></style>

<template>
  <div>
    <ListCard />
  </div>
</template>

<script lang="ts" setup>
import ListCard from './components/ListCard/index.vue'
import { homeServices } from '@/services/modules'
import { watchEffect } from 'vue'

const get = async () => {
  console.log(await homeServices.getRecommendList())
}
watchEffect(() => {
  get()
})
</script>