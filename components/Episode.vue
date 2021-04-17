<template>
  <div v-if="episode" class="p-4">
    <div
      class="overflow-hidden relative md:w-1/3 flex flex-col justify-center items-center max-w-sm mx-auto shadow-2xl"
    >
      <picture>
        <source
          type="image/avif"
          :srcSet="
            require(`~/assets/img/covers/${episode.cover}?format=avif&resize&size=400`)
          "
        />
        <source
          type="image/webp"
          :srcSet="
            require(`~/assets/img/covers/${episode.cover}?format=webp&resize&size=400`)
          "
        />
        <img
          width="400"
          height="400"
          class="w-full rounded-lg shadow-md bg-cover bg-center"
          alt="Cover image of the episode"
          :src="require(`~/assets/img/covers/${episode.cover}?resize&size=400`)"
        />
      </picture>
      <!-- <Runtime class="absolute right-0" :runtime="episode.runtime" /> -->

      <div
        class="w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5 w-full"
      >
        <div class="flex justify-center space-x-4">
          <a
            v-if="episode.links.spotify"
            class="h-12 w-12"
            rel="noopener noreferrer"
            :href="episode.links.spotify"
          >
            <picture>
              <source
                type="image/avif"
                :srcSet="
                  require('~/assets/img/providers/icon-spotify.png?format=avif&resize&size=128')
                "
              />
              <source
                type="image/webp"
                :srcSet="
                  require('~/assets/img/providers/icon-spotify.png?format=webp&resize&size=128')
                "
              />
              <img
                width="128"
                height="128"
                class="h-full w-full"
                alt="Icon of Apple Music"
                :src="
                  require('~/assets/img/providers/icon-spotify.png?resize&size=128')
                "
              />
            </picture>
          </a>
          <a
            v-if="episode.links.appleMusic"
            class="h-12 w-12"
            rel="noopener noreferrer"
            :href="episode.links.appleMusic"
          >
            <picture>
              <source
                type="image/avif"
                :srcSet="
                  require('~/assets/img/providers/icon-apple-music.png?format=avif&resize&size=128')
                "
              />
              <source
                type="image/webp"
                :srcSet="
                  require('~/assets/img/providers/icon-apple-music.png?format=webp&resize&size=128')
                "
              />
              <img
                width="128"
                height="128"
                class="h-full w-full"
                alt="Icon of Apple Music"
                :src="
                  require('~/assets/img/providers/icon-apple-music.png?resize&size=128')
                "
              />
            </picture>
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
