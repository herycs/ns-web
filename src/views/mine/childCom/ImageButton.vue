<template>
  <div class="image-button">
    <slot name="img"></slot>
    <slot name="title"></slot>
  </div>
</template>

<script>
  export default {
    name: "ImageButton"
  }
</script>

<style lang="scss" scoped>
  .image-button {
    display: flex;
    flex-direction: column;
    margin: 5px;

    img {
      width: 23px;
      height: 23px;
      margin-bottom: 8px;
    }

    span {
      font-size: 12px;
    }

  }
</style>
