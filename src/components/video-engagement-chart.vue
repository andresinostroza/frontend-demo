<template>
    <highcharts :options="videoEngagementChartOptions" class="h-100"></highcharts>
</template>

<script>
import videoDetailService from '@/services/video-detail-service'
import { Chart } from 'highcharts-vue'

export default {
  name: 'videoEngagementChart',
  components: {
    highcharts: Chart
  },
  props: {
    video: {
      type: videoDetailService,
      required: true
    }
  },
  computed: {
    videoEngagementChartOptions () {
      return {
        ...this.$options.chartDefaultOptions,
        series: [
          this.engagementSerie
        ],
        annotations: [
          {
            labels: this.sceneMarkers
          }
        ]
      }
    },
    engagements () {
      return this.video.engagement
    },
    engagementSerie () {
      return {
        data: this.engagements,
        name: 'Engagement'
      }
    },
    sceneSerie () {
      return { data: this.sceneData, name: 'Scene' }
    },
    sceneMarkers () {
      return this.video.sceneMarkers
    },
    scenes () {
      return this.video.scenes
    }
  },
  chartDefaultOptions: {
    title: {
      text: 'Engagement time series'
    },
    yAxis: {
      title: {
        text: 'Engagement'
      }
    },
    xAxis: {
      title: {
        text: 'Seconds'
      }
    },
    annotations: [],
    credits: {
      enabled: false
    },
    series: []
  }
}
</script>

<style>

</style>
