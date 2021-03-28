<template>
  <div class="friend-bar">
    <friend-item/>
    <friend-item/>
  </div>
</template>

<script>
  import FriendItem from './FriendItem'


  export default {
    name: "FriendBar",
    components: {
      FriendItem
    }
  }
</script>

<style scoped>
  .friend-bar {
    font-size: 16px;
  }
</style>
