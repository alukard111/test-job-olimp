<template>
  <div 
    class="
    tablet-menu

    collapse 

    col-sm-5
    col-md-5
    col-xl-4
    bg-white
    text-dark
    text-center

    position-absolute
    "
    :id="idBaseTabletMenu"
  >
    <div class="
      row
      d-flex
      justify-content-center
      
      pt-5"
    >
      <img 
        :href="arrowCollapseHref"
        data-toggle="collapse"
        src="../../assets/svg/arrow-up.svg" 
        alt="" 
        role="button"
        class="tablet-menu__arrow-up"
      >
    </div>
    <div class="
      tablet-menu__link

      pb-5
      pt-2
      row 
      d-flex 
      flex-column
      "
    >
      <div 
        class="my-4"
        role="button"
      >
        <span>
          <router-link to="/" style="text-decoration: none; color: black; "> Главная </router-link>
        </span>
      </div>
      <div 
        class="my-4"
        role="button"
      >
        <span>
          <router-link to="/about" style="text-decoration: none; color: black; "> Каталог</router-link>
        </span>
      </div>
      <div 
        class=" my-4"
        role="button"
      >
        <span>
         <router-link to="/basket" style="text-decoration: none; color: black; "> Корзина</router-link> 
        </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    idBaseTabletMenu: {
      type: String || Number,
      require: true,
      default: ''
    },
    arrowCollapseHref: {
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

.position-absolute {
  z-index: 10;
}

.tablet-menu__link {
  font-family: 'Forum-Regular', arial;
  font-size: 22px;
}

.tablet-menu__arrow-up {
  width: 40px;
  height: 11px;
}

@include media-breakpoint-up(sm) {
  .tablet-menu__arrow-up {
    width: 32px;
    height: 9px;
  }
}

@media (min-width: 768px) {
  .tablet-menu__link {
    font-size: 30px;
  }
  .tablet-menu__arrow-up {
    width: 64px;
    height: 18px;
  }
}
</style>
