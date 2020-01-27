# Overview

This repo has two directories:
* `package`: A shared Vue.js library which exposes a `my-button` component
* `client`: A Vue.js app which consumes the `my-button` component

## Running Locally

### The Package
```
cd package
npm i
npm run build
```

### The Client
```
cd client
npm i
npm run serve
```

## The Issue

1. The client installs the Vue Composition API in [client/src/main.js](client/src/main.js), then installs the package in [client/src/main.app.js](client/src/main.app.js).
1. The package globally installs the [my-button component](package/src/my-button.vue) inside of the packages [install function](package/src/index.ts)
1. The client renders the my-button component in [App.vue](client/src/App.vue)
1. The browsers throws an error:

```
[Vue warn]: Error in data(): "Error: [vue-composition-api] must call Vue.use(plugin) before using any function."
```
