import VideoModel from '@/models/video-model'

export default class VideosService {
  constructor (rawData) {
    this.data = rawData.map(video => new VideoModel(video))
  }

  getAll () {
    return this.data
  }

  getDefault () {
    return this.data.length > 0 ? this.data[0] : undefined
  }
}
