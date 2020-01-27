<template>
  <div id="app">
    <h1>{{ titleFromSetup }}</h1>
    <my-button />
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

export default createComponent({
  name: 'app',

  setup() {

    const titleFromSetup = ref('this works')

    return { titleFromSetup }

  },
})
</script>
