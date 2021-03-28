<template>
  <div class="article-bar" @click="articleClick">
    <user-bar/>
    <content-bar/>
    <tag-bar/>
    <operation-bar/>
  </div>
</template>

<script>

  import UserBar from "./UserBar";
  import ContentBar from "./ContentBar"
  import OperationBar from './OperationBar'
  import TagBar from 'components/common/tagbar/TagBar'

  export default {
    name: "ArticleBar",
    components: {
      UserBar,
      ContentBar,
      TagBar,
      OperationBar
    },
    methods: {
      articleClick(){
        this.$router.push('/detail/' + 111)
      }
    }
  }
</script>

<style scoped>
  .article-bar {
    padding: 0px 10px 0px;
  }
</style>
