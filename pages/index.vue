<template>
  <div class="page-index">
    <div class="container p-header">
      <h1 class="p-title">Projects</h1>
    </div>
    <div class="container p-content">
      <projects-list
        :projects="projects"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageIndex',

  layout: 'default',

  middleware: ['authorization'],

  async asyncData({ store, $getProjects}) {
    try {
      const { projects } = await $getProjects()
      store.commit('projects/SET_PROJECTS', projects)
    } catch (err) {
      console.error(err.response.data);
    }
  },

  computed: {
    ...mapGetters({
      projects: 'projects/getData'
    })
  }
}

</script>

<style lang="scss" scoped>
  .p-header {
    width: 760px;
    margin: 15px auto;
  }
  .p-title {
    user-select: none;
    margin-top: 40px;
    text-align: center;
    font-size: 28px;
    color: #c44512;
  }
</style>
