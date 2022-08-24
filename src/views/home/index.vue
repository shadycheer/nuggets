<style scoped></style>

<template>
  <div v-for="d in data">
    <ListCard :data="d"/>
  </div>
</template>

<script lang="ts" setup>
import ListCard from './components/ListCard/index.vue'
import {homeServices} from '@/services/modules'
import {watchEffect} from 'vue'
import {useLoadList} from '@/composables/useList'

const {
  fetchData: fetchMainList,
  data,
  loading,
  refreshing,
  finished
} = useLoadList(homeServices.getRecommendList, {
  params: {
    limit: 20,
    cursor: '1',
    id_type: 2,
    client_type: 2608,
    sort_type: 200,
  },
})
watchEffect(async () => {
  await fetchMainList()
  console.log(data.value)
})
</script>