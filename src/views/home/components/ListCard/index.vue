<style lang="less" scoped>
@import '@/assets/less/index';

.container {
  width: 700px;
  height: auto;
  border: 1px red solid;
  display: flex;
  flex-direction: column;

  &:hover {
  }

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 5px 10px;

    &_left {
      display: flex;
    }

    &_right {
      width: 24px;
      height: 24px;
      color: gray;
    }
  }

  &-main {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 5px 10px 10px 10px;

    &_content {
      &__title {
        font-size: 30px;
        max-width: 500px;
        font-weight: bolder;
        .utils-ellipsis();
      }

      &__brief {
        margin-top: 10px;
        max-width: 500px;
        .utils-ellipsis();
      }

      &__footer {
        display: flex;
        margin-top: 10px;
      }
    }

    &_img {
      width: 150px;
      background: red;
    }
  }
}
</style>

<template>
  <div class="container" @mouseenter="setClose" @mouseleave="setClose(false)">
    <div class="container-header">
      <div class="container-header_left">
        <div>hello</div>
        <div>|</div>
        <div>22天前</div>
        <div>|</div>
        <div>前端</div>
      </div>
      <div v-if="close" class="container-header_right">
        <Close></Close>
      </div>
    </div>
    <div class="container-main">
      <div class="container-main_content">
        <div class="container-main_content__title">
          <span>hahahhadasdasdasdadasdsadsdsdsadashh</span>
        </div>
        <div class="container-main_content__brief">
          <span>
            dhsauihdsuiadhasiudhasuidhasiudhasuidhasuidhauisdhuiashduashdiuashudisahiudhui
          </span>
        </div>
        <div class="container-main_content__footer">
          <div>views</div>
          <div>|</div>
          <div>like</div>
          <div>|</div>
          <div>commet</div>
        </div>
      </div>
      <div class="container-main_img">
        <div>66666</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Close } from '@element-plus/icons'

const close = ref(false)
const setClose = (val: boolean = !close) => (close.value = val)
</script>