<template>
  <div class="about">
    <div class="container-fluid" style="padding: 0px">
      <header class="
      main-conteiner__header
      header
      
      container-fluid
      container-lg
      "
    >

      <div class="
        header__wrapper
        container-fluid
        text-white
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
          />  
        <div class="
          header__title-box
          title-box 
          
          d-flex 
          flex-column 
          justify-content-around
          
          "
        >
          <div class="
            title-box__wrapper-title
            row
            align-items-center
            justify-content-center
            "
          >
            <div class="
              title-box__title
              text-left
              col-11
              d-flex
              align-items-center
              "
            >
              <div class="
                col-xl-10
                col-lg-9
                col-md-7
                col-sm-9
                col-7
                px-0
                
                title-box__more-info
                "
              > 
                <span class="
                  title-box__title-span h1"
                >
                  Собрание <br> древних знаний
                </span>

              </div>
            </div>    
          </div>
          <div class="
            row
            d-flex
            align-items-center
            justify-content-center
            "
          >
            <div class="
              title-box__more-info  
              col-11
              d-flex
              justify-content-start
              "
            >
              <BaseBtnOne 
                :btnName="btnNameOne" 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="
      catalog 
      container-fluid
      
      container-lg 
      d-flex 
      justify-content-center 
      align-items-center 
      flex-column 
      p-0
      "
    >
      <div class="
        catalog__title-wrapper 
        col 
        col-md-10 
        d-flex 
        flex-column 
        justify-content-center 
        justify-content-md-end
        "
      >
        <div class="catalog__title mt-5">
          <h2>
            библиотека
          </h2>
        </div>
        <div class="
          catalog__list 
          d-flex 
          flex-column 
          flex-md-row 
          justify-content-between 
          align-items-md-end 
          my-3
          "
        >
          <h3 @click="genreOff()">Категория</h3>
          <span class="h5" @click="classicGenreOn()"> Классика </span>
          <span class="h5" @click="adventureGenreOn()"> Приключения </span>
          <span class="h5" @click="fairyTalesGenreOn()"> Сказки </span>
        </div>
      </div>
      <div class="
        col 
        d-flex 
        flex-wrap 
        mt-2 
        justify-content-center 
        p-md-0
        "
      >
        <BookComponent 
          v-for="item in paginatedData"
          :key="item.id"

          :titleBook="item.title"
          :genreBook="item.genre"
          :priceBook="item.price"
          :pathBookImg="item.path"
          :catalogComponent="catalogComponentStyle"
         />
      </div>
    </div>
    <footer class=" 
      container-fluid
      container-lg p-0
      "
    >
      <div class="
        col-12 
        my-5 
        d-flex 
        flex-row 
        justify-content-center 
        align-items-center
        " 
        style="height: 100px;"
      >
        <button 
          class=" left-btn"
          @click="prevPage()"
          v-if="pageNumber != 1"
        >
        </button>
          {{  pageNumber  }}/{{  pageCount()  }} 
        <button 
          class="right-btn"
          @click="nextPage()"
          v-if="pageCount() > pageNumber"
        >
        </button>
      </div>
      <BaseFooterMenu />
    </footer>
    </div>
  </div>
</template>

<script>

import BaseHeaderMenu from '../components/baseComponents/BaseHeaderMenu.vue'
import BaseTabletMenu from '../components/baseComponents/BaseTabletMenu.vue'
import BaseBtnOne from '../components/baseComponents/BaseBtnOne.vue'
import BaseFooterMenu from '../components/baseComponents/BaseFooterMenu.vue'
import BookComponent from '../components/BookComponent.vue'


export default {
  components: {
    BaseHeaderMenu,
    BaseTabletMenu,
    BaseFooterMenu,
    BaseBtnOne,
    BookComponent,
  },

  data: () => ({
    hrefArrowCollapse: '#baseTableMenu',
    idBaseTabletMenu: 'baseTableMenu',

    btnNameOne: 'узнать больше',
    
    catalogComponentStyle: true,
    
    allBooks: [],
    sizePages: 9,
    lengthBooks: null,
    pageNumber: 1,

    classicGenre: false,
    adventureGenre: false,
    fairyTales: false,

    classicBooks: null,
    adventureBooks: null,
    fairyTalesBooks: null,
  }),
  
  

  mounted() {
    this.$store.dispatch('getBooks')
    setTimeout(() => {
      this.allBooks = Object.assign(this.$store.getters.allBooks)
      this.getGenreBooks()
    }, 1000)
    
  },

  computed: {
    paginatedData() {
      const start = (this.pageNumber - 1) * this.sizePages
      const end = start + this.sizePages
      if (!Boolean(this.classicGenre) && !Boolean(this.adventureGenre) && !Boolean(this.fairyTales)) {
        return this.allBooks.slice(start, end)
      } else if (this.classicGenre) {
        return this.classicBooks.slice(0, this.classicBooks.length)
      } else if (this.adventureGenre) {
        return this.adventureBooks.slice(0, this.adventureBooks.length)
      } else if (this.fairyTales) {
        return this.fairyTalesBooks.slice(0, this.adventureBooks.length)
      }
     
    },
  },

  methods: {
    pageCount() {
      if (!Boolean(this.classicGenre) && !Boolean(this.adventureGenre) && !Boolean(this.fairyTales)) {
        this.lengthBooks = [...this.allBooks].length
        return Math.ceil(this.lengthBooks/this.sizePages)
      } else if (this.classicGenre) {
        this.lengthBooks = this.classicBooks.length
        return Math.ceil(this.lengthBooks/this.sizePages)
      } else if (this.adventureGenre) {
        this.lengthBooks = this.adventureBooks.length
        return Math.ceil(this.lengthBooks/this.sizePages)
      } else if (this.fairyTales) {
        this.lengthBooks = this.fairyTalesBooks.length
        return Math.ceil(this.lengthBooks/this.sizePages)
      }
    },
   
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },

  
    getGenreBooks() {
      this.classicBooks = this.allBooks.filter((book) => {
        return book.genre === 'Классика'
      })
      this.adventureBooks = this.allBooks.filter((book) => {
        return book.genre === 'Приключения'
      }) 
      this.fairyTalesBooks = this.allBooks.filter((book) => {
        return book.genre === 'Сказки'
      })
    },
    genreOff() {
      this.pageNumber = 1
      this.classicGenre = false
      this.adventureGenre = false
      this.fairyTales = false 
    },
    classicGenreOn() {
      this.pageNumber = 1
      this.classicGenre = true
      this.adventureGenre = false
      this.fairyTales = false
    },
    adventureGenreOn() {
      this.pageNumber = 1
      this.classicGenre = false
      this.adventureGenre = true
      this.fairyTales = false
    },
    fairyTalesGenreOn() {
      this.pageNumber = 1
      this.classicGenre = false
      this.adventureGenre = false
      this.fairyTales = true
    },
  }
}


</script>
<style lang="scss" scoped>

@import "~bootstrap/scss/mixins/_breakpoints.scss";
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";


.header__wrapper {
  background-image: url('../assets/svg/header-catalog.svg');
  background-position-x: 45%;
  background-position-y: 100%;

  background-repeat: no-repeat;
  min-height: 490px;
  max-height: 800px;
}
.header {
  background: #1596C1;
  position: relative;
  padding: 0;
}
.title-box__wrapper-title {
  font-family: 'Forum-Regular', arial;
}
.title-box__title {
  padding: 0px 0px 0px 10px;
  
  letter-spacing: 0.07em;
  line-height: 60px;
  font-size: 40px;
  margin: 20px;
}
.title-box {
  height: 480px;
}

.title-box__more-info {
  letter-spacing: 0.07em;
  text-transform: uppercase;
}
.title-box__title-span {
  line-height: 60px;
  letter-spacing: 0.07em;
}
.catalog__title-wrapper {
  height: 320px
}
.catalog__title>h2 {
  text-transform: uppercase; 
  letter-spacing: 0.07em; 
  line-height: 45px; 
  font-family: 'Forum-Regular', arial;
}
.catalog__list {
  height: 63%;
}
.catalog__list>h3 {
  text-transform: uppercase; 
  font-family: 'Forum-Regular', arial;
}
.catalog__list>span {
  font-family: 'Raleway';
  letter-spacing: 0.07em;
  line-height: 27px;
}
.right-btn {
  position: relative;

  outline: none;
  border: none;
}
.right-btn::before {
  content: '';
  background-image: url('../assets/svg/slider/arrow-right.svg');
  width: 14px;
  height: 50px;

  position: absolute;
  left: 28px;
  bottom: -23px;
}
.left-btn {
  position: relative;

  outline: none;
  border: none;
}
.left-btn::before {
  content: '';
  background-image: url('../assets/svg/slider/arrow-left.svg');
  width: 14px;
  height: 50px;

  position: absolute; 
  left: -28px;
  bottom: -23px;
}

@media (min-width: 320px) {
  .header__wrapper {
    background-position-x: center;
    background-position-y: 0%;
  }
}

@include media-breakpoint-up(sm) {
  .header__wrapper {
    // min-height: 820px;
    background-size: 159%;
    background-position-x: center;
    background-position-y: 38%;
    max-height: 680px;
  }
  .left-btn::before {
    left: -136px;
  }
  .right-btn::before {
    left: 136px;
  }
}
@include media-breakpoint-up(md) {
  .header__wrapper {
    // min-height: 820px;
    background-size: 122%;
    background-position-x: 20%;
    background-position-y: 0%;
  }
  .catalog__list {
    height: 30%;
  }
  .catalog__title-wrapper {
    min-height: 255px
  }
  h2 {
    font-size: 48px;
  }
}

@include media-breakpoint-up(lg) {
  .header__wrapper {
    background-size: 107%;
    background-position-x: center;
    background-position-y: 0px;
  }
}
@include media-breakpoint-up(xl) {
  .header__wrapper {
    background-position-x: left;
    background-position-y: 0%;
    background-size: 100%;
    height: 820px;
  }
  .title-box__title-span {
    font-size: 80px !important;
    line-height: 120px !important;
  }
  h2 {
    font-size: 64px;
  }
  .catalog__list {
    height: 30%;
  }
  .catalog__title-wrapper {
    min-height: 420px
  }
}

@media (min-width: 1450px) {
  .header__wrapper {
    height: 820px;
    max-height: 820px;   
  }
}
</style>
