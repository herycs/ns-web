<template>
  <div>
    <scroll class="content">
      <span>我的</span>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "Mine",
    components: {
      Scroll
    }
  }
</script>

<style scoped>
  .content {
    height: 300px;
    background-color: red;
    overflow: hidden;
  }
</style>
