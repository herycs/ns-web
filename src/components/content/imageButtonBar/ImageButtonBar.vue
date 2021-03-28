<template>
  <div class="image-button-bar">
    <slot class="btn-img" name="image"></slot>
    <slot class="btn-content" name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: "ImageButtonBar"
  }
</script>

<style scoped>
  .image-button-bar {
    display: flex;
    flex-direction: row;
    height: 21px;
  }

  .btn-img {
    width: 15px;
    height: 15px;
  }

  .btn-content {
    font-size: 15px;
  }
</style>
