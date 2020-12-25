<template>
  <b-list-group class="videos-list">
    <VideoAd
      v-for="video in videos"
      :key="video.uuid"
      :video="video"
      :isActive="isActive(video)"
      @click="onClick"
    />
  </b-list-group>
</template>

<script>
import VideoAd from '@/components/video-ad'
import VideoModel from '@/models/video-model'

export default {
  name: 'VideoAdList',
  components: {
    VideoAd
  },
  computed: {
    defaultVideo () {
      return this.videos.length > 0 ? this.videos[0] : new VideoModel({ name: 'Something went wrong getting the videos' })
    }
  },
  created () {
    this.selectedVideo = { ...this.defaultVideo }
  },
  data () {
    return {
      selectedVideo: null
    }
  },
  methods: {
    isActive (video) {
      return video.uuid === this.selectedVideo.uuid
    },
    onClick (clickedVideo) {
      this.selectedVideo = clickedVideo
      this.$emit('click', clickedVideo)
    }
  },
  props: {
    videos: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.videos-list {
  max-height: 90vh;
  overflow-y: scroll;
}
</style>
