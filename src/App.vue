<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="less" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &__vue {
    height: 6em;
    padding: 1.5em;
    will-change: filter;

    &:hover {
      filter: drop-shadow(0 0 2em #42b883aa);
    }
  }
}
</style>