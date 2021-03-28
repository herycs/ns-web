<template>
  <div class="friend-info">
    <logo-bar slot="left"/>
    <info-bar slot="center">
      <div slot="name">社交小能手</div>
      <div slot="desc">最佳战绩，日聊300人</div>
    </info-bar>
    <arrow-down slot="right"/>
  </div>
</template>

<script>
  import LogoBar from 'components/content/logoBar/LogoBar'
  import InfoBar from 'components/content/infoBar/InfoBar'
  import ArrowDown from 'components/content/arrowDown/ArrowDown'

  export default {
    name: "FriendInfo",
    components: {
      InfoBar, LogoBar, ArrowDown
    }
  }
</script>

<style scoped>
  .friend-info {
    display: flex;
    flex-direction: row;
    height: 45px;
    padding: 10px;
  }
</style>
