<template>
    <div>
      <div class="top">
        <nav-bar>
          <div slot="left"><back/></div>
          <div slot="center">
            <tab-control class="tab-control"
                         :titles="['推荐', '娱乐', '热点']" @tabClick="tabClick"></tab-control>
          </div>
          <div slot="right">访客</div>
        </nav-bar>
      </div>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Back from 'components/content/back/Back'
  import TabControl from 'components/content/tabControl/TabControl'

    export default {
        name: "Space",
      components: {
          NavBar, Back, TabControl
      },
      methods: {
        tabClick(index) {
          switch (index) {
            case 0:
              this.currentType = 'pop'
              break
            case 1:
              this.currentType = 'new'
              break
            case 2:
              this.currentType = 'sell'
              break
          }
        }
      }
    }
</script>

<style scoped>

</style>
