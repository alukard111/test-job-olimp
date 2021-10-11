<template>
  <div class="
    card

    my-2
    d-flex
    flex-shrink-0
    flex-column
    justify-content-around
    align-items-center
    "
    :class="catalogComponent ? [...catalogStyle] : [...mainStyle]"
  >
    <div class="
      row
      d-flex
      flex-column
      align-items-center
      "
    >
      <img 
        class="card__img-book"
        :src="`${pathBookImg}`"
        :alt="titleBook"
      >
      <span class="
        card__title-book
        mt-3
        "
      >
        {{ titleBook }}
      </span>
    </div>
    <div 
      class="row"
      style="font-size: 18px;"
    >
      <span>
        {{ genreBook }}
      </span>
    </div>
    <div class="row">
      <span class="
        card__price 
        d-flex 
        justify-content-center 
        align-items-center
        "
      >
        {{ priceBook }}р.
      </span>
      <BaseBtnTwo 
        :btnName="btnName"
        @click="addBookInBasket()"
      />
    </div>
  </div>
</template>

<script>
import BaseBtnTwo from "./baseComponents/BaseBtnTwo.vue"

export default {
  props: {
    titleBook: {
      type: String,
      require: false,
      default: '',
    },
    genreBook: {
      type: String,
      require: false,
      default: '',
    },
    priceBook: {
      type: String,
      require: false,
      default: '',
    },
    pathBookImg: {
      type: String,
      require: false,
      default: '',
    },
    catalogComponent: {
      type: Boolean,
      require: false,
      default: false
    }
  },

  components: {
    BaseBtnTwo,
  },

  data: () => ({
    btnName: 'купить',
    mainStyle: [ 'col-xl-4', 'col-md-11','col-sm-12', 'col-11', 'mx-3','mx-sm-3', 'mx-md-4', 'mx-xl-1'],
    catalogStyle: [ 'col-xl-4', 'col-md-5 ','col-sm-7', 'col-11', 'mx-0', 'mx-sm-1', 'mx-md-2', 'mx-lg-3', 'mx-xl-1'],
  }),

  methods: {
    addBookInBasket() {
      this.$store.dispatch('getBooksFromBasket')
      return this.$store.dispatch('setBooksInBasket', `${this.titleBook}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/mixins/_breakpoints.scss";
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";

.card {
  height: 500px;
  border: 3px solid black;
  border-radius: 0px;
  font-family: 'Raleway';
  
  margin: 0px 15px 0px 15px;
}
.card__img-book {
  width: 132px;
  height: 200px;
}
.card__title-book {
  max-width: 280px;
  font-size: 18px;
}
.card__price {
  width: 115px;
  height: 50px; 
  font-size: 24px;
}

@include media-breakpoint-up(sm) {
  .card__price {
    width: 140px;
    height: 60px;
  }
}

@include media-breakpoint-up(md) {
  .card {
    height: 585px;
  }
  .card__price {
    width: 145px;
    height: 60px;
  }
  
  .card__img-book {
    width: 200px;
    height: 300px;
  }
}

@include media-breakpoint-up(lg) {
  .card {
    height: 650px;
  }
}
  
@include media-breakpoint-up(xl) {
  .card__price {
    width: 174px;
    height: 75px; 
    font-size: 32px;
  }
  .card__title-book {
    font-size: 24px;
    max-width: 370px;
  }
   .card {
    max-width: 32.7%;
  }
}
</style>