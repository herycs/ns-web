<template>
  <div>
    <div class="title">
      <span>{{title}}</span>
    </div>
    <div class="content">
      <div class="content-item" v-for="(item,index) in list">
        <image-button>
          <img slot="img" :src="item.src" alt="">
          <span slot="title">{{item.text}}</span>
        </image-button>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageButton from './ImageButton'

  export default {
    name: "ColumnBar",
    components: {
      ImageButton
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      list: {
        type: Array,
        default: () => []
      }
    }
  }


</script>

<style lang="scss" scoped>
  .title {
    font-size: 14px;
    font-weight: 500;
    color: black;
  }
  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .content-item {
      margin: 10px;
    }
  }
</style>
