<template>
  <div class="w-full h-screen">
    <div class="absolute z-0 w-full max-h-screen overflow-hidden">
      <div
        class="w-full h-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-0 covers-background"
      >
        <div
          v-for="episode in episodes"
          :key="episode.uuidv4"
          class="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 bg-cover"
          :style="`background-image:url(/img/${episode.links.coverImage});`"
        ></div>
      </div>
    </div>
    <div
      class="absolute z-10 w-full h-full bg-gradient-to-r from-green-600 to-teal-600 opacity-90"
    ></div>
    <div class="absolute z-20 w-full h-full">
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
    ...mapState(['loading', 'episodes']),
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
