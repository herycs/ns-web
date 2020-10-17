<template>
  <div class="content-bar">
    <div class="arc-content">
      <slot name="arc-content"></slot>
    </div>
    <div class="arc-images">
      <slot name="arc-image"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContentBar"
  }
</script>

<style>


</style>
