<template>
  <div>
    <scroll class="content">
      <span>消息</span>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "Message",
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
