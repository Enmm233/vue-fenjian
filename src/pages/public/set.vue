<template>
	<article class="set_index" v-if="show == 'set'">
		<div class="set_index_box">
			<div class="fj_set_middle">
				<div class="fj_set_middle_txt">
					常见问题
				</div>
			</div>
			<div class="fj_set_right">
				<div class="fj_set_right_close">
					<div class="close">
						<img @click="back"src="../../../static/images/fj_close.png" />
					</div>
				</div>
				<div class="fj_set_right_txt">
					<div class="fj_set_right_txt_list">
						<div class="fj_set_right_txt_item">
							<div class="txt_item_tittle">
								1. 分拣的时间是按什么时间？
							</div>
							<div class="txt_item_content">
								<div class="txt_item_content_left">
									<span>
									答：
								</span>
								</div>
								<div class="txt_item_content_right">
									这个时间也是跟系统一样，按照配送时间进行检索。
								</div>
							</div>
						</div>
						<div class="fj_set_right_txt_item">
							<div class="txt_item_tittle">
								2.分拣可以按照哪几个模式？
							</div>
							<div class="txt_item_content">
								<div class="txt_item_content_left">
									<span>
									答：
								</span>
								</div>
								<div class="txt_item_content_right">
									商品分类,单位名称，是否称重（标品和非标品），配送线路，仓库。
								</div>
							</div>
						</div>
						<div class="fj_set_right_txt_item">
							<div class="txt_item_tittle">
								3.触摸屏分拣端账号怎么找不到？
							</div>
							<div class="txt_item_content">
								<div class="txt_item_content_left">
									<span>
									答：
								</span>
								</div>
								<div class="txt_item_content_right">
									在系统后台，全局管理—管理员（把鼠标放在分拣员的“用户名”上）会显示ID这个就是账号。
								</div>
							</div>
						</div>
						<div class="fj_set_right_txt_item">
							<div class="txt_item_tittle">
								4.触摸屏分拣端的密码怎么设置方便？
							</div>
							<div class="txt_item_content">
								<div class="txt_item_content_left">
									<span>
									答：
								</span>
								</div>
								<div class="txt_item_content_right">
									触摸屏分拣端的密码最好设置为纯数字，在触摸屏上可能有些没插键盘，使用触屏输入数字方便。
								</div>
							</div>
						</div>
						<div class="fj_set_right_txt_item">
							<div class="txt_item_tittle">
								5.分拣完成的商品可以重新分拣吗？
							</div>
							<div class="txt_item_content">
								<div class="txt_item_content_left">
									<span>
									答：
								</span>
								</div>
								<div class="txt_item_content_right">
									可以的，选择已分拣，点到要修改分拣数量的商品，在原来的基础上再去填入保存即可。
								</div>
							</div>
						</div>
						<div class="fj_set_right_txt_item">
							<div class="txt_item_tittle">
								6.触摸屏分拣端的密码忘记了，去哪里修改？
							</div>
							<div class="txt_item_content">
								<div class="txt_item_content_left">
									<span>
									答：
								</span>
								</div>
								<div class="txt_item_content_right">
									需要进入到后台系统里面去找到分拣员的账号，修改密码即可。
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
	import APIUrl from '../../../config/apiurl'
	import * as types from '../../../config/types'

	export default {
		props: ["show"],
//		components: {
//			'quit': () =>
//				import('../public/quit.vue'), // 退出登录
//			'searching': () =>
//				import('../public/searching.vue'), // 检索
//			//  'judge':()=>import('../public/judge.vue'),       // 判断加背景颜色
//		},
		data() {
			return {
//				exit: false,
//				img: '../../../static/img/exit_b.png',
//				searching: false, //是否显示检索
//				searchImg: '../../../static/img/search_b.png', //退出图 标
			}
		},
		methods: {
//			drop(data) {
//				this.dropOut()
//			},
//			search(data) { //接受检索传来的数据
//				this.swarchOut()
//			},
//			swarchOut() {
//				if(this.searching == false) {
//					this.searchImg = '../../../static/img/search_f.png'
//					this.searching = true;
//				} else {
//					this.searchImg = '../../../static/img/search_b.png'
//					this.searching = false;
//				}
//			},
//			dropOut() {
//				if(this.exit == false) {
//					this.img = '../../../static/img/exit_w.png'
//					this.exit = true;
//				} else {
//					this.img = '../../../static/img/exit_b.png'
//					this.exit = false;
//				}
//			},
			back() {
				this.$emit("back", this.show)
//				this.$router.go(-1); //返回上一层
			},
		},
		watch: {

		},
		mounted() {},
		created() {

		}
	};
</script>