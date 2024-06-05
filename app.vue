<script setup lang="ts">

interface BakeryMenuItem {
  id?: number; 
  name: string;
  price?: number;
  image_path?: string;
  short_description?: string;
  sub_categories?: Array<BakeryMenuItemSubCategory>;
  has_sub_categories?: boolean;
}
interface BakeryMenuItemSubCategory {
  name: string;
  id: number; 
  price: number;
  image_path: string;
  short_description: string;
}


const bakery_menu_items: BakeryMenuItem[] = [
{
    id: 1,
    name: "Bollería fresca del día",
    price: 2.50,
    image_path: "/images/pastries.jpg", // Replace with actual image path
    short_description: "Daily baked delights.",
  },
  {
    id: 2,
    name: "Tostadas con Tomate y aceite",
    price: 3.00,
    image_path: "/images/toast-tomato-olive-oil.jpg", // Replace with actual image path
    short_description: "Classic Spanish breakfast.",
  },
  {
    id: 3,
    name: "Tostadas con Aguacate y salmón",
    price: 6.50,
    image_path: "/images/toast-avocado-salmon.jpg", // Replace with actual image path
    short_description: "Creamy & savory.",
  },
  {
    id: 4,
    name: "Tostadas con Jamón Ibérico",
    price: 7.00,
    image_path: "/images/toast-iberico-ham.jpg", // Replace with actual image path
    short_description: "Spanish cured ham on toast.",
  },
  {
    id: 5,
    name: "Yogur con fruta y granola",
    price: 5.00,
    image_path: "/images/yogurt-fruit-granola.jpg", // Replace with actual image path
    short_description: "Healthy & refreshing.",
  },
  {
    name: "Panes Artesanales (Artisan Breads)",
    has_sub_categories: true,
    sub_categories: [
      {
        id: 6,
        name: "Barra blanca",
        price: 4.00,
        image_path: "/images/white-sourdough.jpg", // Replace with actual image path
        short_description: "Fluffy & light.",
      },
      {
        id: 7,
        name: "Barra integral",
        price: 4.50,
        image_path: "/images/whole-wheat-bread.jpg", // Replace with actual image path
        short_description: "Hearty & healthy.",
      },
      {
        id: 8,
        name: "Chapata",
        price: 3.50,
        image_path: "/images/ciabatta-bread.jpg", // Replace with actual image path
        short_description: "Crusty & airy.",
      },
      {
        id: 9,
        name: "Pan de centeno",
        price: 4.00,
        image_path: "/images/rye-bread.jpg", // Replace with actual image path
        short_description: "Dense & flavorful.",
      },
      {
        id: 10,
        name: "Focaccia",
        price: 5.00,
        image_path: "/images/focaccia-bread.jpg", // Replace with actual image path
        short_description: "Herbs & olive oil.",
      },
    ],
  },
  {
    name: "Sandwiches (Sandwiches)",
    has_sub_categories: true,
    sub_categories: [
      {
        id: 11,
        name: "Bocadillo clásico",
        price: 5.50,
        image_path: "/images/sandwich-ham-cheese.jpg", // Replace with actual image path
        short_description: "Timeless favorite.",
      },
      {
        id: 12,
        name: "Bocadillo vegetariano",
        price: 7.00,
        image_path: "/images/sandwich-roasted-veggies.jpg", // Replace with actual image path
        short_description: "Colorful & flavorful.",
      },
      {
        id: 13,
        name: "Bocadillo de pollo asado",
        price: 6.00,
        image_path: "/images/sandwich-roasted-chicken.jpg", // Replace with actual image path
        short_description: "Tender & creamy.",
      },
    ]
  }
]

</script>

<template>
  <nav class="flex flex-row justify-between p-10 bg-primary-500 sticky border-b-2 border-primary-500 rounded-b-lg"> 
<div class="space-x-5">
  <NuxtLink>Home</NuxtLink>
  <NuxtLink>Menu</NuxtLink>
  <NuxtLink>History</NuxtLink>
</div>

<div>
  <h1 class="text-2xl font-bold">

    BreadTopia
  </h1>
</div>
<div class="space-x-5">
  <NuxtLink>My Cart</NuxtLink>
  <NuxtLink>Contact</NuxtLink>
</div>

  </nav>
  <div class="">

    <div class="relative isolate px-6  lg:px-8 bg-background">
      <img src="/img/bread.png" class=" absolute" alt="Discover Nuxt 3" />
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class=" flex flex-col items-center justify-center text-center px-5">
          
          <p class="px-3 py-1 text-xl font-weight-bold leading-6 text-black w-1/2">
            El Pan Diario de Barcelona: Enfatiza la frescura diaria de su pan recién horneado.
          </p>
          <div class="border border-primary-500 border-2 rounded-lg  w-20 dropshadow-lg shadow-lg"></div>
        </div>
        <div class="text-center">
          <h1 class="text-5xl w-2/3 mx-auto  font-bold tracking-tight text-primary-700 sm:text-6xl">Welcome To The
 Utopía del pan.</h1>
        
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <button href="#" class="rounded-full bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy Bread</button>

          </div>
        </div>
      <img src="/img/bread-line.png" class="w-full" alt="bread line" />

      </div>
   
    </div>
    <!-- <NuxtWelcome /> -->


    <div class="flex flex-row justify-between p-10 bg-background">
      <div class="flex flex-col w-1/2 space-y-3"> <div class="boorder border-primary-500 border-2 rounded-lg  w-20 dropshadow-lg shadow-lg"></div>

        <p class="text-sm font-semibold ">
          Experimenta la tradición y el amor horneados en cada hogaza
        </p>

        <h2 class="text-primary-700 sm:text-6xl line-height-loose">
          Feel the warm embrace of our homemade bread.
        </h2>
        <p class="font-semibold ">
          Experience the tradition passed down through generations, baked with love in every loaf of our homemade bread. Enjoy the crusty exterior that gives way to a fluffy and flavorful interior. It's not just bread, it's a little piece of home.
        </p>
      </div>
      <div class="flex-col w-1/2">
        <img src="/img/cookies.png" class="w-full " alt="Discover Nuxt 3" />

       
      </div>
    </div>

    <div class="flex flex-col justify-center text-center p-10 bg-background space-y-10">
      <div class="flex flex-row space-x-3 justify-center">

        <div class="border border-primary-500 border-2 rounded-lg   dropshadow-lg shadow-lg"></div>
        <h2 class="text-5xl font-bold">Nuestro Menú</h2>
        <div class="border border-primary-500 border-2 rounded-lg   dropshadow-lg shadow-lg"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(n, index) in 4">
          <MenuItemCard :item="bakery_menu_items[index]" />
        </div>

</div>
      </div>

      <div class="bg-[url('/img/croissants.png')] bg-cover bg-center bg-no-repeat h-96 parallax"></div>

      <div class="flex flex-row justify-center p-10 bg-background">
      <div class="flex flex-col space-y-3 text-center">


        <h2 class="text-5xl font-bold text-primary-700">Más que pan</h2>

        <div class="w-1/2 mx-auto">

          <p class="text-lg font-semibold ">our homemade bread is a unique sensory experience. From the moment you inhale the aroma of yeast and freshly baked flour, to the comforting feeling of warmth in your hands and the homemade flavor that fills your palate, you'll feel right at home. Enjoy the simplicity and goodness of natural ingredients combined with the love and passion for baking</p>
        </div>

      </div>
      </div>


      <div class="p-24 bg-background">
        <div class="flex flex-row justify-center space-x-6 p-10 bg-primary-300  shadow-md shadow rounded-md">
          <div class="flex flex-col">
            <img src="/img/store.png" class="w-full" alt="bread line" />
             </div>
          <div class="flex flex-col justify-between align-items-center h-2/3 my-auto space-y-10">
          <h1 class="text-4xl"> Contact Us While it’s Still Hot!!!</h1>

          <div>
            <h3 class="text-2xl"> Our Address</h3>
            <p>766, bread avenue, Del toro plaza.</p>
          </div>
          <div>
            <h3 class="text-2xl"> +34 933 55 00 01</h3>
            <p>bread@republic.com</p>
          </div>
             </div>
        </div>
        </div>

        <footer class="bg-primary-500  rounded-t-3xl">

          <div class="flex flex-row justify-center p-10 ">
      <div class="flex flex-col space-y-3 text-center">


        <h2 class="text-5xl font-bold ">Breadtopia</h2>

        <div class="w-1/2 mx-auto ">

          <p class="text-lg font-semibold ">Horneando sonrisas desde el corazón de Barcelona, un pan artesanal a la vez</p>
        </div>

      </div>
      </div>

      <div class="bg-primary-200  rounded-t-3xl flex flex-row justify-between p-10">
<p>2024 Breadtopia | All Rights Reserved</p>

<div class="space-x-3">
<NuxtLink>Home</NuxtLink>
  <NuxtLink>Menu</NuxtLink>
  <NuxtLink>History</NuxtLink>
</div>
      </div>

        </footer>
  </div>
</template>

<style scoped>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat:
 no-repeat;
  background-size: cover;
  transform: translate3d(0, 0, 0);
}
.parallax-window {
  overflow: hidden;
}
</style>