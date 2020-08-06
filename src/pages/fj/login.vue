<template>
  <article class="fj_login">
    <div class="fj_login_box">
      <div class="login_box">
        <div class="login_tittle">
          菜东家触屏分拣系统
        </div>
        <div class="login_item">
          <div class="item_top">ID登录</div>
          <div class="item_body">
            <div class="item_body_left">
              <div class="inp_box">
                <img src="../../../static/images/fj_user.png" alt="" />
                <input ref='id' type="num" name="id" v-model="id" @click="change(1)" />
              </div>
              <div class="inp_box">
                <img src="../../../static/images/fj_passworld.png" alt="" />
                <input type="password" name="id" v-model="password" @click="change(2)" />
              </div>
              <div class="item_body_left_btn">
                <input type="button" name="id" value="登录" @click="submit" />
              </div>
            </div>
            <div class="item_body_right">
              <div class="item_body_key">
                <div class="body_key_btn" @click="key_num(7)">7</div>
                <div class="body_key_btn" @click="key_num(8)">8</div>
                <div class="body_key_btn" @click="key_num(9)">9</div>
                <div class="body_key_btn" @click="key_num(4)">4</div>
                <div class="body_key_btn" @click="key_num(5)">5</div>
                <div class="body_key_btn" @click="key_num(6)">6</div>
                <div class="body_key_btn" @click="key_num(1)">1</div>
                <div class="body_key_btn" @click="key_num(2)">2</div>
                <div class="body_key_btn" @click="key_num(3)">3</div>
                <div class="body_key_btn" @click="key_num(0)">0</div>
                <div class="body_key_btn" @click="remove()">清除</div>
                <div class="body_key_btn" @click="backspace()">退格</div>
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
    components: {},
    data() {
      return {
        id: '',
        password: '',
        isFirst: true
      }
    },
    methods: {

      submit() {

        if (this.id == '') {
          this.$Toast({
            message: '账号不能为空',
            duration: 1200
          });
          return false;
        } else if (this.password == '') {
          this.$Toast({
            message: '密码不能为空',
            duration: 1200
          });
          return false;
        } else {
          let userName = this.id;
          let password = this.password;
          let type = 1;
          var obj = {
            appid: APIUrl.appid,
            userName: userName,
            password: password,
            timeStamp: APIUrl.timeStamp
          };
          let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret);
          this.$post(APIUrl.root + APIUrl.login, {
              appid: APIUrl.appid,
              userName: userName,
              password: password,
              type: type,
              timeStamp: APIUrl.timeStamp,
              sign: sign
            })
            .then((response) => {
              //							console.log(APIUrl.root + APIUrl.login)
              // console.log(response)
              if (response.code == 400) {
                this.$Toast({
                  message: response.msg,
                  duration: 1200
                });
                return false
              } else if (response.code == 402) {
                this.$Toast({
                  message: '账号或密码错误',
                  duration: 1200
                });
                return false
              } else if (response.code == 403) {
                this.$Toast({
                  message: '账号已被禁用',
                  duration: 1200
                });
                return false
              } else if (response.code == 200) {
                // console.log(response.data.token)
                // localStorage.setItem('sort_token',response.data.token)
                // 本地存储
                var data = new Object();
                data.sort_token = response.data.token;
                var str = JSON.stringify(data);
                this.$store.commit(types.LOGIN, str)
                this.$Toast({
                  message: '登录成功',
                  duration: 1000
                });

                setTimeout(() => {
                  this.$router.push("/index");
                }, 1500)

              }
            })
        }
      },

      change(n) {
        if (n == 1) {
          this.isFirst = true;
        } else {
          this.isFirst = false;
        }
      },
      //小键盘输入
      key_num(num) {
        var that = this;
        if (that.isFirst == true) {
          that.id += num
        } else {
          that.password += num
        }
      },
      //清除
      remove() {
        var that = this;
        if (that.isFirst == true) {
          that.id = ''
        } else {
          that.password = ''
        }
      },
      //退格
      backspace() {
        var that = this;
        if (that.isFirst == true) {
          that.id = that.id.substring(0, that.id.length - 1)
        } else {
          that.password = that.password.substring(0, that.password.length - 1)
        }
      },
    },
    watch: {

    },
    mounted() {
      this.$refs.id.focus();
    },
    created() {
      if (localStorage.getItem('sort_token')) { // 判断是否登录
        this.$router.push("/index");
      }

    }
  };
</script>
