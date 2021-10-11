<template>
  <div class="
    basket-component 

    col-12 
    my-3
    "
  >
    <div class="
      basket-component__wrapper 

      d-flex 
      flex-column 
      flex-sm-row 
      justify-content-around 
      align-items-sm-center
      "
    >
        <div class="
          d-sm-flex 
          align-items-sm-center
          "
        >
          <div class="mt-3 mt-sm-0">
            <img 
              :src="imgSrcBook" 
              alt="Книга" 
              style="width: 90px; height: 135px"
            >
          </div>
          <div class="
            basket-component__description 
            d-xl-flex 
            align-items-xl-center 
            justify-content-between 
            mx-sm-4
            "
          >
            <div class="basket-component__description-title">
              <span class="
                h6 
                text-center 
                basket-component__title
                "
              >{{ titleBook }}</span>
            </div>
            <div class="basket-component__total-price">
              <span class="h6">
                {{ bookPrice }}р.
              </span>
            </div>
            <div class="
              basket-component__add-remove-item 

              mt-4 
              mt-sm-3 
              mt-xl-0 
              d-flex 
              justify-content-around 
              justify-content-sm-between
              "
            >
              <button 
                class="basket-component__remove-item"
                @click="$emit('downQuantity')"
              >
              </button>
              <span class="h6 basket-component__number-items">{{ quantityBooks }} шт</span>
              <button 
                class="basket-component__add-item"
                @click="$emit('upQuantity')"
              >
              </button>
            </div>
          </div>
        </div>
        <div class="basket-component__price">
          <span class="h6">
            {{ totalBookPrice }}р.
          </span>
        </div>
        <div class="d-flex justify-content-end">
          <span 
            role="button" 
            type="button" 
            class="basket-component__delete-items" 
            @click="$emit('deleteBook')"
          >
          </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrcBook: {
      type: String,
      require: false,
      default: ''
    },
    bookPrice: {
      type: String || Number,
      require: false,
      default: ''
    },
    totalBookPrice: {
      type: String || Number,
      require: false,
      default: ''
    },
    titleBook: {
      type: String,
      require: false,
      default: ''
    },
    quantityBooks: {
      type: String,
      require: false,
      default: ''
    }
    
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/mixins/_breakpoints.scss";
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";

.basket-component__price, .basket-component__total-price,  .basket-component__title, .basket-component__number-items {
  line-height: 27px;
  font-family: 'Raleway';
  letter-spacing: 0.07em;
}
.basket-component__wrapper {
    border: solid 3px black; 
    height: 410px;
}

.basket-component__delete-items {
  background-image: url('../assets/svg/basket-cross.svg');
  width: 32px;
  height: 32px;
  
  background-repeat: no-repeat;
  position: absolute;
  right: 47px;
  top: 24px;
}

.basket-component__add-remove-item {
  position: relative;
  height: 32px
}
.basket-component__remove-item, .basket-component__add-item  {
  background: none;
  border: none;
}
.basket-component__remove-item, 
.basket-component__add-item {
  content: '';
  background-repeat: no-repeat;
  background-position-y: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.basket-component__remove-item {
  background-image: url('../assets/svg/basket-remove-minus.svg') ;
}
.basket-component__add-item{
  background-image: url('../assets/svg/basket-add-plus.svg') ;
}
.basket-component__remove-item:active, .basket-component__add-item:active {
  background-size: 30px;
  width: 35px;
  height: 35px;
}
.basket-component__title {
  padding: 0px 5px 0px 5px;
}
.basket-component__total-price {
  display: none;
}

@include media-breakpoint-up(sm) {
  .basket-component__wrapper {
    height: 190px;
  }
  .basket-component__description {
    padding: 0px;
    width: 210px;
    text-align: left;
  }
  .basket-component__add-remove-item {
    width: 160px;
  }
  .basket-component__delete-items {
    right: 64px;
    top: 79px;
  }
}
@include media-breakpoint-up(lg) {
  .basket-component__wrapper {
    height: 220px;
  }
  .basket-component__delete-items {
    right: 47px;
    top: 94px;
  }
}

@include media-breakpoint-up(xl) {
  .basket-component__total-price {
    display: inline-block;
  }
  .basket-component__description {
    padding: 0px;
    width: 750px;
    text-align: left;
  }
  .basket-component__description-title {
    max-width: 210px;
  }
}
</style>