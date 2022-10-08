<template>
  <div class="page-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import error404 from '~/components/error/Error404.vue'
import error500 from '~/components/error/Error500.vue'

export default {
  name: 'PageError',

  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    errorPage() {
      if (this.error?.statusCode === 404) {
        return error404;
      }
      return error500;
    }
  }
}
</script>

<style lang="scss" scoped>
.page-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  color: $color-text-primary;
}
</style>
