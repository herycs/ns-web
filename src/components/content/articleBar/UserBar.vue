<template>
  <div class="user-bar">
    <logo-bar/>
    <info-bar>
      <div slot="name">用户名</div>
      <div slot="desc">我是xx省xx市xx县</div>
    </info-bar>
    <div class="user-opt">
      <arrow-down></arrow-down>
    </div>
  </div>
</template>

<script>
  import LogoBar from 'components/content/logoBar/LogoBar'
  import InfoBar from 'components/content/infoBar/InfoBar'
  import ArrowDown from 'components/content/arrowDown/ArrowDown'

  export default {
    name: "UserBar",
    components: {
      ArrowDown, InfoBar, LogoBar
    }
  }
</script>

<style scoped>
  .user-bar {
    display: flex;
    flex-direction: row;
    height: 45px;
    padding: 10px;
  }
</style>
