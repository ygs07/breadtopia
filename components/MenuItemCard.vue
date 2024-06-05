<script lang="ts" setup>
defineProps({
  item: Object
})
</script>

<template>
  <div class="max-w-sm rounded overflow-hidden text-left shadow-lg bg-white rounded-lg shadow-md border border-primary-
500 hover:border-primary-700 hover:border-2 transition-all duration-100 ease-in-out">
  <img class="w-full h-48 object-cover object-center rounded-lg shadow-md" src="/img/croissants.png" alt="Sunset in the mountains">
  <div class="px-4 py-4">
    <div class="font-bold text-xl mb-2 flex flex-col "><span>
     {{item?.name}}
    </span>
    <span>
      €{{item?.price}}
    </span>
  </div>
    <p class="text-gray-700 text-base">
     {{item?.short_description}}
    </p>
    <button href="#" class="rounded-full bg-primary-500 px-3.5 mt-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add To Cart</button>

  </div>
  </div>
</template>

<style scoped></style>
