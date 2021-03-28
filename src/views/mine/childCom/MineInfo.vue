<template>
  <div class="mine-info">
    <logo-bar class="logo-img"></logo-bar>
    <div class="user-desc">
      <div class="name">幻影15508</div>
      <div class="desc">
        <div>174<span>获赞</span></div>
        <div>1<span>关注</span></div>
        <div>1<span>粉丝</span></div>
      </div>
      <div class="split-ine"></div>
    </div>
    <div class="idiograph">
      <span>这个家伙很懒，什么也没写~</span>
      <img src="~assets/img/mine/editor.svg" alt="编辑">
    </div>

  </div>
</template>

<script>
  import LogoBar from 'components/content/logoBar/LogoBar'
  import InfoBar from 'components/content/infoBar/InfoBar'

  export default {
    name: "MineInfo",
    components: {LogoBar, InfoBar}
  }
</script>

<style lang="scss" scoped>
  .mine-info {
    padding-top: 20px;
    .logo-img {
      width: 60px;
      height: 60px;
      border-radius: 40px;
    }

    .user-desc {
      .name {
        font-size: 18px;
        margin: 3px 0px;
      }
      .desc {
        display: flex;
        flex-direction: row;
        font-size: 13px;
        justify-content: flex-start;
        margin: 5px 0px;
        div {
          margin-right: 10px;
          font-size: 16px;
          span {
            font-size: 10px;
          }
        }
      }
      .split-ine {
        height: 0.5px;
        background-color: red;
        border-color: red;
      }
    }
    .idiograph {
      display: flex;
      justify-items: baseline;
      padding-top: 6px;
      font-weight: 300;
      font-size: 8px;

      img {
        margin: 0px 8px;
        width: 13px;
        height: 13px;
      }
    }
  }


</style>
