<template>
  <div id="detail">
    <detail-nav-bar />
    <!-- <h1>id为： {{iid}}  </h1> -->
    <van-popup v-model="show">
      评论区内容
    </van-popup>
  </div>
</template>

<script>
import DetailNavBar from "./childCom/DetailNavBar";
import { getDetail } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null,
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },
  mounted() {
    // console.log(this.$route.params);
    this.iid = this.$route.params.id;
    // 1.获取传入的id
    // 2.发起网络请求
    // getDetail(this.iid).then(res => {
    //   console.log(res);
    // })
    this.showPopup();
  }
};
</script>

<style></style>
