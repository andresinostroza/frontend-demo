import { Server, Serializer, Factory, Model } from 'miragejs'

const SCENES_QUANTITY = 15
const VIDEO_DURATION_IN_SECONDS = 20
const MAX_METRIC_VALUE = 1
const MIN_METRIC_VALUE = -1

const randomFloatNumber = (maxValue, minValue) => Math.random() * (maxValue - minValue) + minValue

export default (environment = 'test') => {
  return new Server({
    serializers: {
      application: Serializer.extend({
        root: false,
        embed: true
      })
    },
    environment,
    models: {
      video: Model
    },
    factories: {
      video: Factory.extend({
        name (i) {
          return `Video ${i}`
        },

        id (i) {
          return i
        },
        engagement () {
          return Array.from({ length: VIDEO_DURATION_IN_SECONDS }, () => randomFloatNumber(MAX_METRIC_VALUE, MIN_METRIC_VALUE))
        },
        scenes () {
          const escenes = {}
          let maxValue = 0.5
          let minValue = 0
          for (let index = 1; index <= SCENES_QUANTITY; index++) {
            escenes[`scene_${index}`] = randomFloatNumber(maxValue, minValue)
            minValue = maxValue
            maxValue += 1
          }
          return escenes
        }
      })
    },
    seeds (server) {
      server.createList('video', 20)
    },
    routes () {
      this.urlPrefix = process.env.VUE_APP_API_URL
      this.get('/videos')
      this.get('/videos/:id')
    }
  })
}
