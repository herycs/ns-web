<template>
    <div>
      <div class="char-top">
        <nav-bar>
          <div slot="left"></div>
          <div slot="center">{{NickName}}</div>
        </nav-bar>
      </div>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: "ChatBar",
      components: {
          NavBar
      }
    }
</script>

<style scoped>

</style>
