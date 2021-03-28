<template>
  <div class="card-item">
    <slot name="card-img"></slot>
    <slot name="card-title" class="title"></slot>
  </div>
</template>

<script>
  export default {
    name: "CardItem"
  }
</script>

<style scoped>
  .card-item {
    margin: 5px;
  }
</style>
