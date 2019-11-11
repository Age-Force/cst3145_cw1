<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link> 
      <router-link to="/about"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app 
  {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #accdee;
    background-origin: border-box;
    background-image: radial-gradient(circle, #bc7fa2, #af7da7, #9f7bac, #8e7bae, #7a7aaf, #6c81b6, #5c88ba, #4c8ebb, #429dc1, #42acc3, #4fb9c2, #64c6bf);

  }
</style>
