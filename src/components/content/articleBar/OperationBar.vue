<template>
  <div class="operation-bar">
    <image-button-bar class="arc-opt-left">
      <img slot="image" src="~assets/img/home/share.svg" alt="分享">
      <span slot="content">分享</span>
    </image-button-bar>
    <image-button-bar class="arc-opt-center">
      <img slot="image" src="~assets/img/home/comment.svg" alt="评论">
      <span slot="content">291</span>
    </image-button-bar>
    <image-button-bar class="arc-opt-right">
      <img slot="image" src="~assets/img/home/thumb.svg" alt="点赞">
      <span slot="content">249</span>
    </image-button-bar>
  </div>
</template>

<script>
  import ImageButtonBar from 'components/content/imageButtonBar/ImageButtonBar'

  export default {
    name: "OperationBar",
    components: {
      ImageButtonBar
    }
  }
</script>

<style scoped>
  .operation-bar {
    height: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 10px 0px;
  }
</style>
