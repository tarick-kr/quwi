<template>
  <div class="project-list">
    <base-project-card-default
      v-for="(project, index) in projects"
      :key="project.id"
      :project="project"
      :index="index"
      @openPopup="openPopup"
    />

    <client-only>
      <modal
        name="popup-project"
        width="800"
        height="auto"
        :adaptive="true"
        @closed="clear"
      >
        <popup-edit-project
          v-model="project"
          :errors="errors"
          @updated="errors = {}"
          @updateProject="onSave"
        />
      </modal>
    </client-only>
  </div>
</template>

<script>
import { handleAuthErrors } from "@/utils"

export default {
  name: 'ProjectsList',

  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    project: {},
    errors: {}
  }),

  methods: {
    async openPopup(id) {
      try {
        const { project } = await this.$getProject(id)
        this.project = project
        this.$modal.show('popup-project')
      } catch (err) {
        console.error(err);
      }

    },

    closePopup() {
      this.$modal.hide('popup-project')
      this.clear()
    },

    async onSave() {
      try {
        const project = new FormData()
        project.append('name', this.project.name)
        await this.$updateProject(this.project.id, project)
        this.closePopup()
        location.href = '/'
      } catch (err) {
        console.error(err);
        this.errors = handleAuthErrors(err);
      }
    },

    clear() {
      this.$nextTick(() => {
        this.project = {}
        this.errors = {}
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.project-list {
  display: flex;
  flex-wrap: wrap;
  margin: 15px auto 50px;
  width: 760px;
  position: relative;
  padding-bottom: 30px;
}

</style>

<style>
  .vm--modal {
    border-radius: 6px!important;
  }
</style>
