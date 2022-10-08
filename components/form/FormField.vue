<template>
  <div :class="['form-field', { inline, ['inline-top']: inlineTop, focused, disabled, required, error: !!error, active }]">
    <div v-if="$slots.label" class="label">
      <div class="text"><slot name="label" /></div>
      <div v-if="hint && !errorMessage" class="hint">{{ hint }}</div>
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <slot name="field">
      <div class="value" @click="handleClick">
        <div v-if="$slots.left" class="left">
          <slot name="left" />
        </div>
        <slot name="value" />
        <div v-if="$slots.right" class="right">
          <slot name="right" />
        </div>
        <slot />
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'FormField',

  props: {
    inline: Boolean,
    inlineTop: Boolean,
    required: Boolean,
    focused: Boolean,
    disabled: Boolean,
    error: {
      type: [Array, String, Boolean],
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    active: Boolean
  },

  computed: {
    errorMessage() {
      return Array.isArray(this.error) ? this.error[0] : typeof this.error === 'string' ? this.error : '';
    }
  },

  methods: {
    handleClick(e) {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
.form-field {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > .label {
    margin-bottom: 6px;
    font-size: 18px;
    line-height: 18px;
    position: absolute;
    top: 17px;
    left: 8px;
    background-color: $color-white;
    padding: 0 8px;
    opacity: 0;
    z-index: -1;
    transition: all 0.25s ease;

    .text {
      font-weight: 400;
      color: $color-primary;
    }

    .hint {
      font-style: italic;
      font-size: 12px;
      color: $color-text-secondary;
    }
  }

  & > .value {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid $color-border;
    border-radius: 5px;
    min-height: 40px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    background-color: $color-white;

    ::v-deep {
      & > input,
      & > textarea {
        border: none;
        padding: 0 15px;
        width: 100%;
        height: 52px;
        min-width: 1px;
        font-size: 18px;
        line-height: 18px;
        background: transparent;
      }
      & > textarea {
        height: 100%;
      }
    }
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    ::v-deep {
      & > button > .base-icon,
      & > .base-icon {
        color: $color-icon;
      }
    }
  }

  .left {
    margin-left: 8px;
  }

  .right {
    margin-right: 8px;
  }

  .error-message {
    position: absolute;
    font-size: 18px;
    line-height: 18px;
    top: -8px;
    left: 8px;
    padding: 0 8px;
    color: $color-error;
    background-color: $color-white;
    z-index: 1;
  }

  @include media-sm-up {
    &.inline {
      flex-direction: row;

      & > .label {
        margin: auto 16px auto 0;
        flex: 0 0 170px;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
      }

      & > .value {
        flex: 1;
      }
    }
  }

  &.focused {
    & > .value {
      //border: 1px solid $color-accent;
    }
  }

  &.active {
    & > .label {
      z-index: 1;
      opacity: 1;
      transform: translateY(-25px);
    }
  }

  &.disabled {
    opacity: 0.75;
  }

  &.required {
    & > .label .text {
      &::after {
        content: '*';
        display: inline;
        color: $color-error;
      }
    }
  }

  &.error {
    & > .value {
      border: 1px solid $color-error;
    }
  }

  &.inline-top {
    & > .label {
      margin-top: 12px;
    }
  }
}
</style>
