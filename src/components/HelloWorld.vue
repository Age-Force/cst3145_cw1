<template>

  <div class="hello">
    <br>
    <br>
    <h2>Welcome to</h2>
    <h1>{{ msg }}</h1>
    <p>
      Successful and unsuccessful people do not vary greatly in their abilities. <br> They vary in their desires to reach their potential.” – John Maxwell    </p>
    <br>
    <h3>Like &amp; Follow Us</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Facebook</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Youtube</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Linkedin</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">Instagram</a></li>
    </ul>
    <br>
    <h3>Contact Us</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Our Nearest Office</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Map</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">Telephone Number</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">Fax Number</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Tell an Agent</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-decoration: underline;
  color: black;
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: aliceblue;
}
  h2{
    color: lightgray;
  }

</style>
