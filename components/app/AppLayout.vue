<template>
  <div class="app-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppLayout'
};
</script>

<style lang="scss" scoped>
.app-layout {
  min-height: 100vh;
  padding: 60px 0 0 0;
  overflow: hidden;

  & > .container {
    padding: 16px;
  }
}
</style>
