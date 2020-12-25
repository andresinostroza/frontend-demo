<template>
  <b-overlay :show="loadingVideos" rounded="sm">
    <b-container fluid v-if="renderHome">
      <b-row>
        <b-col cols="2">
          <VideoAdList :videos="videos" :default-video="selectedVideoAd" @click="onChangeVideo"/>
        </b-col>
        <b-col cols="10">
          <VideoEngagementChart v-if="videoDetailService" :video="videoDetailService"></VideoEngagementChart>
          <b-skeleton-img v-else no-aspect height="150px"></b-skeleton-img>
        </b-col>
      </b-row>
    </b-container>
  </b-overlay>
</template>

<script>
import VideoAdList from '@/components/video-ad-list.vue'
import VideoEngagementChart from '@/components/video-engagement-chart.vue'
import { fetchVideos, fetchVideo } from '@/provider'
import ApiError from '@/models/api-error'

export default {
  name: 'Home',
  components: {
    VideoAdList,
    VideoEngagementChart
  },
  data () {
    return {
      loadingVideos: null,
      loadingVideoDetail: null,
      videosService: null,
      videoDetailService: null
    }
  },
  async created () {
    await this.getVideos()
    const { uuid } = this.selectedVideoAd
    await this.getVideoDetail(uuid)
  },
  computed: {
    renderHome () {
      return !!this.videosService
    },
    selectedVideoAd () {
      return this.videosService.getDefault()
    },
    videos () {
      return this.videosService.getAll()
    }
  },
  methods: {
    async getVideos () {
      this.loadingVideos = true
      try {
        this.videosService = await fetchVideos()
      } catch (err) {
        if (err instanceof ApiError) {
          this.$router.push('/500')
        } else {
          this.$router.push('/501')
        }
      } finally {
        this.loadingVideos = false
      }
    },
    async getVideoDetail (uuid) {
      this.loadingVideoDetail = true
      try {
        this.videoDetailService = await fetchVideo(uuid)
      } catch (err) {
        if (err instanceof ApiError) {
          this.$router.push('/500')
        } else {
          this.$router.push('/501')
        }
      } finally {
        this.loadingVideoDetail = false
      }
    },
    onChangeVideo (video) {
      this.getVideoDetail(video.uuid)
    }
  }
}
</script>
