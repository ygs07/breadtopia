<script setup lang="ts">
// import paystack from "vue3-paystack";
import { StripeCheckout } from '@vue-stripe/vue-stripe';

const payment_reference: ComputedRef<string> = computed(() => {
  let payment_reference = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 15; i++ )
        characters += characters.charAt(Math.floor(Math.random() * characters.length));

        return payment_reference;
})
const payment_details = ref({
  public_key: "pk_test_SuGpZR8lX27M4Heg1QETHtKz00qMyoWQL8",
  // public_key: "pk_test_a3c52ce327f5f3e830c62d7d2209ca361833dbb9",
  payment_reference: payment_reference.value,
})

const lineItems= ref({
        amount: 2000,
        currency: 'usd'
})

interface Cart{
is_empty: boolean;
items: Array <BakeryMenuItem>;
number_of_items_in_cart : number;  
}

interface Customer {
  name: string;
  email: string;
  phone_number: string;
  address: string;
}

interface BakeryMenuItem {
  id?: number; 
  name: string;
  price?: number;
  image_path?: string;
  short_description?: string;
  full_description?: string;
  item_quantity_to_buy?: number;
  sub_categories?: Array<BakeryMenuItemSubCategory>;
  has_sub_categories?: boolean;
}
interface BakeryMenuItemSubCategory {
  name: string;
  id: number; 
  item_quantity_to_buy?: number;
  price: number;
  image_path: string;
  short_description: string;
  full_description: string;
}

const cart: Cart = reactive({
  is_empty: true,
  items: [],
  number_of_items_in_cart: 0,
})

const customer_details: Customer = reactive({
  name: '',
  email: '',
  phone_number: '',
  address: '',
})


const order_type = ref('')
const numberOfItemsInCart: any = computed(() => {
return cart.items.length
})

const increaseCartItemQuantity: any = (item_to_add: BakeryMenuItem) => {
  item_to_add.item_quantity_to_buy++
}

const decreaseCartItemQuantity: any = (item_to_add: BakeryMenuItem) => {
  item_to_add.item_quantity_to_buy--
}


const cart_state = useState('cart_state', () => cart)

const bakery_menu_items: BakeryMenuItem[] = [
{
    id: 1,
    name: "Bollería fresca del día",
    price: 2.50,
    image_path: "/images/pastries.jpg", // Replace with actual image path
    short_description: "Daily baked delights.",
    full_description: "Our selection of freshly baked pastries, perfect for a light breakfast or afternoon snack. Choose from croissants, muffins, pain au chocolat, and more!",
  },
  {
    id: 2,
    name: "Tostadas con Tomate y aceite",
    price: 3.00,
    image_path: "/images/toast-tomato-olive-oil.jpg", // Replace with actual image path
    short_description: "Classic Spanish breakfast.",
    full_description: "Simple yet satisfying, toasted bread topped with fresh tomato and a drizzle of olive oil. A timeless Spanish breakfast option.",
  },
  {
    id: 3,
    name: "Tostadas con Aguacate y salmón",
    price: 6.50,
    image_path: "/images/toast-avocado-salmon.jpg", // Replace with actual image path
    short_description: "Creamy & savory.",
    full_description: "A luxurious twist on toast! Creamy avocado spread and slices of smoked salmon on toasted bread. A delicious and healthy option.",
  },
  {
    id: 4,
    name: "Tostadas con Jamón Ibérico",
    price: 7.00,
    image_path: "/images/toast-iberico-ham.jpg", // Replace with actual image path
    short_description: "Spanish cured ham on toast.",
    full_description: "Indulge in the rich flavor of cured Spanish ham (Jamón Ibérico) served on toasted bread. A gourmet treat for any time of day.",
  },
  {
    id: 5,
    name: "Yogur con fruta y granola",
    price: 5.00,
    image_path: "/images/yogurt-fruit-granola.jpg", // Replace with actual image path
    short_description: "Healthy & refreshing.",
    full_description: "A healthy and refreshing combination of yogurt, fresh fruit, and crunchy granola. A perfect breakfast or light snack.",
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
        full_description: "Made with a long fermentation process, this white sourdough bread boasts a fluffy texture and a slightly tangy flavor. Perfect for sandwiches, toasting, or simply enjoying on its own.",
      },
      {
        id: 7,
        name: "Barra integral",
        price: 4.50,
        image_path: "/images/whole-wheat-bread.jpg", // Replace with actual image path
        short_description: "Hearty & healthy.",
        full_description: "Packed with whole grains and fiber, our whole-wheat bread is a healthy and satisfying choice. Enjoy it toasted with your favorite toppings or in a hearty sandwich.",
      },
      {
        id: 8,
        name: "Chapata",
        price: 3.50,
        image_path: "/images/ciabatta-bread.jpg", // Replace with actual image path
        short_description: "Crusty & airy.",
        full_description: "This Italian classic features a crispy crust and a light, airy interior. Ideal for dipping in olive oil, using in paninis, or enjoying as part of a charcuterie board.",
      },
      {
        id: 9,
        name: "Pan de centeno",
        price: 4.00,
        image_path: "/images/rye-bread.jpg", // Replace with actual image path
        short_description: "Dense & flavorful.",
        full_description: "With a distinct rye flavor and a denser texture, rye bread is a great option for those who enjoy a more substantial bread. Perfect for hearty sandwiches or toasted with cheese.",
      },
      {
        id: 10,
        name: "Focaccia",
        price: 5.00,
        image_path: "/images/focaccia-bread.jpg", // Replace with actual image path
        short_description: "Herbs & olive oil.",
        full_description: "This flavorful bread features a golden crust and a soft, chewy interior. Topped with herbs and olive oil, it's perfect for enjoying on its own or as an accompaniment to a meal.",
      },
    ],
  },
  {
    name: "Sandwiches (Sandwiches)",
    has_sub_categories: true,
    sub_categories: [
    {
        id: 11,
        name: "Tarta de chocolate",
        price: 4.50,
        image_path: "/images/chocolate-cake.jpg", // Replace with actual image path
        short_description: "Decadent & delicious.",
        full_description: "A rich and decadent chocolate cake, perfect for satisfying your sweet tooth. Layers of moist chocolate cake are frosted with a creamy chocolate ganache.",
      },
      {
        id: 12,
        name: "Flan de vainilla",
        price: 3.00,
        image_path: "/images/vanilla-flan.jpg", // Replace with actual image path
        short_description: "Silky smooth & creamy.",
        full_description: "A classic Spanish dessert, our flan is made with fresh eggs, milk, and vanilla. Enjoy its silky smooth texture and creamy vanilla flavor.",
      },
      // {
      //   id: 13,
      //   name: "Bocadillo de pollo asado",
      //   price: 6.00,
      //   image_path: "/images/sandwich-roasted-chicken.jpg", // Replace with actual image path
      //   short_description: "Tender & creamy.",
      // },
    ]
  }
]


const addItemToCart: any = (item_to_add: BakeryMenuItem) => {
  cart.number_of_items_in_cart++
  item_to_add.item_quantity_to_buy? item_to_add.item_quantity_to_buy++ : item_to_add.item_quantity_to_buy = 1
  cart.items.push(item_to_add)
  cart.is_empty = false
}


const total_amount = cart.items.reduce((total, item) => total + (item.price * item.item_quantity_to_buy), 0).toFixed(2)


</script>

<template>
  <nav class=" md:flex flex-row text-center justify-center md:justify-between p-10 bg-background md:bg-primary-500 sticky md:border-b-2 border-primary-500 rounded-b-lg"> 
<div class="space-x-5 hidden">
  <NuxtLink>Home</NuxtLink>
  <NuxtLink>Menu</NuxtLink>
  <NuxtLink>History</NuxtLink>
</div>

<div>
  <h1 class="text-4xl md:text-2xl font-bold">

    BreadTopia
  </h1>
</div>
<div class="space-x-5 hidden">
  <NuxtLink>My Cart</NuxtLink>
  <NuxtLink>Contact</NuxtLink>
</div>

  </nav>

  <nav
      style="position: fixed; bottom: 0"
      class="md:hidden sticky bottom-0 left-0 right-0 mb-5 w-full z-50 flex p-4 justify-center bg-primary-500 rounded-full shadow-lg"
    >
      <div
        class="
          text-sm
          drop-shadow-2xl
          py-4
          flex
          justify-evenly
          rounded-2xl
          space-x-2
          w-full
          text-center
          bg-cultured
          dark:bg-oxford_blue dark:text-cultured
        "
      >
        <div class="text-center">
          <nuxt-link to="/" class="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

            <span> Home </span>
          </nuxt-link>
        </div>

        <div class="text-center">
          <nuxt-link to="/about" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <span> About </span>
          </nuxt-link>
        </div>
<div class="text-center">
                  <button to="/projects" class="relative ">
                    <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full">{{cart.number_of_items_in_cart}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>


                    <span class="relative"> Cart </span>
                    
            </button>
        </div>


        <div class="text-center">
          <a
            href="https://ys-portfolio-site.s3.eu-west-1.amazonaws.com/Resume.pdf"
            target="_blank"
            class=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <span> Resume </span>
          </a>
        </div>

        <div class="text-center">
          <a href="mailto:yusufgshehu@gmail.com" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>

            <span> Mail Me </span>
          </a>
        </div>
      </div>
    </nav>
  <div class="">

    <div class="relative isolate px-6  lg:px-8 bg-background">
      <img src="/img/bread.png" class="hidden md:flex absolute" alt="Discover Nuxt 3" />
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



    <div class="flex flex-row flex-wrap-reverse justify-between p-10 bg-background">
      <div class="flex flex-col w-full md:w-1/2 space-y-3"> <div class="boorder border-primary-500 border-2 rounded-lg  w-20 dropshadow-lg shadow-lg"></div>

        <p class="text-sm font-semibold ">
          Experimenta la tradición y el amor horneados en cada hogaza
        </p>

        <h2 class="text-primary-700 text-6xl line-height-loose">
          Feel the warm embrace of our homemade bread.
        </h2>
        <p class="font-semibold ">
          Experience the tradition passed down through generations, baked with love in every loaf of our homemade bread. Enjoy the crusty exterior that gives way to a fluffy and flavorful interior. It's not just bread, it's a little piece of home.
        </p>
      </div>
      <div class="flex-col w-full text-center justify-center mx-auto md:w-1/2">
        <img src="/img/cookies.png" class="w-1/3 md:w-full text-center mx-auto justify-center" alt="Discover Nuxt 3" />

       
      </div>
    </div>

    <div class="flex flex-col justify-center text-center p-10 bg-background space-y-10">
      <div class="flex flex-row space-x-3 justify-center">

        <div class="border border-primary-500 border-2 rounded-lg   dropshadow-lg shadow-lg"></div>
        <h2 class="text-5xl font-bold">Nuestro Menú</h2>
        <div class="border border-primary-500 border-2 rounded-lg   dropshadow-lg shadow-lg"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(n, index) in 4" >
          <MenuItemCard :item="bakery_menu_items[index]"
          @add-item-to-cart="addItemToCart"
          />
        </div>

</div>
      </div>

      <div class="bg-[url('/img/croissants.png')] bg-cover bg-center bg-no-repeat h-96 parallax"></div>

      <div class="flex flex-row justify-center p-10 bg-background">
      <div class="flex flex-col space-y-3 text-center">


        <h2 class="text-5xl font-bold text-primary-700">Más que pan</h2>

        <div class="md:w-1/2 md:mx-auto">

          <p class="text-lg font-semibold ">our homemade bread is a unique sensory experience. From the moment you inhale the aroma of yeast and freshly baked flour, to the comforting feeling of warmth in your hands and the homemade flavor that fills your palate, you'll feel right at home. Enjoy the simplicity and goodness of natural ingredients combined with the love and passion for baking</p>
        </div>

      </div>
      </div>

      <div class="p-24 bg-background py-10">
        <h2 class="text-5xl font-bold text-primary-900">My Cart</h2>

      
        <div class="flex flex-row justify-between space-x-5 mt-5">

          <div v-show="cart.is_empty" class="flex flex-col">
<div>
<h2 class="text-2xl font-bold">Your Cart is empty </h2>  
</div>


        </div>
          <div class="w-2/3" v-show="!cart.is_empty">
            <CartItemCard 
            @increaseCartItemQuantity="increaseCartItemQuantity(cart_item)"
            @decreaseCartItemQuantity="decreaseCartItemQuantity(cart_item)"
             v-for="(cart_item, index) in cart.items" :key="index" :cart_item="cart_item"></CartItemCard>
            </div>


  <div class=" w-1/3 flex px-10 mx-auto text-center flex-col rounded overflow-hidden text-left shadow-lg bg-white rounded-lg shadow-md border border-primary-
500 hover:border-primary-700 hover:border-2 transition-all duration-100 ease-in-out">
<div class="grid grid-cols-2 gap-y-5 pt-5 ">

  <label>
    <input type="radio" name="order_type" v-model="order_type" value="delivery" class="" > 
    <span class="inline-block  font-medium text-gray-700">Delivery</span>
  </label>
  <label>
    <input type="radio" name="order_type" v-model="order_type" value="pick-up" class="" > 
    <span class="inline-block  font-medium text-gray-700">Pick-up</span>
  </label>
  <label>
    <input type="radio" name="order_type" v-model="order_type" value="dine-in" class="" > 
    <span class="inline-block font-medium text-gray-700">Dine-in</span>
  </label>
  <label>
    <input type="radio" name="order_type" v-model="order_type" value="takeout" class="" > 
    <span class="inline-block  font-medium text-gray-700">Takeout</span>
  </label>
  
  </div>
  <hr />
  <div class="px-4 ">
    <div class="font-bold text-xl mb-2 flex flex-row justify-between "><span>
     Total
    </span>
    <span>
      €{{ total_amount }}
    </span>
  </div>

    <p class="text-gray-700 text-base">
     lorem ipsum
    </p>
  <hr />

  <div>

    <form>
      <label>
    <input type="text" name="customer_name" v-model="customer_details.name"  class="" > 
    <span class="inline-block  font-medium text-gray-700">Takeout</span>
  </label>
    </form>

  </div>

  <stripe-checkout
  ref="checkoutRef"
      mode="payment"
:lineItems="lineItems"
                buttonText="Buy"
                :publicKey="payment_details.public_key"
                :email="'ds@ew.com'"
                :amount="total_amount"
                
                :reference="payment_details.payment_reference"
              ></stripe-checkout>
              <button class="'rounded-full bg-primary-500 px-3.5 mt-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'">Pay now!</button>

  <!-- <paystack
                buttonClass="'rounded-full bg-primary-500 px-3.5 mt-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'"
                buttonText="Buy"
                :publicKey="payment_details.public_key"
                :email="'ds@ew.com'"
                :amount="total_amount"
                :reference="payment_details.payment_reference"
                :currency="'usd'"
              ></paystack> -->
   

  </div>
  </div>


            </div>
        </div>

      <div class="md:p-24 bg-background py-10">
        <div class="flex flex-row flex-wrap md:flex-no-wrap justify-center space-x-6 p-10 bg-primary-300 md:space-y-0 space-y-9 shadow-md shadow rounded-md">
          <div class="flex flex-col  w-full md:w-1/2">
            <img src="/img/store.png" class="w-full" alt="bread line" />
             </div>
          <div class="flex flex-col justify-between align-items-center h-2/3 my-auto md:space-y-10">
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