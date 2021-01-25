# challenge-frontend

## Local development
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run your unit tests
```
npm run test:unit
```

## Container for Production
### Build Container
```
docker build -t frontend-challenge .
```
### Run Container
```
docker run -it -p 9000:8080 --rm --name frontend-challenge-1 frontend-challenge
```

### Customize configuration
See in case you want to add more env variables [Configuration Reference](https://cli.vuejs.org/guide/mode-and-env.html).

Set the VUE_APP_API_URL for the corresponding API URL

