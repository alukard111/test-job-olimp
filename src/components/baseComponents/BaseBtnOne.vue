<template>
  <div class="
    col-xl-5
    col-lg-6
    col-md-5
    col-sm-7
    col-11

    p-0
    " 
    style="border: white 3px solid;"
  >
    <button
      :disabled="disabledBtnOne"
       @click="$emit('click')"
      type="btn"
      class="
        d-flex
        align-items-center
        justify-content-center

        btn 
        btn-primaty
      "      
    >
      {{ btnName }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String || Number,
      require: true,
      default: 'Button'
    },  
    disabledBtnOne: {
      type: Boolean,
      require: false,
      default: false
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

.btn-primaty {
  font-family: 'Forum-Regular', arial;
  text-transform: uppercase;
  color: white;
  border-radius: 0px;
      letter-spacing: 0.07em;
  @include adaptiv-font(40, 24);

  height: 50px; 
  width: 100%;

  &:focus {
    box-shadow: none;
  }
  &:hover {
    background: #CDCDCD;
    color: white;
  }
  &:active {
    color: black;
    background: white;
  }
}
  
@media (min-width: 320px) {
  .btn-primaty {
    height: 50px; 
  }
}

@include media-breakpoint-up(sm) {
  .btn-primaty {
    @include adaptiv-font(32, 24);
  }
}

@include media-breakpoint-up(md) {
  .btn-primaty {
    @include adaptiv-font(40, 24);
  }
}
@include media-breakpoint-up(lg) {
  .btn-primaty {
    @include adaptiv-font(40, 24);    
    height: 75px; 
  }
}
@include media-breakpoint-up(xl) {
  .btn-primaty { 
    font-size: 40px;
  }
}


</style>