<template>
  <div class="base-project-card-default" @click="$emit('openPopup', project.id)">
    <div class="avatar">
      <img class="avatar-img" :src="project['logo_url']" alt="" width="51" height="51">
    </div>
    <div class="content">
      <h2 class="content-title">{{ project.name }}</h2>
    </div>
    <div class="actions">
      <span class="actions-text">No workers</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BaseProjectCardDefault',

  props: {
    project: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.base-project-card-default {
  margin-bottom: 6px;
  width: 100%;
  align-items: center;
  position: relative;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #dedede;
  padding: 25px;
  cursor: pointer;
  font-size: .9em;
  height: 90px;
  transition: all 0.25s ease;
  &:hover {
    background: #ececec;
  }
}

.avatar {
  padding: 0;
  flex: 1;
  margin-right: 25px;
  max-width: 65px;
  cursor: pointer;
  &-img {
    user-select: none;
    border-radius: 50%;
  }
}

.content {
  flex: 2;
  overflow: hidden;
  cursor: pointer;
  font-size: .9em;
  &-title {
    font-weight: 500;
    font-size: 14px;
    color: $color-text-primary
  }
}

.actions {
  span {
    font-weight: 500;
    font-size: 14px;
    color: $color-text-primary
  }
}
</style>
