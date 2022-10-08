<template>
  <component
    :is="buttonComponent"
    :disabled="disabled"
    v-bind="buttonProps"
    :class="['base-button', { active }]"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',

  components: {},

  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    active: Boolean,
    disabled: Boolean
  },

  computed: {
    buttonComponent() {
      if (this.href) {
        return 'a';
      } else if (this.to) {
        return 'nuxt-link';
      } else {
        return 'button';
      }
    },

    buttonProps() {
      const props = this.$attrs;
      if (this.buttonComponent === 'a') {
        return { ...props, href: this.href };
      } else if (this.buttonComponent === 'nuxt-link') {
        return { ...props, to: this.to };
      }
      return props;
    }
  }
};
</script>

<style lang="scss" scoped>
.base-button {
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: none;
  font-weight: 600;
  transition: all 0.1s ease;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  color: $color-white;
  background-color: $color-accent;
  border-radius: 9px;
  padding: 0 12px;
  height: 52px;
  font-size: 20px;
  &.active:not([disabled]),
  &:hover:not([disabled]) {
    color: $color-white;
    opacity: 0.8;
  }
  &[disabled] {
    opacity: 0.5;
  }
}
</style>
