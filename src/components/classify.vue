<template>
  <div class="classify">
    <li>
      <router-link :to="{ path: '/list/'+classify.article_classify_id }">{{ classify.article_classify_name }}</router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: 'classify',
  props: ['classify'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
