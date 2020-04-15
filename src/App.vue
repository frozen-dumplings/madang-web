<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/time-line">TimeLine</router-link> |
      <router-link to="/channel">Channel</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
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

$sizes: (0,10,15,20,25,30,50);
$positions: ('top','left','bottom','right');

@each $size in $sizes {
  .u-m-#{$size} {
    margin: $size + px;
  }
  .u-p-#{$size} {
    padding: $size + px;
  }
}
</style>
