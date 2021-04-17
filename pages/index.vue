<template>
  <div class="w-screen h-screen">
    <div class="absolute z-0 w-screen max-h-screen overflow-hidden">
      <div
        v-if="episode"
        class="w-screen h-screen bg-fixed bg-left-top bg-no-repeat bg-cover filter-blur"
        :style="`background-image:url(${require('~/assets/img/covers/' +
          episode.cover +
          '?format=jpg&resize&size=400')});`"
      ></div>
    </div>
    <div
      class="absolute z-10 w-screen h-screen bg-gradient-to-r from-green-600 to-teal-600 opacity-90"
    ></div>
    <div class="absolute z-20 w-screen h-screen">
      <transition name="fade" mode="out-in">
        <Loader v-if="loading" />
      </transition>
      <div class="w-full h-full flex flex-col items-center justify-center">
        <Episode class="w-full mb-8" />
        <button
          class="shuffle-button group transition transform duration-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 p-4 focus:outline-none rounded-full border-white border-4 bg-white bg-opacity-75"
          @click="shuffle"
        >
          <Dice class="shuffle-button__icon h-12 w-12" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['loading', 'episodes', 'episode']),
  },
  mounted() {
    this.shuffle()
  },
  methods: {
    shuffle() {
      this.$store.dispatch('randomize')
    },
  },
}
</script>
