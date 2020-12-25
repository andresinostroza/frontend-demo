<template>
  <b-list-group-item @click="$emit('click', video)" :active="isActive" button>{{name}}</b-list-group-item>
</template>

<script>
import VideoModel from '@/models/video-model'

export default {
  name: 'VideoAdItem',
  props: {
    video: {
      type: VideoModel,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    name () {
      return this.video.name
    }
  }
}
</script>
<style scoped>
</style>
