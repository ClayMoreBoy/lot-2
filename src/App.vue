<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
<style lang="scss">
  @import './themes/base.scss';
  @import './themes/common.scss';
</style>
