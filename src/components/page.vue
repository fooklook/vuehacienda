<template>
  <div class="page">
  首页
  </div>
</template>

<script>
export default {
  name: 'page',
  data: function () {
    return {
      article: ''
    }
  },
  mounted: function () {
    // this.$http.get('http://fooklook.cc/vue/').then((response) => {
    //   this.article = response.body
    // }, (response) => {
    //   console.log(response)
    // })
  }
}
</script>

<style>
</style>