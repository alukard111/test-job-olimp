<template>
  <div>
    <div class="
      main-conteiner
      
      container-fluid
      d-flex
      flex-column
      justify-content-between
      align-items-center

      p-0
      "
      style="height: 100vh;"
    >
    <header class="
      container-fluid
      container-lg
      m-0
      "
    >
      <div class="
        d-flex
        justify-content-center
        "
      >
        <BaseTabletMenu 
          :idBaseTabletMenu="idBaseTabletMenu"
          :arrowCollapseHref="hrefArrowCollapse"
        />
      </div>
      <BaseHeaderMenu 
        :arrowCollapseHref="hrefArrowCollapse"
        style="background: #1596C1;"
      />
    </header>
    <div class="
      main-conteiner__basket-content 
      basket-content 
      container-fluid 
      container-lg 
      m-0 
      p-0
      "
    >
      <div class="basket-content__wrapper">
        <div class="basket-content__title  text-center">
          <h1>
            Корзина
          </h1>
        </div>
        <div class="
          basket-content__description-items  
          d-flex 
          justify-content-center
          "
        >
          <div class="
            col-md-4 
            col-5 
            col-xl-3
            "
          >
            <h4>Название товара</h4>
          </div>
          <div class="
            col-md-4 
            col-5 
            col-xl-7 
            px-xl-5 
            d-flex 
            justify-content-center 
            justify-content-xl-around
            "
          >
            <h4 class="basket-content__description-item-1 ">Цена за шт.</h4>
            <h4 class="basket-content__description-item-2 ">Количество</h4>
            <h4 class="basket-content__description-item-3">Общая цена</h4>
          </div>
        </div>
        <div class="
          basket-content__basket-items 
          m-xl-5 
          my-3
          " 
        >
          <div class="col" >
            <BasketBookComponent 
              v-for="item in getBasketBooks"
              :key="item.id"
              :imgSrcBook="item.path"
              :bookPrice="item.price"
              :totalBookPrice="`${item.price * item.quantity}`"
              :titleBook="item.title"
              :quantityBooks="`${item.quantity}`"
              @upQuantity="upQuantityBookInBasket(item)"
              @downQuantity="downQuantityBookInBasket(item)"
              @deleteBook="deleteBooksFromBasket(item.id)"
              />
          </div>
        </div>
        <div class="
          basket-content__price 
          d-flex 
          justify-content-center
          my-5
          "
        >
          <div class="
            col-11  
            col-md-9 
            col-xl-10
            d-flex 
            flex-sm-row 
            flex-column  
            justify-content-center 
            justify-content-sm-around
            justify-content-xl-between
            "
          >
            <h2 class="mr-sm-5">ИТОГО К ОПЛАТЕ</h2>
            <h2 class="mr-sm-5" > {{  getTotalPrice  }}р. </h2>
          </div>
        </div>
        <div class="basket-content__buy-btn">
          <div>
            <BaseBtnTwo 
              :disabledBtnTwo="isDisabledBtn"
              :classes="checkout"
              :btnName="`Оформить заказ`"
              @click="clearBasket()"
            />
          </div>
        </div>
      </div>
    </div>
    <footer class="
      container-fluid
      container-lg  
      m-0 
      p-0 
      "
    >
      <BaseFooterMenu />
    </footer>
    </div>
  </div>
</template>

<script>
import BaseHeaderMenu from "../components/baseComponents/BaseHeaderMenu.vue"
import BaseFooterMenu from "../components/baseComponents/BaseFooterMenu.vue"
import BaseTabletMenu from "../components/baseComponents/BaseTabletMenu.vue"
import BasketBookComponent from "../components/BasketBookComponent.vue"
import BaseBtnTwo from "../components/baseComponents/BaseBtnTwo.vue"
import BaseBtnTwo1 from "../components/baseComponents/BaseBtnTwo.vue"

export default {
  components: {
    BaseHeaderMenu,
    BaseFooterMenu,
    BaseTabletMenu,
    BasketBookComponent,
    BaseBtnTwo,
  },
  data: () => ({
    hrefArrowCollapse: '#baseTableMenu',
    idBaseTabletMenu: 'baseTableMenu',

    bookPrice: null,
    totalBookPrice: null,
    totalPrice: null,

    checkout: 'btn-primaty__checkout'
  }),
  computed: {
    isDisabledBtn() {
      if (this.$store.getters.getAllBooksInBasket !== null) {
        return Boolean(this.$store.getters.getAllBooksInBasket.length) ? false : true
      }
    },
    getBasketBooks() {
      return this.$store.getters.getAllBooksInBasket
    },
    getTotalPrice() {
      if (this.$store.getters.getAllBooksInBasket !== null) {
        let sum = [...this.$store.getters.getAllBooksInBasket].reduce((prev, current) => {
          return prev + current.price * current.quantity
        }, 0)
        return sum
      } 
      return 0
    }
  },

  mounted() {
    this.$store.dispatch('getBooksFromBasket')
  },

  methods: {
    upQuantityBookInBasket(item) {
      this.$store.dispatch('upQuantityBooks', item)
    },
    downQuantityBookInBasket(item) {
      this.$store.dispatch('downQuantityBooks', item)
    },
    deleteBooksFromBasket(bookId) {
      this.$store.dispatch('deleteBookFromBasket', bookId)
    },
    
    clearBasket() {
      return this.$store.dispatch('checkoutBasket')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/mixins/_breakpoints.scss";
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";

$maxWidth: 1280;
@mixin adaptiv-font($pcSize, $mobSize) {
 $addSize: $pcSize - $mobSize;
 $maxWidth: $maxWidth - 320;
 font-size: calc(#{$mobSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth}));
}

.basket-content__title {
  font-family: 'Forum-Regular', arial;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  line-height: 96px; 
}
.basket-content__price {
  font-family: 'Forum-Regular', arial;
  letter-spacing: 0.07em;
  line-height: 63px;
}
.basket-content__description-items {
  font-family: 'Raleway';
  display: none !important;
}
.basket-content__basket-items {
  overflow-y:scroll;
  max-height: 720px;
}
.main-conteiner__basket-content {
  margin: 40px 0 40px 0 !important; 
}


@include media-breakpoint-up(sm) {
  .basket-content__description-items {
    display: flex !important;
  }
  .basket-content__description-item-1 {
    display: none;
  }
  .basket-content__description-item-2 {
    display: none;
  }
}


@include media-breakpoint-up(md) {
  h1 {
    @include adaptiv-font(48, 38);
  }
  .main-conteiner__basket-content {
    margin: 90px 0 90px 0 !important; 
  }
}


@include media-breakpoint-up(xl) {
  h1 {
    @include adaptiv-font(64, 48);
  }
  .basket-content__price  {
    @include adaptiv-font(42, 24);
  }
  .main-conteiner__basket-content {
    margin: 140px 0 140px 0 !important; 
  }
  .basket-content__description-item-1 {
    display: inline-block;
  }
  .basket-content__description-item-2 {
    display: inline-block;
  }
}
</style>