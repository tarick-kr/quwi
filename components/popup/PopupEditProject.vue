<template>
  <div class="popup-content">
    <popup-section>
      <template #content>
        <div class="container d-flex p-0">
          <div class="left-side">
            <template v-if="editName">
              <div class="form top-line">
                <div class="form-line" v-click-outside="closeEditName">
                  <form-input
                    class="form-line-input"
                    v-model="model.name"
                    :error.sync="errors.name"
                    @input="handleInput"
                  />
                  <base-button class="form-line-button" @click="$emit('updateProject')">
                    Save
                  </base-button>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="title-line top-line">
                <span class="title">{{ model.name }}</span>
                <button @click="editName = !editName">
                  <base-icon :icon="$options.icons.mdiPencil" />
                </button>
              </div>
            </template>
          </div>
          <div class="right-side">
            <div class="avatar">
              <img class="avatar-img" :src="model['logo_url']" alt="" width="80" height="80">
            </div>
          </div>
        </div>
      </template>
    </popup-section>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import { mdiPencil } from "@mdi/js";

export default {
  name: "PopupEditProject",

  icons: {
    mdiPencil
  },

  props: {
    value: {
      type: Object,
      default: () => {}
    },
    errors: {
      type: Object,
      default: () => {}
    }
  },

  directives: {
    clickOutside: vClickOutside.directive
  },

  data: () => ({
    editName: false
  }),

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
      this.model.name = e
      this.$emit('updated');
    },
    closeEditName() {
      this.editName = false
    }
  }
}
</script>

<style scoped lang="scss">
.popup-content {
  margin: 12px;
  padding: 30px;
  color: #000;
  background: #fff;
}

</style>
