<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left">
        <img class="back-img" src="~assets/img/common/arrow-left.svg" alt="返回" @click="back">
      </div>
      <div slot="center">详情页</div>
      <div slot="right"><img class="back-img" src="~assets/img/detail/more.svg" alt="更多"></div>
    </nav-bar>
    <article-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import ArticleBar from 'components/content/articleBar/ArticleBar'

  export default {
    name: "DetailNavBar",
    components: {
      NavBar, ArticleBar
    },
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .back-img {
    margin-top: 8px;
    height: 30px;
  }
</style>
