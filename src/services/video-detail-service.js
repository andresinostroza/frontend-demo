import VideoDetailModel from '@/models/video-detail-model'

export default class VideoDetailService {
  constructor (rawData) {
    this.data = new VideoDetailModel(rawData)
  }

  getVideoDetail () {
    return this.data
  }

  get engagement () {
    return this.data.engagement
  }

  get engagementSerie () {
    return this.engagement.map((metric, index) => [index, metric])
  }

  get scenes () {
    return this.data.scenes
  }

  getSceneTimestampByName (name) {
    return this.scenes[name]
  }

  get sceneOrderdedTimestamp () {
    return Object.values(this.data.scenes).sort((a, b) => a - b)
  }

  get sceneMarkers () {
    return Object.keys(this.scenes).map(sceneName => ({
      point: {
        xAxis: 0,
        yAxis: 1,
        x: this.getSceneTimestampByName(sceneName),
        y: 0
      },
      text: sceneName
    }))
  }
}
