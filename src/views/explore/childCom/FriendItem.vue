<template>
  <div class="friend-item">
    <friend-info-bar/>
    <friend-content class="friend-item-content">
      <div>
        高二
        <br>
        交由
      </div>
      <button>语音</button>
    </friend-content>
  </div>
</template>

<script>
  import FriendInfoBar from './FriendInfo'
  import FriendContent from './FriendContent'

  export default {
    name: "FriendItem",
    components: {
      FriendInfoBar, FriendContent
    }
  }
</script>

<style scoped>
  .friend-item {
    border-radius: 10px;
    margin: 10px;
    background-color: #fff;
  }

  .friend-item-content {
    margin: 10px;
    padding-bottom: 10px;
  }
</style>
