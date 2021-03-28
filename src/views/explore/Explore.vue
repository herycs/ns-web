<template>
  <div id="explore" class="explore-bar">
    <nav-bar class="explore-top">
      <div slot="center" class="explore-title">发现</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll">
      <div class="card-bar">
        <card-bar/>
      </div>
      <nav-bar>
        <div slot="left">扩列</div>
        <div slot="right">图片</div>
      </nav-bar>
      <friend-bar/>
      <friend-bar/>
      <friend-bar/>
      <friend-bar/>
      <friend-bar/>
      <friend-bar/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import NavBar from 'components/common/navbar/NavBar'
  import CardBar from './childCom/CardBar'
  import FriendBar from './childCom/FriendBar'

  export default {
    name: "Explore",
    components: {
      Scroll, CardBar, NavBar, FriendBar
    },
    methods: {
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      }
    }
  }
</script>

<style lang="scss" scoped>
  #explore {
    height: 100vh;
    position: relative;
    .explore-top {
      background-color: var(--color-tint);
      color: #fff;

      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9;
      .explore-title {
        font-weight: 520;
        font-size: 16px;
        color: white;
      }
    }
    .content {
      overflow: hidden;

      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;

    }
  }

</style>
