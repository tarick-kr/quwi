<template>
  <div class="app-header">
    <div class="container fluid">
      <nuxt-link to="/">
        <img class="logo" src="~/assets/img/logo.svg" alt="Logo Test" />
      </nuxt-link>
      <app-header-menu />
    </div>
  </div>
</template>

<script>
import { mdiMenu } from '@mdi/js'

export default {
  name: 'AppHeader',

  icons: {
    mdiMenu
  }
}

</script>

<style lang="scss" scoped>
.app-header {
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  padding: 0 12px;
  border-bottom: 1px solid $color-border;
  background-color: $color-white;
  box-shadow: $shadow-6;
  @include media-md {
    left: 0;
  }
  .container {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .logo {
    display: block;
  }
}
</style>
