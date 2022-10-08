<template>
  <div class="error-404">
    <div class="code">404</div>
    <div class="message">{{ error.message }}</div>
    <nuxt-link class="link" to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Error404",
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  }
}
</script>

<style lang="scss" scoped>
.error-404 {
  width: 100%;
  height: 100%;
  text-align: center;
}
.code {
  margin-bottom: 16px;
  font-size: 64px;
  font-weight: 700;
}
.message {
  margin-bottom: 16px;
}
.link {
  color: $color-primary;
  &:hover {
    text-decoration: underline;
  }
}

</style>
