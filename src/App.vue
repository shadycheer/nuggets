<script lang="ts" setup></script>

<template>
  <router-view />
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
