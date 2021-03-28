<template>
    <div class="logo-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "LogoBar"
    }
</script>

<style scoped>
  .logo-bar {
    margin: 3px;
    height: 35px;
    width: 35px;
    border-radius: 25px;
    font-size: 15px;
    background-color: blue;
  }
</style>
