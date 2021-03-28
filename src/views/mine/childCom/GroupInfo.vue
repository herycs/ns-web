<template>
    <div class="group-info">
      <image-button>
        <img slot="img" src="~assets/img/mine/notice.svg" alt="公告">
        <span slot="title">公告</span>
      </image-button>
    </div>
</template>

<script>
  import ImageButton from './ImageButton'
    export default {
        name: "GroupInfo",
      components: {
          ImageButton
      }
    }
</script>

<style lang="scss" scoped>
  .group-info {

  }
</style>
