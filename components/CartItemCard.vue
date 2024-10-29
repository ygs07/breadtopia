<script lang="ts" setup>
defineProps({
  cart_item: Object
})

defineEmits(['increaseCartItemQuantity', 'decreaseCartItemQuantity'])
</script>

<template>
   <div class="max-w-sm w-full lg:max-w-full lg:flex" >
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/store.png')" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-8 border-l border-primary-400 lg:border-l-0 lg:border-t lg:border-primary-700 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-700 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

       20 mins
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">{{ cart_item?.name }}</div>
      <p class="text-gray-700 text-base">{{ cart_item?.full_description }}</p>
    </div>
    <div class="flex items-center justify-between flex-row">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
        <p class="text-gray-600">Aug 18</p>
      </div>

      <div>
<button :disabled="cart_item?.item_quantity_to_buy == 1" @click="$emit('decreaseCartItemQuantity', cart_item)" class="ring ring-2 ring-primary-500 rounded-full p-2"> - </button>
      <input type="number" class="border-b ml-3" :value="cart_item?.item_quantity_to_buy" readonly/>
      <button @click="$emit('increaseCartItemQuantity', cart_item)" class="ring ring-2 ring-primary-500 rounded-full p-2"> + </button>
      </div>

      <h2 class="text-3xl font-bold">€{{ cart_item?.price * cart_item?.item_quantity_to_buy }}</h2>
    </div>
  </div>
</div>
</template>

<style scoped></style>
