import { createLocalVue, mount } from '@vue/test-utils'
import { ListGroupPlugin } from 'bootstrap-vue'

import VideoAdList from '@/components/video-ad-list.vue'
import VideoAd from '@/components/video-ad.vue'
import VideoModel from '@/models/video-model.js'

const localVue = createLocalVue()
localVue.use(ListGroupPlugin)

describe('Video-ad-list.vue', () => {
  it('renders video list', () => {
    const video = new VideoModel({ name: 'testing', uuid: '123456789' })
    const videos = [video]
    const wrapper = mount(VideoAdList, { localVue, propsData: { videos } })
    expect(wrapper.classes()).toContain('videos-list')
  })

  it('renders n videos', () => {
    const video = new VideoModel({ name: 'testing', uuid: '123456789' })
    const video2 = new VideoModel({ name: 'testing2', uuid: '12345asd9' })
    const videos = [video, video2]
    const wrapper = mount(VideoAdList, { localVue, propsData: { videos } })
    expect(wrapper.findAllComponents(VideoAd).length).toBe(videos.length)
  })
})
