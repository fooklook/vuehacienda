<template>
  <div class="list">
  <div>文章栏目：{{ classify.article_classify_name }}</div>
  <ul>
  	<li v-for="article in articles">
  		<router-link :to="{ path: '/detail/' + $route.params.id + '/' + article.article_title }">{{ article.article_title }}</router-link>
  	</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data: function () {
    return {
      classify: '',
      articles: '',
      params: this.$route.params
    }
  },
  methods: {
    get_list: function () {
      this.params = this.$route.params
      this.$http.get(window.FOOKLOOK.site + this.$route.params.id).then((response) => {
        this.classify = response.body.classify
        this.articles = response.body.articles
      }, (response) => {
        console.log(response)
      })
    }
  },
  mounted: function () {
    this.get_list()
  },
  watch: {
    '$route': function () { this.get_list() }
  }
}
</script>

<style>
</style>