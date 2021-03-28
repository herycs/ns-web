<template>
  <div class="content-bar">
    <div class="arc-content">
      <span name="arc-content">
        今年我们将从全世界招进20-30名天才少年，华为公司未来要拖着这个世界往前走。
      </span>
    </div>
    <div class="arc-images">
      <div name="arc-image">
        <img src="~assets/img/test/gril_01.jpg" alt="天才少年">
      </div>
    </div>
  </div>
</template>

<script scoped>
  export default {
    name: "ContentBar"
  }
</script>

<style>
  .content-bar {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .arc-content {
    max-height: 80px;
    line-height: 18px;
    font-size: 14px;
    font-family: AIGDT;

    word-break: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;

    background-color: #f5f5f5;
  }

  .arc-images {
    width: 120px;
    height: 120px;
  }

  .arc-images img {
    width: 120px;
    height: 120px;
    overflow:hidden;
    padding-top: 5px;
  }
</style>
