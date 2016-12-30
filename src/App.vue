<template>
  <div id="app">
  <h1 class="red">FOOKLOOK</h1>
  <ul>
  <classify v-for="classify in classifys" v-bind:classify="classify"></classify>
  </ul>

  </div>
</template>

<script>
import Classify from './components/classify'
export default {
  name: 'app',
  data: function () {
    return {
      classifys: ''
    }
  },
  mounted: function () {
    this.$http.get(window.FOOKLOOK.site).then((response) => {
      this.classifys = response.body
    }, (response) => {
      console.log(response)
    })
  },
  components: { Classify }
}
</script>

<style>
@import './assets/main.css';
</style>
