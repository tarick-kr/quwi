<template>
  <div class="section-content">
    <slot name="header" />
    <slot name="content" />
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: "PopupSection"
}
</script>

<style scoped lang="scss">
.section-content {
  padding: 27px 36px;
  border-radius: 6px;
  border: 1px solid #dedede;
}
.left-side {
  flex-grow: 1;
}
.top-line {
  margin-bottom: 24px;
}
.title-line {
  height: 36px;
  line-height: 36px;
  .title {
    margin-right: 24px;
    font-size: 28px;
    font-weight: 500;
    color: $color-accent;
  }
}
.form-line {
  display: flex;
  width: fit-content;
  &-input {
    margin-right: 24px;
    height: 36px;
    ::v-deep .value {
      height: 36px;
      min-height: 36px;
      input {
        font-size: 16px;
      }
    }
  }
  &-button {
    height: 36px;
    background-color: $color-primary;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    padding: 0 15px;
  }
}
.section-title {
  font-size: 15px;
  font-weight: 700;
}
</style>
