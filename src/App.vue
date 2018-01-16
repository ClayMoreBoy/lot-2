<template>
  <div id="app">
		<transition name="slide-left">
		  		<router-view></router-view>  	
		</transition>
  </div>	
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './themes/base.scss';
@import './themes/common.scss';
</style>
