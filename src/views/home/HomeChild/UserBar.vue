<template>
  <div class="user-bar">
    <user-info-bar></user-info-bar>
    <content-bar></content-bar>
    <opration-bar></opration-bar>
  </div>
</template>

<script>

  import UserInfoBar from "@/views/home/HomeChild/UserInfoBar";
  import ContentBar from "./ContentBar"
  import OperationBar from './OperationBar'

  export default {
    name: "UserBar",
    components: {
      UserInfoBar,
      OperationBar,
      ContentBar
    }
  }
</script>

<style>

  .user-img {
    margin: 5px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: blue;
  }


</style>
