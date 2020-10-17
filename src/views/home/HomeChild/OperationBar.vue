<template>
  <div class="operation-bar">
    <nav-bar>
      <div slot="left">分享</div>
      <div slot="center">评论</div>
      <div slot="right">点赞</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "OperationBar",
    components: {
      NavBar
    }
  }
</script>

<style>


</style>
