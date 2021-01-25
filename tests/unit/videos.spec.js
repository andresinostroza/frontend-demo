import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
// import { ListGroupPlugin } from 'bootstrap-vue'

import VideoAd from '@/components/video-ad.vue'
import VideoModel from '@/models/video-model.js'

const localVue = createLocalVue()
// localVue.use(ListGroupPlugin)

describe('video-ad.vue', () => {
  it('renders video name', () => {
    const video = new VideoModel({ name: 'testing', uuid: '123456789' })
    const wrapper = shallowMount(VideoAd, { localVue, propsData: { video } })
    expect(wrapper.text()).toMatch(video.name)
  })

  it('the video is active', () => {
    const video = new VideoModel({ name: 'testing', uuid: '123456789' })
    const isActive = true
    const wrapper = mount(VideoAd, { localVue, propsData: { video, isActive } })
    expect(wrapper.classes()).toContain('active')
  })
})
