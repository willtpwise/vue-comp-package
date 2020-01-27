<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

export default createComponent({
  name: 'my-button',

  setup() {

    const labelFromSetup = ref('this does not work')

    return { labelFromSetup }

  },
})
</script>

<template>
  <button>{{ labelFromSetup }}</button>
</template>
