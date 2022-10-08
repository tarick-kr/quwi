<template>
  <svg
    class="base-icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    v-on="$listeners"
  >
    <g fill="currentColor">
      <path :d="icon" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'BaseIcon',

  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 24
    }
  }
};
</script>

<style lang="scss" scoped>
.base-icon {
  vertical-align: bottom;
}
</style>
