<template>
  <div class="user-info-bar">
    <div class="name">
      <slot name="name"></slot>
    </div>
    <div class="desc">
      <slot name="desc"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfoBar"
  }
</script>

<style scoped>

  .user-info-bar {
    display: flex;
    flex-direction: column;
    height: 45px;
    justify-content: space-around;
    flex: 1;
  }

  .name {
    font-weight: 400;
    font-size: 13px;
  }

  .desc {
    color: rgb(151, 151, 151);
    font-size: 10px;
    font-weight: 400;
  }
</style>
