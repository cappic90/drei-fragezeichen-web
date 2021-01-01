<template>
  <div>
    <div class="bg-white text-black radius pl-2 pr-4 -mr-2 py-1 rounded-lg">
      <span class="font-bold">{{ runtime }}</span> Min.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    runtime: {
      type: Number,
      required: true,
    },
  },
}
</script>
