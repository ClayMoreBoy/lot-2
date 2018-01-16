<template>
	<div>
		<div class="l-list-row">
			<div class="lottery-item-wrap">
				<template v-for="d in data">
					<a href="javascript:void(0);" class="lottery-item">
						<div class="l-item-img" :class="{on:lotteryType[d.sName].value}" :noSubType="d.noSubType" :lt="d.sName" @click="toggleLotteryType">
							<div class="before"></div>
							<img :src="d.lotteryImg"/>
						</div>
						<div class="l_txt"><span class="nam">{{d.name}}</span><span class="l_t">{{d.lotteryType}}</span></div>
					</a>
				</template>
			</div>
			<div class="lottery-dropdown-wrap">
				<template v-for="d in data">
					<transition name="">
						<div class="lottery-dropdown-list" v-if="lotteryType[d.sName].value">
							<div class="lottery-detail-item-wrap">
								<template v-for="cz in d.lotterySubType">
									<div class="lottery-detail-item">
                    <router-link :to="cz.link">{{cz.name}}</router-link>
									</div>
								</template>
							</div>
						</div>
					</transition>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
export default{
  props: ['data'],
  data () {
    return {
      lotteryType: {
        ssc: {
          name: 'ssc',
          value: false
        },
        pk10: {
          name: 'pk10',
          value: false
        },
        k3: {
          name: 'k3',
          value: false
        },
        lhc: {
          name: 'lhc',
          value: false
        },
        pl3: {
          name: 'pl3',
          value: false
        },
        fc3d: {
          name: 'fc3d',
          value: false
        },
        kl8: {
          name: 'kl8',
          value: false
        },
        xy28: {
          name: 'xy28',
          value: false
        }
      }
    }
  },
  methods: {
    toggleLotteryType (e) {
      if ($(e.target).parent().attr('noSubType')) { // 无彩种时直接跳转
        console.log('nodata')
      } else { //  有彩种时的逻辑
        for (var item in this.lotteryType) {
          if (this.lotteryType[item].name === this.lotteryType[$(e.target).parent().attr('lt')].name) {
            this.lotteryType[$(e.target).parent().attr('lt')].value = !this.lotteryType[$(e.target).parent().attr('lt')].value
          } else {
            this.lotteryType[item].value = false
          }
        }
      }
      this.$emit('scrollInit') // 触发页面变动后初始化滚动插件
    }
  }
}
</script>

<style>
</style>
