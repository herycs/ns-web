<template>
  <div id="mine" class="mine-bar">
    <nav-bar>
      <div slot="right" class="mine-setting-box">
        <img class="mine-setting-img" src="~assets/img/mine/setting.svg" alt="设置">
      </div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll">
      <mine-info/>
      <navigation-bar/>
      <div class="group-info">
        <column-bar :title="g_title" :list="g_list"></column-bar>
      </div>
      <div class="re-command">
        <column-bar :title="r_title" :list="r_list"></column-bar>
      </div>
      <div class="more-service">
        <service-card :title="s_title" :list="s_list"></service-card>
      </div>
    </scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import MineInfo from './childCom/MineInfo'
  import NavigationBar from './childCom/NavigationBar'
  import GroupInfo from './childCom/GroupInfo'
  import ColumnBar from './childCom/ColumnBar'
  import ServiceCard from './childCom/ServiceCard'

  export default {
    name: "Mine",
    components: {
      Scroll, NavBar,
      MineInfo, NavigationBar, GroupInfo, ColumnBar, ServiceCard
    },
    data() {
      return {
        g_title: "公告模块",
        g_list: [
          {
            src: './img/mine/notice.svg',
            text: '公告'
          },
          {
            src: './img/mine/notice.svg',
            text: '公告'
          },
          {
            src: './img/mine/notice.svg',
            text: '公告'
          },
          {
            src: './img/mine/notice.svg',
            text: '公告'
          },
          {
            src: './img/mine/notice.svg',
            text: '公告'
          },
          {
            src: './img/mine/notice.svg',
            text: '公告'
          },
          {
            src: './img/mine/notice.svg',
            text: '公告'
          },
          {
            src: './img/mine/notice.svg',
            text: '公告'
          }],

        r_title: "推荐模块",
        r_list: [
          {
            src: './img/mine/notice.svg',
            text: '推荐'
          },
          {
            src: './img/mine/notice.svg',
            text: '推荐'
          },
          {
            src: './img/mine/notice.svg',
            text: '推荐'
          },
          {
            src: './img/mine/notice.svg',
            text: '推荐'
          },
          {
            src: './img/mine/notice.svg',
            text: '推荐'
          }],

        s_title: "更多服务",
        s_list: [
          {
            src: './img/mine/notice.svg',
            title: '夜间模式',
            text: '推荐',
            opt: '/img/common/arrow-right.svg'
          },
          {
            src: './img/mine/notice.svg',
            title: '夜间模式',
            text: '推荐',
            opt: '/img/common/arrow-right.svg'
          }, {
            src: './img/mine/notice.svg',
            title: '夜间模式',
            text: '推荐',
            opt: '/img/common/arrow-right.svg'
          }, {
            src: './img/mine/notice.svg',
            title: '夜间模式',
            text: '推荐',
            opt: '/img/common/arrow-right.svg'
          }
        ]
      }
    },
    methods: {
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      }
    }
  }
</script>

<style lang="scss" scoped>
  #mine {
    height: 100vh;
    position: relative;
    margin: 0px 8px;

    nav-bar {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9;
    }
    .mine-setting-box {
      .mine-setting-img {
        margin: 10px 5px 0px 20px;
        width: 23px;
        height: 23px;
        padding: 3px;
        background-color: #D3D3D3;
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
