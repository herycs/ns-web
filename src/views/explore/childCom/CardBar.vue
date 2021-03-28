<template>
  <div class="card-bar">
    <card-item class="card-item">
      <img class="card-img-sty" slot="card-img" src="~assets/img/test/plane.jpg" alt="纸飞机">
      <span class="card-title-sty" slot="card-title">纸飞机</span>
    </card-item>
    <card-item class="card-item">
      <img class="card-img-sty" slot="card-img" src="~assets/img/test/plane.jpg" alt="纸飞机">
      <span class="card-title-sty" slot="card-title">动态广场</span>
    </card-item>
    <card-item class="card-item">
      <img class="card-img-sty" slot="card-img" src="~assets/img/test/plane.jpg" alt="纸飞机">
      <span class="card-title-sty" slot="card-title">找资源</span>
    </card-item>
  </div>
</template>

<script>
  import CardItem from 'components/content/cardItem/CardItem'

  export default {
    name: "CardBar",
    components: {
      CardItem
    }
  }
</script>

<style lang="scss" scoped>
  .card-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;

    .card-item {
      position: relative;
      display: flex;
      height: 120px;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }

    .card-img-sty {
      width: 90px;
      height: 120px;
      border-radius: 10px;
    }

    .card-title-sty {
      position: absolute;
      bottom: 10px;
      font-weight: bold;
      font-size: 16px;
      color: white;
    }
  }
</style>
