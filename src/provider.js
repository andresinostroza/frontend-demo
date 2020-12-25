import ClientApi from '@/plugins/client-api'
import VideosService from '@/services/videos-service'
import VideoDetailService from '@/services/video-detail-service'

const fetchVideos = async () => {
  const videosResponse = await ClientApi.get('/videos')
  return new VideosService(videosResponse.data)
}

const fetchVideo = async (uuid) => {
  const videoResponse = await ClientApi.get(`/video/${uuid}`)
  return new VideoDetailService(videoResponse.data)
}

export {
  fetchVideos,
  fetchVideo
}
