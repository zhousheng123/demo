<template>
<div class="page">
  <div class="left">
    <main-menu></main-menu>
  </div>

  <div class="right">
<router-view></router-view>
  </div>
</div>
</template>

<script>
import mainMenu from './component/mainMenu'

export default {
  name: 'home',
  components: {
    mainMenu
  }
}
</script>

<style lang="scss" scoped>
  .page{
    display: flex;
  }
  .left{
    width: 210px;
    height: 100%;
    background:#87CEFA;
  }
  .right{

    width: calc(100% - 210px) ;
    height: 100%;
    background: #fff;
  }

</style>
