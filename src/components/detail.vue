<template>
  <div class="detail">
  <div>文章栏目：{{ classify.article_classify_name }}</div>
  <h2>{{ article.article_title }}</h2>
  <div class="article" v-html="atricleMarkdown">
  </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'detail',
  data: function () {
    return {
      classify: '',
      article: '',
      params: this.$route.params
    }
  },
  computed: {
    atricleMarkdown: function () {
      return marked(this.article.article_content, { sanitize: true })
      // return this.article.article_content
    }
  },
  methods: {
    get_list: function () {
      this.params = this.$route.params
      this.$http.get(window.FOOKLOOK.site + this.$route.params.id + '/' + this.$route.params.name).then((response) => {
        this.classify = response.body.classify
        this.article = response.body.article
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