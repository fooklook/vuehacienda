<template>
  <div class="list">
  <div>文章：{{ list_classify.article_classify_name }}</div>
  <ul>
  	<li v-for="article in list_articles">
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
      list_classify: '',
      list_articles: '',
      list_params: this.$route.params
    }
  },
  methods: {
    get_list: function () {
      this.list_params = this.$route.params
      this.$http.get(window.FOOKLOOK.site + '/' + this.$route.params.id).then((response) => {
        this.list_classify = response.body.classify
        this.list_articles = response.body.articles
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