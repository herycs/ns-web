<template>
  <div class="msg-item">
    <logo-bar/>
    <info-bar class="info-bar">
      <div slot="name">久之1</div>
      <div slot="desc">我：[图片]</div>
    </info-bar>
    <div class="msg-time">06/05</div>
  </div>
</template>

<script>
  import LogoBar from 'components/content/logoBar/LogoBar'
  import InfoBar from 'components/content/infoBar/InfoBar'

  export default {
    name: "MessageItem",
    components: {
      LogoBar, InfoBar
    }
  }
</script>

<style scoped>
  .msg-item {
    display: flex;
    flex-direction: row;
    padding: 15px 3px 0px 3px;
  }

  .info-bar {
    padding: 0px 5px;
  }

  .msg-time {
    padding: 4px 2px 0px;
    font-size: 3px;
    color: rgb(151, 151, 151);
    text-align: center;
  }
</style>
