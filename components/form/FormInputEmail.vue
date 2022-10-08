<template>
  <form-input
    v-model="model"
    class="form-input-email"
    v-bind="$attrs"
    :disabled="disabled"
    :error.sync="error"
    :inline="inline"
    :label="label"
    :placeholder="placeholder"
    :required="required"
    @change="handleChange"
    @input="handleInput"
    @activated.once="$emit('activated')"
    @updateError="$emit('update:error')"
  >
    <template #right>
      <div v-if="activatedEmail" class="icon-valid">
        <base-icon :icon="$options.icons.mdiCheck" />
      </div>
    </template>
  </form-input>
</template>

<script>
import { mdiCheck } from '@mdi/js';

export default {
  name: 'FormInputEmail',

  icons: {
    mdiCheck
  },

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
    },
    activatedEmail: {
      type: [Number, Boolean],
      default: 0
    }
  },

  data: () => ({}),

  computed: {
    model: {
      get() {
        return this.value;
      },

      set(v) {
        this.$emit('input', v);
      }
    }
  },

  methods: {
    handleInput(e) {
      this.model = e;
    },
    handleChange(e) {
      this.$emit('change', e);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-input-email {
  .icon-valid {
    color: #00ad26;
  }
}
</style>
