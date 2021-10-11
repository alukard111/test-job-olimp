<template>
  <div    >
    <button
      :disabled="disabledBtnTwo"
      type="btn"
      role="btn"
      class="btn btn-primaty"
      :class="classes"
      @click="$emit('click')"
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
      default: 'Button',
    },  
    disabledBtnTwo: {
      type: Boolean,
      require: false,
      default: false,
    },
    classes: {
      type: String,
      require: false,
      default: '',
    },

  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/mixins/_breakpoints.scss";
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
.btn-primaty {
  font-family: 'Forum-Regular', arial;
  text-transform: uppercase;
  color: black;
  border: black 3px solid;
  border-radius: 0px;
  max-width: 100%;
  height: 50px; 
   
  font-size: 24px;

  &:focus {
    box-shadow: none;
  }
  &:hover {
    background: #CDCDCD;
  }
  &:active {
    background: #1596C1;
  }
}

.btn-primaty__send-btn {
    height: 50px !important;
  }

.btn-primaty__checkout {
  height: 50px;
  width: 290px !important;
}
  
@media (min-width: 320px) {
  .btn-primaty {
    max-width: 100%;
    height: 50px; 
    font-size: 24px;
  }
}

@include media-breakpoint-up(sm) {
  .btn-primaty {
    width: 140px;
    height: 60px;
  }
  .btn-primaty__checkout {
    width: 100% !important;
    min-width: 290px !important;
    max-width: 640px !important;
  }
}

@include media-breakpoint-up(md) {
  .btn-primaty {
    width: 145px;
    height: 65px; 
    
    font-size: 26px;
  }
}

@include media-breakpoint-up(lg) {
  .btn-primaty {
    font-size: 28px;
  }
  .btn-primaty__send-btn {
    width: 210px !important;
    height: 60px !important;
  }
}

@include media-breakpoint-up(xl) {
  .btn-primaty {
    max-width: 174px;
    height: 75px; 

    font-size: 30px;
  }
  .btn-primaty__send-btn {
    width: 310px !important;
    max-width: 310px;
  }
}

</style>