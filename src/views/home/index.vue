<style scoped></style>

<template>
  <div>hahah</div>
</template>

<script lang="ts" setup>
import { homeServices } from '../../services/modules'
import { watchEffect } from 'vue'

const get = async () => {
  console.log(await homeServices.getRecommendList())
}
watchEffect(() => {
  get()
})
</script>