import { createLocalVue, mount } from '@vue/test-utils'
import { LayoutPlugin, ListGroupPlugin, OverlayPlugin, SkeletonPlugin } from 'bootstrap-vue'

import VideoEngagementChart from '@/components/video-engagement-chart.vue'
import VideoDetailService from '@/services/video-detail-service'
import rawData from './raw-video-detail-data.json'

const localVue = createLocalVue()
localVue.use(LayoutPlugin)
localVue.use(OverlayPlugin)
localVue.use(ListGroupPlugin)
localVue.use(SkeletonPlugin)

describe('video-engagement-chart.vue', () => {
  it('it renders', () => {
    const video = new VideoDetailService(rawData)
    const wrapper = mount(VideoEngagementChart, { localVue, propsData: { video } })
    expect(wrapper.find('.highcharts-container'))
  })
  it('it has 15 scenes', () => {
    const video = new VideoDetailService(rawData)
    const wrapper = mount(VideoEngagementChart, { localVue, propsData: { video } })
    expect(wrapper.vm.sceneMarkers).toHaveLength(15)
  })
  it('it renders the 16 engagements', () => {
    const video = new VideoDetailService(rawData)
    const wrapper = mount(VideoEngagementChart, { localVue, propsData: { video } })
    expect(wrapper.vm.engagementData).toHaveLength(17)
  })
})
