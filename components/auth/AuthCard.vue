<template>
  <div class="auth-card">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthCard'
};
</script>

<style lang="scss" scoped>
.auth-card {
  display: flex;
  flex-direction: column;
  margin: 0 0 72px 0;
  border-radius: 15px;
  padding: 25px 40px 35px;
  min-width: 440px;
  min-height: fit-content;
  background-color: $color-white;
  box-shadow: $shadow-7;

  .header {
    text-align: center;
    margin-bottom: 24px;
    img {
      height: 44px;
    }
  }

  .content ::v-deep {
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 20px;
      &:last-child {
        margin-top: 10px;
      }
    }
  }
  .footer {
    text-align: center;
    margin-top: 10px;
    a {
      color: $color-primary;
      &:hover {
        color: $color-primary-dark;
        text-decoration: underline;
      }
    }
  }
}

</style>
