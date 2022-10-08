<template>
  <form-field
    class="form-input"
    :disabled="disabled"
    :error.sync="error"
    :focused="focused"
    :active="model !== ''"
    :hint="hint"
    :inline="inline"
    :required="required"
    @click="$refs.input.focus()"
  >
    <template v-if="label" #label>
      {{ label }}
    </template>
    <template v-if="$slots.left" #left>
      <slot name="left"></slot>
    </template>
    <template #value>
      <input
        ref="input"
        v-bind="$attrs"
        :disabled="disabled"
        :value="model"
        @blur="focused = false"
        @change="handleChange"
        @focus="focused = true"
        @input="handleInput"
      />
    </template>
    <template v-if="$slots.right" #right>
      <slot name="right"></slot>
    </template>
  </form-field>
</template>

<script>
export default {
  name: 'FormInput',

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    inline: Boolean,
    disabled: Boolean,
    required: Boolean,
    error: {
      type: [Array, String, Boolean],
      default: ''
    },
    hint: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      focused: false
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
    }
  },
  methods: {
    handleInput(evt) {
      this.model = evt.target.value;
      this.$emit('updateError');
      this.$emit('activated');
    },

    handleChange(evt) {
      this.$emit('change', evt.target.value);
      this.$emit('updateError');
    }
  }
};
</script>
