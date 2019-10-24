<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import Slider from '../src/components/Slider.vue'

export default createComponent({
  components: { Slider },

  setup() {
    const elements = ref([
      {
        name: 'A',
        image: 'https://wiresoft.com/media/image/86/26/0a/burgerking.png',
      },
      {
        name: 'B',
        image: 'https://placehold.it/300x150',
      },
      {
        name: 'C',
        image: 'https://placehold.it/300x150',
      },
      {
        name: 'D',
        image: 'https://placehold.it/300x150',
      },
      {
        name: 'E',
        image: 'https://placehold.it/300x150',
      },
      {
        name: 'F',
        image: 'https://placehold.it/300x150',
      },
      {
        name: 'G',
        image: 'https://placehold.it/300x150',
      },
      {
        name: 'H',
        image: 'https://placehold.it/300x150',
      },
      {
        name: 'I',
        image: 'https://placehold.it/300x150',
      },
      {
        name: 'J',
        image: 'https://placehold.it/300x150',
      },
    ])

    return { elements }
  }
})
</script>

<template>
<div class="AppContainer">
  <div class="App">
    <Slider :elements="elements"/>
  </div>
</div>
</template>

<style lang="sass" scoped>
.AppContainer
  @apply bg-orange-400

.App
  @apply max-w-6xl mx-auto
</style>