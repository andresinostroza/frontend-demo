# Frontend-demo

Front end demo is a demo app that shows the engagements (emotions metric) by videos including a time line with the scenes by video

The code contains the following:

* *Dockerfile.yml* - Docker file that creates the image node:14.15.4-alpine 
* */src* - It contains the code
* */tests* - It contains some simple tests
* *.env.development* - It contains environment variables for dev mode
* *.env.production* - Same for production
* *package.json* - package json file for dependencies as usual
* *jest.config.js* - Jest configuration

## Getting Started

To get started, clone this repository locally:

```
$ git clone https://github.com/andresinostroza/frontend-demo
```

### Prerequisites

To run the project, you will to:

1. Install [Docker](https://docs.docker.com/install/).

## Container
### Build Container
Set the ENVIRONMENT for the corresponding environment (development, mirage, production).
Mirage environment is use to mock data

```
docker build -t frontend-demo . --build-arg ENVIRONMENT=mirage
```
### Run Container
```
docker run -it -p 9000:8080 --rm --name frontend-demo-1 frontend-demo
```

### Check the app
```
http://localhost:9000/
```

### Customize configuration
See in case you want to add more env variables [Configuration Reference](https://cli.vuejs.org/guide/mode-and-env.html).

Set the VUE_APP_API_URL for the corresponding API URL

