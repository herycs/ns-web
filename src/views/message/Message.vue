<template>
  <div id="message" class="msg-content">
    <div class="msg-nav">
      <nav-bar>
        <div slot="center"><span>消息</span></div>
        <div slot="right">
          <img class="content-opt-img" src="~assets/img/message/manage.svg" alt="管理">
        </div>
      </nav-bar>
    </div>
    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll">
      <div>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
        <message-item/>
      </div>
    </scroll>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import MessageItem from './childCom/MessageItem'

  export default {
    name: "Message",
    components: {
      NavBar, Scroll, MessageItem,
      Set
    },
    methods: {
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      }
    }
  }
</script>

<style lang="scss" scoped>
  #message {
    height: 100vh;
    position: relative;
    .msg-nav {
      background-color: var(--color-tint);
      color: #fff;

      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9;

      .content-opt-img {
        width: 20px;
        height: 20px;
        margin-top: 12px;
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
