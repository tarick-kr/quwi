<template>
  <app-layout class="layout-default">
    <div class="container">
      <nuxt />
    </div>
  </app-layout>
</template>

<script>
export default {
  name: 'LayoutAuth'
}
</script>

<style lang="scss" scoped>
.app-layout {
  background-color: $color-white;
  padding: 0;
}
.container {
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
