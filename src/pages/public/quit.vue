<template>
	<article>
		<div class="fj_quit" v-if="msg == true">
			<div class="fj_quit_btn btn_right" @click="aa">确定</div>
			<div class="fj_quit_box">
				<div class="fj_quit_item">
					<div class="fj_quit_item_little">
						<div class="fj_quit_item_little_txt">确定退出该账号？</div>
						<div class="fj_quit_item_id">{{id}}</div>
					</div>
					<div class="fj_quit_item_btn">
						<div class="fj_quit_btn btn_left" @click="dropOut">取消</div>
						<div class="fj_quit_btn btn_right" @click="logout">确定</div>

					</div>
				</div>
			</div>
			<!--<div class="loding_box" v-if="isLoding == true">
				<div class="loding">
					<mt-spinner type="snake"></mt-spinner>
					正在加载中.....
				</div>
			</div>-->
		</div>
	</article>
</template>

<script>
	import APIUrl from '../../../config/apiurl'
	import * as types from '../../../config/types'
	export default {
		props: ["msg"],
		data() {
			return {
				id: '',
				//				isLoding:false
			}
		},
		methods: {
			dropOut() {
				this.$emit("drop", this.msg)
			},
			logout() {
				//				this.isLoding = true;
				var obj = {
					appid: APIUrl.appid,
					timeStamp: APIUrl.timeStamp,
				};
				let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret);
				this.$get(APIUrl.root + APIUrl.logout, {
						appid: APIUrl.appid,
						timeStamp: APIUrl.timeStamp,
						sign: sign,
					})
					.then((response) => {
						//						this.isLoding = false;
						judgement(this, response.code, response.msg, types)
						if(response.code == 200) {
              localStorage.setItem('auto_print','')
							this.$store.commit(types.LOGOUT)
							this.$router.push("/");
						}
					});
			}
		},
		mounted() {

		},
		created() {
			if(localStorage.getItem('sort_token')) { // 判断是否登录
				//				console.log(localStorage.getItem("token"))
				var result = JSON.parse(localStorage.getItem('sort_token'));
				var data = new Object();
				data.sort_token = result.sort_token;
				var str = JSON.stringify(data);
				this.$store.commit(types.LOGIN, str)
			}

			var obj = {
				appid: APIUrl.appid,
				timeStamp: APIUrl.timeStamp,
			};
			let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret);
			this.$get(APIUrl.root + APIUrl.memberInfo, {
					appid: APIUrl.appid,
					timeStamp: APIUrl.timeStamp,
					sign: sign,
				})
				.then((response) => {
					//						judgement(this, response.code, response.msg, types)
					if(response.code == 200) {
						this.id = response.data.id
					}
				});

		}
	}
</script>
