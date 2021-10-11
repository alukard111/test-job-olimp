<template>
  <div class="
    navbar

    row
    align-items-center
    justify-content-center
    p-0"
  >
    <div class="
      navbar__wrapper 

      row 
      justify-content-center 
      align-items-center
      "
    >

      <div class="
        navbar__label
        
        col-3
        text-left
        align-self-center
        "
      >   
        <span 
          class="
            navbar__label-span
            text-light
            "
          role="button"
        >
          OLYMPIANS<br>
          BOOKS
        </span>
      </div>
      <div class="col-5">
        <span 
          role="button"
        >
          <img 
            :href="arrowCollapseHref"
            data-toggle="collapse" 
            src="../../assets/svg/arrow-down.svg"
            alt="arrow-down"
            class="navbar__arrow-down"
          >
        </span>
      </div>
      <div 
        class="
          navbar__basket

          col-3
          text-right"
      >
        <router-link class="navbar__basket" to="/basket">
 
            <img 
              src="../../assets/svg/basket.svg"
              alt="basket"
              class="navbar__basket"
            >
         
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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


$maxWidth: 1920;

@mixin adaptiv-font($pcSize, $mobSize) {
 $addSize: $pcSize - $mobSize;
 $maxWidth: $maxWidth - 320;
 font-size: calc(#{$mobSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth}));
}

.navbar {
  height: 50px;
}
.navbar__wrapper {
  width: 100%;
  height: 100%;
}
.navbar__label {
  padding:  0;
  line-height: 1;
}
.navbar__label-span {
  font-family: 'Archeologicaps', arial;
  font-size: 10px;

  line-height: 1.5;
  padding: 0px;
}

.navbar__arrow-down {
  width: 40px;
  height: 11px;
}
.navbar__basket {
  width: 34px;
  height: 40px;
  padding: 0;
}


@include media-breakpoint-up(sm) {
  .navbar {
    height: 50px;
  }
   .navbar__label-span {
    @include adaptiv-font(24, 10);
  }
   .navbar__arrow-down {
    width: 32px;
    height: 9px;
  }
  .navbar__basket {
    width: 27px;
    height: 32px;
    padding: 0px;
  }
}


@include media-breakpoint-up(lg) {
  .navbar__label-span {
    @include adaptiv-font(20, 14);
  }
  .navbar__arrow-down {
    width: 64px;
    height: 18px;
  }
  .navbar__basket {
    width: 54px;
    height: 64px;
  }
  .navbar {
    height: 100px;
  }
}

@include media-breakpoint-up(xl) {
  .navbar__label-span {
    font-size: 24px;
  }
}

</style>