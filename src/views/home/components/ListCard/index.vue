<style lang="less" scoped>
@import '@/assets/less/index';

.container {
  width: 660px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    background: #faf9f9;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 14px;

    &_left {
      display: flex;
      align-items: center;
      color: #86909c;
    }

    &_right {
      width: 20px;
      height: 20px;
      color: #86909c;
      cursor: pointer;
      &:hover {
        color: rgba(93, 148, 255, 0.97);
      }
    }
  }

  &-main {
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-height: 200px;
    font-size: 16px;

    &_content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      &__title {
        max-width: 500px;
        font-weight: bolder;
        .utils-ellipsis();
      }

      &__brief {
        line-height: 24px;
        font-size: 13px;
        color: #86909c;
        width: v-bind(width);
        .utils-clamp(v-bind(clamp))
      }

      &__footer {
        display: flex;
        align-items: center;
        color: #4e5969;
        font-size: 14px;
      }
    }

    &_img {
      background: transparent;
      border-radius: 2px;
      width: 120px;
      height: 80px;
      object-fit: cover;

    }

  }
}

.flex-center {
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="container" @mouseenter="setClose" @mouseleave="setClose(false)">
    <div class="container-header">
      <div class="container-header_left">
        <div style="color: black">{{ item_info.author_user_info?.user_name }}</div>
        <el-divider direction="vertical"/>
        <div>{{ time }}</div>
        <el-divider direction="vertical"/>
        <div>{{ tag }}</div>
      </div>
      <div v-if="close" class="container-header_right" @click="deleteItem">
        <Close></Close>
      </div>
    </div>
    <div class="container-main">
      <div class="container-main_content">
        <div class="container-main_content__title">
          <span>{{ item_info.article_info?.title }}</span>
        </div>
        <div class="container-main_content__brief">
          <span>
            {{ item_info.article_info?.brief_content }}
          </span>
        </div>
        <div class="container-main_content__footer">
          <div class="flex-center">
            <el-icon style="margin-right: 5px">
              <View/>
            </el-icon>
            <div>{{ item_info.article_info?.view_count }}</div>
          </div>
          <div class="flex-center">
            <el-icon style="margin-right: 5px">
              <Star/>
            </el-icon>
            <div>{{ item_info.article_info?.collect_count }}</div>
          </div>
          <div class="flex-center">
            <el-icon style="margin-right: 5px">
              <ChatDotSquare/>
            </el-icon>
            <div>{{ item_info.article_info?.comment_count || '评论' }}</div>
          </div>
        </div>
      </div>
      <div class="container-main_img" v-if="item_info.article_info?.cover_image">
        <img class="container-main_img" :src="item_info.article_info.cover_image" loading="lazy"/>
      </div>
    </div>
    <el-divider style="margin-bottom: 0; margin-top: 10px"/>
  </div>
</template>

<script lang="ts" setup>
import {PropType, ref} from 'vue'
import {ChatDotSquare, Close} from '@element-plus/icons'
import {DataRes} from '@/composables/types'
import formatTime from '@/utils/time'

const props = defineProps({
  data: {
    type: Object as PropType<DataRes>,
    required: true,
  },
  index: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(['delete'])
const {data, index} = props
const {item_info} = data
const tag = item_info.tags.map(i => i.tag_name).join(' · ')
const time = formatTime(parseInt(item_info.article_info.ctime) * 1000)
const haveImg = !!item_info.article_info.cover_image
const width = haveImg ? '520px' : '660px'
const clamp = haveImg ? 2 : 1
const close = ref(false)
const setClose = (val: boolean = !close) => (close.value = val)
const deleteItem = () => {
  console.log(index)
  emits('delete', index)
}
</script>