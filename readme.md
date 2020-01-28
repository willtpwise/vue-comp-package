# Overview

This repo has two directories:
* `package`: A shared Vue.js library which exposes a `my-button` component
* `client`: A Vue.js app which consumes the `my-button` component

## The Issue

1. The client installs the Vue Composition API, then the package in [client/src/main.js](client/src/main.js)
1. The package globally installs the [my-button component](package/src/my-button.vue) inside of the package's [install function](package/src/index.js)
1. The client renders the my-button component in [App.vue](client/src/App.vue)
1. The browsers throws an error:

```
[Vue warn]: Error in data(): "Error: [vue-composition-api] must call Vue.use(plugin) before using any function."
```

## Steps to Reproduce

### Build The Package
```
cd package
npm i
npm run build
```

### Run The Client
```
cd client
npm i
npm run serve
```
Now open http://localhost:8080

You should see a heading and a button. The button is a component exposed by the package. Both of these elements are rendering their content from a `ref` declared inside of a `setup` function of their respective components. The button's content however is not rendered due to the issue above. 
