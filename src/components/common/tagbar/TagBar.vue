<template>
  <div class="tag-bar">
    <img class="tag-img" src="~assets/img/tag/group.svg" alt="">
    <span class="tag-title">大公司热门事件速递</span>
    <span class="tag-split"></span>
    <span class="tag-btn">关注</span>
  </div>
</template>

<script>

  export default {
    name: "TagBar"
  }
</script>

<style scoped>
  .tag-bar {
    max-width: 200px;
    height: 20px;
    background-color: #ace;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
  }

  .tag-img {
    width: 16px;
    height: 18px;
    /*background-color: #99902a;*/
    margin-left: 10px;
  }

  .tag-title {
    height: 14px;
    font-size: 13px;
    color: #5d537e;
    font-family: Algerian;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 5px;
  }

  .tag-split {
    border: 0.5px solid;
    float: left;
    height: 14px;
    margin: 0 4px;
  }

  .tag-btn {
    width: 24px;
    height: 14px;
    text-align: center;
    font-size: 10px;
    color: #ad329b;
  }
</style>
