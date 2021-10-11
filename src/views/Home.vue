<template>
  <div class="
    main-conteiner
    container-fluid
    " 
  >
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
        /> <!-- Бокса нет у baseheadermenu!!  -->
        <div class="
          header__title-box
          title-box 
          
          d-flex 
          flex-column 
          justify-content-center
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
                "
              > 
                <span class="
                  title-box__title-span" 
                  @click="getBooks()"
                >
                  КНИГИ, КОТОРЫЕ 
                  ВОЗНЕСУТ ВАС НА 
                  ОЛИМП
                </span>

              </div>
            </div>    
          </div>
          <div class="
            title-box__more-info-wrapper
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
      main-content

      container-fluid
      container-xl
      d-flex 
      flex-column 
      justify-content-center 
      align-items-center

      position-relative
      p-0
      "
    >
      <div class="
        main-content__product 

        col-sm-11
        col-10
        d-flex 
        flex-column 
        justify-content-center
        align-items-center
        "
      >
        <div class="main-content__subtitle-box ">
          <div class="text-center">
            <h2 class="main-content__subtitle">Горячие новинки</h2>
          </div>
        </div>
        <div class="
          main-content__wrapper-hot-new-items

          row
          align-items-center
          justify-content-center
          justify-content-sm-start 
          justify-content-md-center
          m-0
          " 
           style="height: 100%;"
        > 
          <button
            role="button"
            type="button"
            class="left-btn"
            v-show="btnSliderMidle"
            @click="sliderLeft()"
          >
          </button>

          <div class="
            main-content__hot-new-items

            col-12
            col-sm-12
            col-md-12
            col-lg-12

            d-flex
            align-items-center
            justify-content-start
            "
           
          >
            <BookComponent 
              v-for="item in getCardHotNewBooks"
              :key="item.id"
              :titleBook="item.title"
              :genreBook="item.genre"
              :priceBook="item.price"
              :pathBookImg="item.path"
            />

          </div>
          <button
              role="button"
              type="button"
              class="right-btn"
              v-show="btnSliderMidle "
              @click="slideRight()"
            >
          </button>
          <div class="
            base-main-slider

            my-5

            col-xl-4
            col-11
            d-flex
            align-items-baseline
            justify-content-around"
          >
            <button
              role="button"
              type="button"
              class="left-btn"
              v-show="btnSliderBottom"
              @click="sliderLeft()"
            >
            </button>
            <span 
              class="btn-circle" 
              ref="oneBtnCircle"
              role="button"
              type="button"
              v-show="btnSliderCircle"
              @click="activeBtnSliderCircle($event)"
            >
            </span>
            <span 
              class="btn-circle" 
              ref="twoBtnCircle"
              role="button"
              type="button"
              v-show="btnSliderCircle"
              @click="activeBtnSliderCircle($event)"
            >
            </span>
            <span 
              class="btn-circle" 
              ref="threeBtnCircle"
              role="button"
              type="button"
              v-show="btnSliderCircle"
              @click="activeBtnSliderCircle($event)"
            >
            </span>
            <button
              role="button"
              type="button"
              class="right-btn"
              @click="slideRight()"
              v-show="btnSliderBottom"
            >
            </button>
          </div>
        </div>
        
      </div>
      <div class="
        main-content__about 
        about 
        row 
        justify-content-center 
        m-0
        "
      >
        <div class="
          about__wrapper  
          col-sm-12 
          col-lg-11 
          col-11 
          p-0 
          d-flex 
          flex-row 
          flex-wrap
          "
        >
          <div class="
            about__description

            col
            col-sm-6
            d-flex 
            justify-content-center

            text-light  
            align-items-center
            order-sm-2
            p-0
            "
          >
            <div class="col-12">
              <h2 class="mb-5 aboute__title">О нас</h2>
              <span class="h6 aboute__subtitle" >
                Книжное наследие от мыслителей Древней Греции и до людей современности.
                Это не просто магазин, а настоящий клуб любителей книги,
                который объединяет в своем культурном пространстве людей
                самых разных интересов.
              </span>
            </div>
          </div>
          <div class="
            about__img-box 

            col-sm-6
            d-flex 
            justify-content-center
            order-sm-1"
          >
              <img src="../assets/png/about1.png" alt="about" class="about__img">
          </div>
          <div class="
            about__description
            
            col-12
            col-sm-6
            d-flex 
            justify-content-center 
            align-items-center 
            order-sm-3
            
            text-light
            "
          >
            <div class="col-12 ">
              <h2 class="mb-5 aboute__title">Гармония</h2>
              <span class="h6 aboute__subtitle">
                Наш проект «Гармония» объединяет читателей и авторов в реальности и в
                интернете. Каждую неделю проводятся встречи онлайн и вживую.
                Из наших регулярных рубрик вы узнаете много нового о книгах и писателях.
              </span>
            </div>
          </div>
          <div class="
            about__img-box

            col-sm-6
            d-flex 
            justify-content-center
            order-sm-4
            "
          >
            <img src="../assets/png/about2.png" alt="about" class="about__img">
          </div>
        </div>
      </div>
    </div>
    <div class="
      subscribe 
      container
      
      d-flex 
      flex-column 
      align-items-center 
      justify-content-center
      "
    > 
      <div class="my-3 text-center">
        <h2 class="subscribe__title">Хотите знать о книгах всё?</h2>
        <span class="h5 subscribe__subtitle">
          Подпишитесь на нашу новостную рассылку
        </span>
      </div>
      <div class="
        subscribe__form

        d-flex
        flex-row
        
        flex-wrap
        flex-sm-nowrap
        justify-content-center
        align-items-sm-center
        "
      >
        <input 
          type="text" 
          class="
            my-2 
            mx-sm-4 
            subscribe__input
            "
          >
        <BaseBtnTwo 
          :btnName="subscribeBtn"
          :classes="sendSubscribeStyle"
        />
      </div>
       
      
    </div>
    <BaseFooterMenu />
  </div>
</template>

<script >
import BaseBtnOne from '../components/baseComponents/BaseBtnOne.vue'
import BaseBtnTwo from '../components/baseComponents/BaseBtnTwo.vue'
import BaseHeaderMenu from '../components/baseComponents/BaseHeaderMenu.vue'
import BaseTabletMenu from '../components/baseComponents/BaseTabletMenu.vue'
import BaseFooterMenu from '../components/baseComponents/BaseFooterMenu.vue'
import BookComponent from '../components/BookComponent.vue'

import { mapActions } from 'vuex'

export default {
  components: {
    BaseBtnOne,
    BaseBtnTwo,
    
    BaseHeaderMenu,
    BaseTabletMenu,
    BaseFooterMenu,
    BookComponent,
  },

  data: () => ({
    btnNameOne: 'узнать больше',
    btnNameTwo: 'купить',
    
    subscribeBtn: 'отправить',
    sendSubscribeStyle: 'btn-primaty__send-btn',

    hrefArrowCollapse: '#baseTableMenu',
    idBaseTabletMenu: 'baseTableMenu',
    
    btnSliderMidle: false,
    btnSliderCircle: false,
    btnSliderBottom: false,

    sliderCardWidth: 0,
    sliderCardMargin: 0,

    funcEventResizeWindow: null,
    
    hotNewItems: null,
    
    elBtnsCircle: null,
    btnCircleActiveOne: null,
    btnCircleActiveTwo: null,
    btnCircleActiveThree: null,
  }),

  // при минимальном окне 320px слайдер отображается с двумя стрелками снизу
  // Слайдер перелистывает влево на ширину элемента, или карты с её margin
  // при упоре в стену, обозначить, что уперся в стену
  // кнопки отображаются по ширине экрана, @v-show="false"
  mounted() {
    this.$store.dispatch('getHotNewBooks')
    this.getBooks()
    this.getElementsHotNewItems()
    this.getElementsBtnCircle()
    this.isActiveBtnSliderCircle()
    this.getBodyWidth()
    this.funcEventResizeWindow = e => {this.eventResizeWindow()}
    this.resizeWindow()
    this.showSlider()
  },

  destroyed() {
    return this.destroyEventResizeWindow()
  },

  computed: {
    getCardHotNewBooks() {
      return this.$store.getters.getHotNewBooksFromState
    }
  },

  methods: { 
    getBooks() {
      return this.$store.dispatch('getBooks')
    },

    resizeWindow() {
      window.addEventListener('resize', this.funcEventResizeWindow)
    },  

    eventResizeWindow() {
      this.getBodyWidth()
      this.sliderStart()
      this.showSlider()
      this.isActiveBtnSliderCircle()
    },

    destroyEventResizeWindow() {
      return window.removeEventListener('resize', this.funcEventResizeWindow)
    },

    getBodyWidth() {
      this.bodyWidth = document.body.offsetWidth
    },

    showSlider() {
      if (document.body.offsetWidth <= 575) {
        this.btnSliderMidle = false
        this.btnSliderCircle =  false
        this.btnSliderBottom = true
      } else if (document.body.offsetWidth <= 1200) {
        this.btnSliderMidle = true
        this.btnSliderCircle =  false
        this.btnSliderBottom = false
      } else if (document.body.offsetWidth <= 4096) {
        this.btnSliderMidle = false
        this.btnSliderCircle =  true
        this.btnSliderBottom = true
      }
    },

    getElementsHotNewItems() {
      this.hotNewItems = document.querySelector('.main-content__hot-new-items')
    },

    getElementsBtnCircle() {
      this.elBtnsCircle = document.querySelectorAll('.btn-circle')
    },

    isCircleBtnActivated() {
      return this.elBtnsCircle.find((el, index) => { 
        return el.classList.contains(`btn-circle_active-${ index + 1 }`) 
      })
    },

    disableBtnsSliderCircle() {
      this.elBtnsCircle.forEach((el, index) => {
        el.classList.contains(`btn-circle_active`) ? el.classList.toggle(`btn-circle_active`) : ''
      }) 
    },

    isActiveBtnSliderCircle() {
      if (document.body.offsetWidth > 1200) {
        if (this.sliderCardWidth === 0) {
          this.disableBtnsSliderCircle()
          this.$refs.oneBtnCircle.classList.toggle('btn-circle_active')
        } else if (this.sliderCardWidth === this.slideThreeCard()) {
          this.disableBtnsSliderCircle()
          this.$refs.twoBtnCircle.classList.toggle('btn-circle_active')
        } else {
          this.disableBtnsSliderCircle()
          this.$refs.threeBtnCircle.classList.toggle('btn-circle_active')
        }
      }
    },

    activeBtnSliderCircle(e) {
      this.disableBtnsSliderCircle()
      e.currentTarget.classList.toggle('btn-circle_active')
      this.elBtnsCircle.forEach((el, index) => {
        if (el.classList.contains('btn-circle_active')) {
          if (index === 0) {
            this.sliderCardWidth = 0
            this.sliderStart()
          } else if (index === 1) {
            this.sliderCardWidth = this.slideThreeCard()
            this.hotNewItems.style.transform = `translateX(-${this.sliderCardWidth}px)`
          } else {
            this.sliderCardWidth = this.slideThreeCard() * 2
            this.hotNewItems.style.transform = `translateX(-${this.sliderCardWidth}px)`
          }
        }
      })
    },

    sliderStart() {
       this.hotNewItems.style.transform = `translateX(0px)`
       this.sliderCardWidth = 0
    },
    slideRight() {
      if (this.getWidthOfAllCard() >= this.sliderCardWidth) {
        this.sliderCardWidth += Boolean(document.body.offsetWidth > 1199) ?  this.slideThreeCard() : this.getWidthCard()
        this.hotNewItems.style.transform = `translateX(-${this.sliderCardWidth}px)`
        this.isActiveBtnSliderCircle()
      } else {
        return 
      }
    },

    sliderLeft() {
      if (this.sliderCardWidth > 0) {
        this.sliderCardWidth -= Boolean(document.body.offsetWidth > 1199) ?  this.slideThreeCard() : this.getWidthCard()
        this.hotNewItems.style.transform = `translateX(-${this.sliderCardWidth}px)`
        this.isActiveBtnSliderCircle()
      } else {
        return
      }
    },

    slideThreeCard() {
      return this.getWidthCard() * 3
    },

    getWidthOfAllCard() {
      if (Boolean(document.body.offsetWidth < 1199)) {
        return this.getWidthCard() * ([...document.querySelectorAll('.card')].length - 2)
      } 
      return this.getWidthCard() * ([...document.querySelectorAll('.card')].length - 4)
    },

    getWidthCard() {
      if (document.querySelector('.card') != null) {
        const style = document.querySelector('.card').currentStyle || window.getComputedStyle(document.querySelector('.card'))
        let margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight)
        let offsetWidthCard = document.querySelector('.card').offsetWidth
        return offsetWidthCard + margin
      } else {
        return 0
      }
    },
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


.main-conteiner {
    padding: 0 0 0 0;
  }
.header {
  background: #1596C1;
  position: relative;
  padding: 0;
}
.header__wrapper {
  background-image: url('../assets/svg/header-olimp.svg');
  background-position-x: 45%;
  background-position-y: 100%;

  background-repeat: no-repeat;
  min-height: 590px;
  max-height: 800px;
}
.title-box {
  min-height:350px;
}
.title-box__wrapper-title {
  font-family: 'Forum-Regular', arial;
}
.title-box__title {
  padding: 0px 0px 0px 10px;
  margin: 20px;
  
  letter-spacing: 0.07em;
  line-height: 60px;
  font-size: 40px;
}
.title-box__more-info {
  letter-spacing: 0.07em;
  text-transform: uppercase;
}
.main-content__product {
    height: 820px;
}

.main-content__hot-new-items {
  flex-wrap: nowrap;
  width: 100%;
  max-width: 320px;
  max-height: 665px;
  padding: 0px;

  transition: all 1.5s;
}
.main-content__subtitle {
  margin: 70px 0px 40px 0px;
  font-size: 28px;
  text-transform: uppercase;
  font-family: 'Forum-Regular', arial;
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
  right: 29%;
  z-index: 10;
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
}
.btn-circle {
  position: relative;
}
.btn-circle::before,
.btn-circle_active::before {
  content: '';
  width: 30px;
  height: 30px;
  background-image: url('../assets/svg/slider/ellipse.svg');
  position: absolute;
  top: 10px;
  right: -22px;
  &:active {
    background-image: url('../assets/svg/slider/active-ellipse.svg') !important;
  }
}
.btn-circle_active::before {
  background-image: url('../assets/svg/slider/active-ellipse.svg') !important;
}
.btn-circle:hover::before {
  background-image: url('../assets/svg/slider/active-ellipse.svg') !important;
}
.base-main-slider {
  height: 50px;
}
.main-content__wrapper-hot-new-items {
  max-width: 345px;
  overflow: hidden;
}
.about__description {
  background: #1596C1;
  height:500px;
  
  line-height: 27px;
  letter-spacing: 0.07em;
}
.aboute__title {
  font-family: 'Forum-regular'; 
  text-transform: uppercase;
}
.aboute__subtitle {
  font-family: 'Raleway';
}
.about__img-box {
  height: 500px;
  overflow: hidden;
  padding: 0;
}
.about__img {
  width: 100%; 
  height: 100%; 
  object-fit: cover;
}
.subscribe {
  height: 450px;
}
.subscribe__title {
  text-transform: uppercase;
  font-family: 'Forum-Regular', arial;
  line-height: 45px;
  letter-spacing: 0.07em;
}
.subscribe__subtitle {
  font-family: 'Raleway';
  letter-spacing: 0.07em;
  line-height: 27px;
}
.subscribe__input {
  padding: 15px; 
  border: 3px solid black; 
  width:100%; 
  height: 50px
}

@media (min-width: 320px) {
  .header__wrapper {
    background-size: 200%;
    background-position-x: center;
    background-position-y: 100%;
  }
}

@include media-breakpoint-up(sm) {
  .header__wrapper {
    min-height: 820px;
    background-size: 140%;
    background-position-x: center;
    background-position-y: 100%;
  }
  .title-box {
    min-height: 300px;
  }
  .title-box__title {
    @include adaptiv-font(90, 24);
    height: 460px;
    line-height: 70px;
  }

  .main-content__product {
    height: 860px;
  }

  .about__description {
    height: 550px;
  }
  .about__img-box {
    height: 550px;
  }
  .subscribe__form {
    width: 100%;
  }
  .main-content__wrapper-hot-new-items {
    max-width: 500px;
  }
  .left-btn::before {
    left: 0px;
  }
  .right-btn::before {
    left: 27px;
  }
}
    
@include media-breakpoint-up(md) {
   .main-content__wrapper-hot-new-items {
    max-width: 100%;
  }
  .header__wrapper {
    min-height: 820px;
    background-size: none;
    background-position-x: center;
    background-position-y: 100%;
  }
 .title-box__title {
    line-height: 90px;
    max-height: 460px;
  }
  .title-box__more-info {
    font-size: 42px;
  }
  .main-content__subtitle {
    font-size: 64px;
  }
  .main-content__hot-new-items {
    min-width: 90%;
    max-width: 390px;
  }
  .main-content__product {
    height: 860px;
  }
  .subscribe__form {
    width: 80%;
  }
  .right-btn::before {
    left: 8px;
  }
}



@include media-breakpoint-up(lg) {
  .header__wrapper {
    min-height: 940px;
  }
  .main-content__product {
    height: 1020px;
  }
  .about__description {
    height: 590px;
  }
  .about__img-box {
    height: 590px;
  }
  .subscribe__input {
    height: 60px;
  }
}

@include media-breakpoint-up(xl) {
  .header__wrapper {
    background-position-x: left;
    background-position-y: 100%;
    background-size: 95%;
  }
  .title-box__title {
    font-size: 90px;
    line-height: 120px;
  }
  .main-content__hot-new-items {
    max-width: 1295px;
    height:  665px;
  }
  
  .main-content__product {
    height: 1220px;
  }
   .main-content__wrapper-hot-new-items {
    width: 1206px;
  }
  .main-content__subtitle {
    margin: 140px 0px 70px 0px;
  }
}

@media (min-width: 1350px) {
  .main-content__hot-new-items {
    height: 665px;
  }
  .subscribe__title {
    font-size: 42px !important;
  }
 
}
</style>
