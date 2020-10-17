<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/explore">
      <img slot="item-icon" src="~assets/img/tabbar/explore.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/explore_active.svg" alt="">
      <div slot="item-text">探索</div>
    </tab-bar-item>
    <tab-bar-item path="/message">
      <img slot="item-icon" src="~assets/img/tabbar/message.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/message_active.svg" alt="">
      <div slot="item-text">消息</div>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img slot="item-icon" src="~assets/img/tabbar/mine.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/mine_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
