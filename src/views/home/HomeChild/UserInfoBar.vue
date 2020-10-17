<template>
  <div class="user-info-bar">
    <nav-bar>
      <div slot="left" class="user-logo">
        <img class="user-img">图片
      </div>
      <div slot="center" class="user-info">
        <span class="user-name">姓名</span>
        <span class="user-desc">描述</span>
      </div>
      <div slot="right" class="opt">
        <slot name="opt">操作</slot>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "UserInfoBar",
    components: {
      NavBar
    }
  }
</script>

<style>

  .user-logo {
    height: 63px;
    width: 63px;
  }
  .user-img {
    margin: 3px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    font-size: 15px;
    background-color: blue;
  }

  .user-info {
    height: 40px;
  }

</style>
