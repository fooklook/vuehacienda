<template>
  <div class="detail">
  <div>文章栏目：{{ detail_classify.article_classify_name }}</div>
  <h2>{{ detail_article.article_title }}</h2>
  <div v-html="atricleMarkdown">
  </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'detail',
  data: function () {
    return {
      detail_classify: '',
      detail_article: '',
      detail_params: this.$route.params,
      atricleMarkdown: ''
    }
  },
  computed: {
  },
  methods: {
    get_list: function () {
      this.detail_params = this.$route.params
      this.$http.get(window.FOOKLOOK.site + '/' + this.$route.params.id + '/' + this.$route.params.name).then((response) => {
        this.detail_classify = response.body.classify
        this.detail_article = response.body.article
        this.atricleMarkdown = marked(this.detail_article.article_content, { sanitize: true })
      }, (response) => {
        console.log(response)
      })
    }
  },
  mounted: function () {
    this.get_list()
  },
  watch: {
    '$route': function () {
      this.get_list()
    }
  }
}
</script>

<style>
</style>