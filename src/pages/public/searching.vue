<template>
	<article>
		<div class="fj_searching" id="fj_scroll" v-if="show == 'searching'">
			<div class="fj_searching_box">
				<div class="fj_searching_left">
					<div class="fj_searching_left_top">
						<div class="fj_searching_left_top_item" :class="{commodity_orange:gledger_num == 1}" @click="is_show('1')">
							<div>商品分类</div>
							<div class="fj_searching_commodity_list_name">
								<span v-if="goodsCategory_name">{{goodsCategory_name}}</span>
								<span v-if="goodsCategory_item_name">- {{goodsCategory_item_name}}</span>
								<span v-if="goodsCategory1_name">- {{goodsCategory1_name}}</span>
							</div>
						</div>
						<div class="fj_searching_left_top_item" :class="{commodity_orange:gledger_num == 2}" @click="is_show('2')">
							<div>单位名称</div>
							<div class="fj_searching_commodity_list_name">
								<span v-if="company_name">{{company_name}}</span>
								<span v-if="company1_name">- {{company1_name}}</span>
							</div>
						</div>
						<div class="fj_searching_left_top_item" :class="{commodity_orange:gledger_num == 3}" @click="is_show('3')">
							<div>是否称重</div>
							<div class="fj_searching_commodity_list_name">
								<span v-if="weigh_name">{{weigh_name}}</span>
							</div>
						</div>
						<div class="fj_searching_left_top_item" :class="{commodity_orange:gledger_num == 4}" @click="is_show('4')">
							<div>配送路线</div>
							<div class="fj_searching_commodity_list_name">
								<span v-if="line_name">{{line_name}}</span>
							</div>
						</div>
						<div v-if="gledger.storeHouse != ''" class="fj_searching_left_top_item" :class="{commodity_orange:gledger_num == 5}" @click="is_show('5')">
							<div>仓库列表</div>
							<div class="fj_searching_commodity_list_name">
								<span v-if="storeHouse_name">{{storeHouse_name}}</span>
							</div>
						</div>
					</div>
					<div class="fj_searching_left_btn_box">

						<div class="fj_searching_left_btn" @click="reset">重置</div>
						<div class="fj_searching_left_btn green" @click="confirm">确定</div>
					</div>
				</div>
				<!--商品分类-->
				<div class="fj_searching_commodity_box" v-if="gledger_num == 1">
					<div class="fj_searching_commodity_left">
						<div class="fj_seatch_jt_box" style="box-shadow: 0px 2px 9px 1px rgba(3,0,1,0.10);" @click="scroll('up')">
							<div class="fj_seatch_jt">
								<img src="../../../static/images/fj_jt2.png" />
							</div>
						</div>

						<div class="fj_searching_commodity_left_box">
							<div class="fj_searching_commodity_list" :class="{orange:1 == goodsCategory_num}" @click="goodsCategory_tab(1)">
								所有商品
							</div>
							<div v-for="item in gledger.first" class="fj_searching_commodity_list" :class="{orange:item.id == goodsCategory_num}" @click="goodsCategory_tab(item)">
								{{item.name}}
								<div class="fj_searching_item_list" v-if="item.id == goodsCategory_num">
									<div v-for="list in item.self_next" class="fj_searching_item_little"  @click.stop="goodsCategory_item_tab(list)">
										<span :class="{item_orange:list.id == goodsCategory_item_num}">
											{{list.name}}
										</span>
										
									</div>
								</div>
							</div>
						</div>

						<div class="fj_seatch_jt_box" style="box-shadow: 0px -2px 9px 1px rgba(3,0,1,0.10);" @click="scroll('down')">
							<div class="fj_seatch_jt seatch_img_down">
								<img src="../../../static/images/fj_jt2.png" />
							</div>
						</div>
					</div>
					<div class="fj_searching_commodity_right">
						<div class="fj_searching_commodity_item_box">
							<div v-for="item in goodsCategory" class="fj_searching_commodity_item" :class="{commodity_orange:item.id == goodsCategory1_num}" @click="goodsCategory1_tab(item)">
								{{item.title}}
							</div>
						</div>
						<div class="no_more">
							<div class="xian"></div>
							<div class="no_more_txt">没有更多了</div>
							<div class="xian"></div>
						</div>
					</div>
				</div>

				<!--单位名称-->
				<div class="fj_searching_commodity_box" v-if="gledger_num == 2">
					
					
					
					<div class="fj_searching_commodity_left">
						<div class="fj_seatch_jt_box" style="box-shadow: 0px 2px 9px 1px rgba(3,0,1,0.10);" @click="scroll('up')">
							<div class="fj_seatch_jt">
								<img src="../../../static/images/fj_jt2.png" />
							</div>
						</div>

						<div class="fj_searching_commodity_left_box">
							<div class="fj_searching_commodity_list" :class="{orange:1 == company_num}" @click="company_tab(1)">
								所有单位
							</div>
							<div v-for="item in gledger.memberGroup" class="fj_searching_commodity_list" :class="{orange:item.id == company_num}" @click="company_tab(item)">
							{{item.name}}
						</div>
						</div>

						<div class="fj_seatch_jt_box" style="box-shadow: 0px -2px 9px 1px rgba(3,0,1,0.10);" @click="scroll('down')">
							<div class="fj_seatch_jt seatch_img_down">
								<img src="../../../static/images/fj_jt2.png" />
							</div>
						</div>
					</div>
					
					
<!--					
					<div class="fj_searching_commodity_left">
						
					</div>
					-->
					
					<div class="fj_searching_commodity_right">
						<div class="fj_searching_commodity_item_box">
							<div v-for="item in company" class="fj_searching_commodity_item" :class="{commodity_orange:item.id == company1_num}" @click="company1_tab(item)">
								{{item.name}}
							</div>
						</div>
						<div class="no_more">
							<div class="xian"></div>
							<div class="no_more_txt">没有更多了</div>
							<div class="xian"></div>
						</div>
					</div>
				</div>

				<!--是否称重-->
				<div class="fj_searching_weigh_box" v-if="gledger_num == 3">
					<div class="fj_searching_weigh">
						<div v-for="item in weigh" class="fj_searching_weigh_item" :class="{commodity_orange:item.id == weigh_num}" @click="weigh_tab(item)">
							{{item.name}}
						</div>
					</div>
				</div>

				<!--配送路线-->
				<div class="fj_searching_unit_box" v-if="gledger_num == 4">
					<div class="fj_searching_unit">
						<div v-for="item in gledger.line" class="fj_searching_unit_item" :class="{commodity_orange:item.id == line_num}" @click="line_tab(item)">
							{{item.name}}
						</div>
					</div>
				</div>

				<!--仓库-->
				<div class="fj_searching_unit_box" v-if="gledger_num == 5">
					<div class="fj_searching_unit">
						<div v-for="item in gledger.storeHouse" class="fj_searching_unit_item" :class="{commodity_orange:item.id == storeHouse_num}" @click="storeHouse_tab(item)">
							{{item.name}}
						</div>

					</div>
				</div>

				<div class="fj_searching_close">
					<img @click="dropOut" src="../../../static/images/fj_close.png" />
					<!--<div @click="scroll1('up')">上</div>-->
					<!--<div @click="scroll1('down')">下</div>-->
				</div>
			</div>

			<!--<div @click="dropOut">取消</div>-->
			<!--<div @click="haha">取消</div>-->
			
			<!--页面滚动-->
			<div class="fj_jt_shearch_box">
				<div class="fj_jt" @click="scroll1('up')">
					<img src="../../../static/images/fj_jt2.png" />
				</div>
				<div class="fj_jt img_down" @click="scroll1('down')">
					<img src="../../../static/images/fj_jt2.png" />
				</div>
			</div>
			
			
		</div>

		<div class="loding_box" v-if="isLoding == true">
			<div class="loding">
				<mt-spinner type="snake"></mt-spinner>
				正在加载中.....
			</div>
		</div>

	</article>
</template>

<script>
	import APIUrl from '../../../config/apiurl'
	import * as types from '../../../config/types'
	export default {
		props: ["show", "sendTime"],
		data() {
			return {
				isLoding: false, //loding层

				gledger: '',
				gledger_num: 1, //总分类tab

				goodsCategory: [], //商品分类列表
				goodsCategory_name: '', //商品分类  一级分类选项
				goodsCategory_item_name: '', //商品分类  一级分类选项
				goodsCategory1_name: '', //二级分类选项
				goodsCategory_num: '', //一级分类ID
				goodsCategory_item_num: '', //一级分类ID
				goodsCategory1_num: '', //二级分类ID

				company: [], //单位名称一级分类列表
				company_name: '', //单位名称 一级分类选项
				company1_name: '', //二级分类选项
				company_num: '', //单位名称 一级分类选项ID
				company1_num: '', //二级分类ID

				weigh: [{
					id: 1,
					name: "否"
				}, { 
					id: 2,
					name: "是"
				}], //是否称重列表
				weigh_name: '', //是否称重选项
				weigh_num: '', //是否称重ID

				line_name: '', //配送路线
				line_num: '', //配送路线ID

				storeHouse_name: '', //仓库列表
				storeHouse_num: '', //仓库列表ID

				scroll_num: 0,
				scroll_num1: 0,

			}
		},
		methods: {
			scroll1(data) {
				var Dom = $('.fj_searching');
				if(data == 'up') {
					if(Dom.scrollTop() <= 0) {
						this.$Toast({
							message: '滚动条已经到达顶部',
							duration: 1000
						});
					} else {
						this.scroll_num1 -= 200
						Dom.scrollTop(this.scroll_num1);
						Dom.animate({
							scrollTop: this.scroll_num1
						}, 200);
					}
				} else if(data == 'down') {
					
					if(Dom[0].scrollHeight-Dom.scrollTop()===Dom[0].clientHeight) {
						this.$Toast({
							message: '滚动条已经到达底部',
							duration: 1000
						});
					} else {
						this.scroll_num1 += 200
						Dom.scrollTop(this.scroll_num1);
						Dom.animate({
							scrollTop: this.scroll_num1
						}, 200);
					}

				}
			},
			scroll(data) {
				var Dom = $('.fj_searching_commodity_left_box');
				if(data == 'up') {
					if(Dom.scrollTop() <= 0) {
						this.$Toast({
							message: '滚动条已经到达顶部',
							duration: 1000
						});
					} else {
						this.scroll_num -= 200
						Dom.scrollTop(this.scroll_num);
						Dom.animate({
							scrollTop: this.scroll_num
						}, 200);
					}
				} else if(data == 'down') {
					
					if(Dom[0].scrollHeight-Dom.scrollTop()===Dom[0].clientHeight) {
						this.$Toast({
							message: '滚动条已经到达底部',
							duration: 1000
						});
					} else {
						this.scroll_num += 200
						Dom.scrollTop(this.scroll_num);
						Dom.animate({
							scrollTop: this.scroll_num
						}, 200);
					}

				}
			},
			touchCateList() { //搜索条件列表
				var obj = {
					appid: APIUrl.appid,
					timeStamp: APIUrl.timeStamp,
				};
				let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret);
				this.$get(APIUrl.root + APIUrl.touchCate, {
						appid: APIUrl.appid,
						timeStamp: APIUrl.timeStamp,
						sign: sign
					})
					.then((response) => {
						judgement(this, response.code, response.msg, types)
						if(response.code == 200) {
							this.gledger = response.data;
							if(this.gledger.storeHouse != ''){
								this.storeHouse_num = this.gledger.storeHouse[0].id;
								this.storeHouse_name = this.gledger.storeHouse[0].name;
							}
						}
					});
			},
			memberList() { //用户列表
				this.isLoding = true;
				this.company = [];
				var num = '';
//				console.log(this.company_num)
				if(this.company_num != 1){
					num = this.company_num
				}
				var obj = {
					appid: APIUrl.appid,
					timeStamp: APIUrl.timeStamp,
				};
				let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret);
				this.$post(APIUrl.root + APIUrl.memberList, {
						appid: APIUrl.appid,
						timeStamp: APIUrl.timeStamp,
						sendTime: this.sendTime,
						groupId: num,
						houseId: this.storeHouse_num,
						sign: sign
					})
					.then((response) => {
						this.isLoding = false;
						judgement(this, response.code, response.msg, types)
						if(response.code == 200) {
							this.company = response.data;
						}
					});
			},
			secondCateList(id) { //商品列表
				this.isLoding = true;
				var obj = {
					appid: APIUrl.appid,
					timeStamp: APIUrl.timeStamp
				};
				let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret);
				this.$get(APIUrl.root + APIUrl.itemByCateId, {
						appid: APIUrl.appid,
						timeStamp: APIUrl.timeStamp,
						sendTime: this.sendTime,
						id: id,
						sign: sign
					})
					.then((response) => {
						this.isLoding = false;
						judgement(this, response.code, response.msg, types)
						if(response.code == 200) {
							this.goodsCategory = response.data;
						}
					});
			},
			is_show(data) {
				this.gledger_num = data;
			},

			goodsCategory_tab(data) { //商品分类
				this.goodsCategory_item_num = '';
				this.goodsCategory_item_name = '';
				this.goodsCategory1_name = '';
				this.goodsCategory1_num = '';
				if(data.self_next == ''){
					this.secondCateList(data.id);
				}
				if(data == 1){
					this.goodsCategory_num = 1;
					this.goodsCategory_name = "所有商品"
					this.secondCateList();
					return;
				}
				this.goodsCategory_num = data.id;
				this.goodsCategory_name = data.name
				


			},
			goodsCategory_item_tab(data) { //商品分类
				this.goodsCategory_item_num = data.id;
				this.goodsCategory_item_name = data.name;
				this.goodsCategory1_name = '';
				this.goodsCategory1_num = '';
//				console.log(this.goodsCategory_item_num)
				this.secondCateList(data.id);

			},
			goodsCategory1_tab(data) { //商品分类
				this.goodsCategory1_num = data.id;
				this.goodsCategory1_name = data.title;

			},
			
			company_tab(data) { //单位名称
				this.company1_name = '';
				this.company1_num = '';
				if(data == 1){
					this.company_num = 1;
				    this.company_name = "所有单位";
				    this.memberList();
					return;
				}
				this.company_num = data.id;
				this.company_name = data.name;
				this.memberList();
				
			},

			company1_tab(data) { //单位名称
				this.company1_num = data.id;
				this.company1_name = data.name;

			},

			weigh_tab(data) { //是否称重
				this.weigh_num = data.id;
				this.weigh_name = data.name;

			},

			line_tab(data) { //配送路线
				this.line_num = data.id;
				this.line_name = data.name;

			},

			storeHouse_tab(data) { //仓库路线
				this.storeHouse_num = data.id;
				this.storeHouse_name = data.name;

			},

			dropOut() { //关闭
				this.$emit("search", this.show)
				//				this.$router.push("/index");
			},
			reset() { //重置
				this.goodsCategory_name = ''; //商品分类  一级分类选项
				this.goodsCategory1_name = ''; //二级分类选项
				this.goodsCategory_num = ''; //一级分类ID
				this.goodsCategory1_num = ''; //二级分类ID
				this.goodsCategory_item_num = '';
				this.goodsCategory_item_name = '';
				this.company_name = ''; //单位名称 一级分类选项
				this.company1_name = ''; //二级分类选项
				this.company_num = ''; //一级分类ID
				this.company1_num = ''; //二级分类ID
				this.weigh_name = ''; //是否称重选项
				this.weigh_num = ''; //是否称重ID
				this.line_name = ''; //配送路线
				this.line_num = ''; //配送路线ID
				this.storeHouse_name = ''; //仓库列表
				this.storeHouse_num = ''; //仓库列表ID
			},
			confirm() {
				if(this.goodsCategory_num == 1){
					this.goodsCategory_num = ''
				}
				if(this.company_num == 1){
					this.company_num = ''
				}
				var obj = {
					firstId: this.goodsCategory_num, //一级分类ID
					secondId: this.goodsCategory_item_num, //二级分类ID
					itemId: this.goodsCategory1_num, //二级分类ID
					groupId: this.company_num, //单位分类ID
					userId: this.company1_num, //单位名称ID
					isWeight: this.weigh_num, //是否称重ID
					lineId: this.line_num, //配送路线ID
					houseId: this.storeHouse_num, //仓库ID
				}
//				if(obj.firstId == "" && obj.secondId == "" && obj.userId == "" && obj.isWeight == "" && obj.lineId == "" && obj.houseId == "") {
//					this.$Toast({
//						message: '请选择检索关键词',
//						duration: 1000
//					});
//				} else {
					this.dropOut()
					this.$emit("confirm", obj)
//				}
				//				if(this.$route.name == "index"){
				//				}else if(this.$route.name == "set"){
				//					this.$router.push({path: '/index', query:obj});
				//				}

			}
		},
		mounted() {
		},
		created() {
			this.touchCateList();
			//			console.log(this.$route.query)
		}
	}
</script>