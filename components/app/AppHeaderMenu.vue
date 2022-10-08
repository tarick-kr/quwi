<template>
  <div class="app-header-menu">
    <nuxt-link class="app-header-menu-item" to="/">Projects</nuxt-link>
    <span class="app-header-menu-item" @click="logout">Logout</span>
  </div>
</template>

<script>

export default {
  name: 'AppHeaderMenu',

  methods: {
    async logout() {
      await this.$logout()
      this.$store.commit('auth/SET_TOKEN', '')
      this.$cookies.remove('TOKEN')
      this.$router.push('/auth/login')
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header-menu {
  display: flex;
  align-items: center;
  margin-left: auto;
  &-item {
    margin-left: 40px;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      color: $color-primary;
    }
  }
  &-item.nuxt-link-exact-active {
    color: $color-primary;
  }
}
</style>
