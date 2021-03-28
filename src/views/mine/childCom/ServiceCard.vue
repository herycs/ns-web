<template>
    <div>
      <div class="service-title">
        <span>{{title}}</span>
      </div>
      <div class="cards">
          <div class="card-item" v-for="item in list">
            <img class="card-img" :src="item.src">
            <div class="card-content">
              <span class="card-title">{{item.title}}</span>
              <span class="card-text">{{item.text}}</span>
            </div>
            <img class="card-opt" :src="item.opt">
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceCard",
      props: {
          title: {
            type: String,
            default: ''
          },
        list: {
            type: Array,
          default: []
        }
      }
    }
</script>

<style lang="scss" scoped>
  .service-title {
    font-size: 14px;
    color: black;
    padding: 5px 0px;
  }
  .cards {
    display: flex;
    flex-direction: column;

    .card-item {
      display: flex;
      flex-direction: row;
      margin-top: 10px;

      .card-img {
        width: 18px;
        height: 18px;
      }
      .card-content {
        display: flex;
        justify-content: space-between;
        flex: 1;
        .card-title {
          margin: 0px 10px;
          font-size: 14px;
        }
        .card-text {
          font-size: 10px;
        }
      }

      .card-opt {
        width: 18px;
        height: 18px;
        margin: 0px 10px;
      }
    }
  }
</style>
