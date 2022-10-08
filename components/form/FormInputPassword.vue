<template>
  <form-input
    v-model="model"
    class="form-input-password"
    v-bind="$attrs"
    :disabled="disabled"
    :error.sync="error"
    :inline="inline"
    :label="label"
    :placeholder="placeholder"
    :required="required"
    :type="type"
    @change="handleChange"
    @activated="$emit('activated')"
    @updateError="$emit('update:error')"
  >
    <template #right>
      <button @click="toggleType">
        <base-icon :icon="icon" />
      </button>
    </template>
  </form-input>
</template>

<script>
import { mdiEye, mdiEyeOff } from '@mdi/js';

export default {
  name: 'FormInputPassword',

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    inline: Boolean,
    disabled: Boolean,
    required: Boolean,
    error: {
      type: [Array, String, Boolean],
      default: ''
    }
  },

  data() {
    return {
      type: 'password'
    };
  },

  computed: {
    model: {
      get() {
        return this.value;
      },

      set(v) {
        this.$emit('input', v);
      }
    },

    icon() {
      return this.type === 'password' ? mdiEye : mdiEyeOff;
    }
  },

  methods: {
    toggleType() {
      this.type = this.type === 'password' ? 'text' : 'password';
    },
    handleChange(v) {
      this.$emit('change', v);
    }
  }
};
</script>

<style lang="scss" scoped></style>
