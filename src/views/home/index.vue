<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-nav {
    z-index: 99999;
  }
  &-list {
    margin-top: 100px;
  }
}
</style>

<template>
  <div class="home" v-infinite-scroll="fetchMainList" v-loading="loading" element-loading-text="加载中">
    <Nav class="home-nav"/>
    <div class="home-list">
      <div  v-for="(d, index) in listData">
        <ListCard :data="d" :index="index" :key="d.item_info.article_id" @delete="deleteItem"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ListCard from './components/ListCard/index.vue'
import Nav from '@/components/Nav/index.vue'
import {homeServices} from '@/services/modules'
import {onMounted, ref, watchEffect} from 'vue'
import {useLoadList} from '@/composables/useList'
import {DataRes} from '@/composables/types'

const listData = ref<DataRes[]>([])
let {
  fetchData: fetchMainList,
  data,
  loading,
  refreshing,
  finished,
} = useLoadList(homeServices.getRecommendList, {
  params: {
    limit: 20,
    cursor: '1',
    id_type: 2,
    client_type: 2608,
    sort_type: 200,
  },
  onSuccess() {
    listData.value = data.value.filter(i => i.item_type === 2)
  }
})

const deleteItem = (val: number) => {
  listData.value = listData.value.filter((i, index) => index !== val)
}

onMounted(() => {
  fetchMainList()
})

</script>