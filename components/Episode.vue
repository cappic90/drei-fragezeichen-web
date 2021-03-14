<template>
  <div v-if="episode" class="p-4">
    <div
      class="overflow-hidden relative md:w-1/3 flex flex-col justify-center items-center max-w-sm mx-auto shadow-2xl"
    >
      <img
        class="w-full rounded-lg shadow-md bg-cover bg-center"
        :src="`/img/${episode.cover}`"
      />
      <!-- <Runtime class="absolute right-0" :runtime="episode.runtime" /> -->

      <div
        class="w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5 w-full"
      >
        <div class="flex justify-center space-x-4">
          <a
            v-if="episode.links.spotify"
            :href="episode.links.spotify"
            class="h-12 w-12"
          >
            <img
              src="/img/icon-spotify.png"
              rel="noopener noreferrer"
              alt="Icon of Spotify"
            />
          </a>
          <a
            v-if="episode.links.appleMusic"
            :href="episode.links.appleMusic"
            class="h-12 w-12"
          >
            <img
              src="/img/icon-apple-music.svg"
              rel="noopener noreferrer"
              alt="Icon of Apple Music"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['episode']),
  },
}
</script>
