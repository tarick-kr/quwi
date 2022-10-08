<template>
  <div class="error-500">
    <div class="code">500</div>
    <div class="message">{{ error.message }}</div>
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
.error-500 {
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
