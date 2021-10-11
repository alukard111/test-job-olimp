<template>
  <div class="
    footer-menu

    container-fluid
    container-xl
    d-flex
    flex-column
    justify-content-center
    "
  >
    <div class="
      text-light
      row
    
      align-items-center
      justify-content-center
      justify-content-md-center
      justify-content-lg-between
      "
      style="height: 100%;"
    > 
    <div class="col-7 col-md-5 col-lg-5 d-flex flex-column flex-md-row justify-content-around align-items-md-center" 
      style="height: 100%;">
      <div class="text-left">   
        <span 
          class="h5 footer-menu__text-label"
          role="button"
        >
          OLYMPIANS<br>
          BOOKS
        </span>
      </div>

      <div class=" text-left " >
        <span class="h6" style="font-family: 'Raleway-number'; ">
          +30922040281
        </span>
      </div>
    </div>

    <div class="
      col-5
      col-md-6
      col-md-7
      col-lg-6
      
      d-flex
      flex-column
      flex-md-row
      align-items-md-center
      justify-content-around

      text-right
      
      "
      style="height: 100%;"
    >
      <div class="h6 m-0"> <router-link to="/" class="text-light">Главная</router-link></div>
      <div class="h6 m-0 "><router-link to="/about" class="text-light"> Каталог</router-link> </div>
      <div class="h6 m-0"><router-link to="/basket" class="text-light">  Корзина</router-link></div>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~bootstrap/scss/mixins/_breakpoints.scss";
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
.footer-menu {
  height: 210px;
  background: #1596C1;
  font-family: 'Raleway', 'rawline, sans-serif';
}
.h6 {
  letter-spacing: 0.07em;
}
.footer-menu__text-label {
  font-family: 'Archeologicaps', arial;
}
.router-link {
  text-decoration: none;
}

@include media-breakpoint-up(md) {
  .footer-menu {
    height: 120px;
  }
}
@include media-breakpoint-up(xl) {
  .footer-menu__text-label {
    font-size: 30px !important;
    line-height: 45px;
  }
  .h6 {
    font-size: 24px !important;
  }
}
</style>