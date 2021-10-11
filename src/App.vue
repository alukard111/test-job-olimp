<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">


@font-face {
  font-family: 'Raleway-number';
  src: ('Raleway-number'),
    url('https://raw.githubusercontent.com/h-ibaldo/Raleway_Fixed_Numerals/master/css/rawline.css') format('truetype')
}
@font-face {
  font-family: 'Archeologicaps';
  src: local('Archeologicaps'),
    url('../public/fonts/ttf/archeologicaps/Archeologicaps.ttf') format('truetype')
}

@font-face {
  font-family: 'Forum-regular';
  src: local('Forum-regular'),
    url('../public/fonts/ttf/forum/Forum-Regular.ttf') format('truetype')
}

@font-face {
  font-family: 'Raleway';
  src: local('Raleway'),
    url('../public/fonts/ttf/Raleway/Raleway.ttf') format('truetype')
}




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
