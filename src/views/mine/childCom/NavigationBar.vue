<template>
    <div class="nav-bar">
      <image-button>
        <img src="~assets/img/mine/space.svg" alt="空间" slot="img">
        <span slot="title">空间</span>
      </image-button>
      <image-button>
        <img src="~assets/img/mine/post.svg" alt="帖子" slot="img">
        <span slot="title">帖子</span>
      </image-button>
      <image-button>
        <img src="~assets/img/mine/comment.svg" alt="评论" slot="img">
        <span slot="title">评论</span>
      </image-button>
      <image-button>
        <img src="~assets/img/mine/comment.svg" alt="收藏" slot="img">
        <span slot="title">收藏</span>
      </image-button>
      <image-button>
        <img src="~assets/img/mine/trumbed.svg" alt="赞过" slot="img">
        <span slot="title">赞过</span>
      </image-button>
    </div>
</template>

<script>
  import ImageButton from './ImageButton'
    export default {
        name: "NavigationBar",
      components: {
          ImageButton
      }
    }
</script>

<style lang="scss" scoped>
  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 10px;
    margin: 10px 5px;
  }
</style>
