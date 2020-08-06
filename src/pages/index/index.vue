<template>
  <article class="fj_index">
    <div class="fj_index_box">
      <div class="fj_index_left">
        <div class="fj_index_log">
          <router-link to="/index">
            <img src="../../../static/images/fj_logo_xiao.png" alt="" />
          </router-link>
        </div>
        <div class="fj_left_tab_box">
          <div class="fj_left_tab_item" @click="swarchOut('searching')" :class="{ left_set_tab: show=='searching' }">
            <img :src="searchImg" alt="" />
            <div>检索</div>
          </div>
          <div class="fj_left_tab_item" @click="setOut('set')" :class="{ left_set_tab:show=='set' }">
            <img :src="setImg" alt="" />
            <div>设置</div>
          </div>
          <div class="fj_left_tab_item" @click="dropOut" :class="{ left_set_tab: exit }">
            <img :src="img" alt="" />
            <div>退出</div>
          </div>
        </div>
      </div>
      <div class="fj_index_middle">
        <div class="fj_index_middle_content fix-bottom">

          <div class="fj_index_details">
            <div class="fj_index_details_little">
              <div class="fj_index_details_little_left">
                <div class="little_left_item" v-for="list in seachList" :class="{on:seachType == list.type}" @click="searchTab(list.type)">{{list.item}}</div>
              </div>
              <div class="fj_index_details_little_right">
                <div class="fj_index_details_little_search_box">
                  <!--<div class="fj_index_details_little_search_left" v-if="animate == false">
										<img src="images/fj_search_shrink.png" alt="" />
									</div>-->
                  <div class="fj_index_details_little_search_middle">
                    <input type="text" id="search" v-model="inputVal" :placeholder="inputPal" @click="changeNum = 1" />
                  </div>
                  <div class="fj_index_details_little_search_right" @click="search_name">
                    <img src="../../../static/images/fj_search_shrink.png" alt="" />
                  </div>
                </div>

                <div class="fj_index_details_little_search_list_box" v-if="itemlist != ''">
                  <div class="fj_index_details_little_search_list" v-for="item in itemlist" @click="itemId(item)">
                    {{item.title}}
                  </div>
                </div>

                <div class="fj_index_details_little_search_list_box" v-if="search_tips == true">
                  <div class="search_list_no_more">
                    暂无数据
                  </div>
                </div>

              </div>
            </div>
            <div class="fj_index_details_list">
              <div class="fj_index_details_item">
                <div class="fj_index_details_item_left">
                  商品名称
                </div>
                <div v-if="!details" class="fj_index_details_item_right">
                  ***
                </div>
                <div v-if="details" class="fj_index_details_item_right" @click="title(details.item_title)">
                  <i class="fa fa-hand-o-up" aria-hidden="true"></i> {{details.item_title}}
                </div>
              </div>
              <div class="fj_index_details_item">
                <div class="fj_index_details_item_left">
                  单位名称
                </div>
                <div v-if="!details" class="fj_index_details_item_right">
                  ***
                </div>
                <div v-if="details" class="fj_index_details_item_right" @click="title(details.nickname)">
                  <i class="fa fa-hand-o-up" aria-hidden="true"></i> {{details.nickname}}
                </div>
              </div>
              <div class="fj_index_details_item">
                <div class="fj_index_details_item_left">
                  规格
                </div>
                <div v-if="!details" class="fj_index_details_item_right">
                  ***
                </div>
                <div v-if="details" class="fj_index_details_item_right">
                  {{details.attr_title}}
                </div>
              </div>
              <div class="fj_index_details_item">
                <div class="fj_index_details_item_left">
                  单位
                </div>
                <div v-if="!details" class="fj_index_details_item_right">
                  ***
                </div>
                <div v-if="details" class="fj_index_details_item_right">
                  {{details.unit}}
                </div>
              </div>
              <div class="fj_index_details_item">
                <div class="fj_index_details_item_left">
                  订购数量
                </div>
                <div v-if="!details" class="fj_index_details_item_right">
                  ***
                </div>
                <div v-if="details" class="fj_index_details_item_right">
                  {{details.num}}
                </div>
              </div>
              <div class="fj_index_details_item">
                <div class="fj_index_details_item_left">
                  分拣数量
                </div>
                <div v-if="sorting_tab == 1" class="fj_index_details_item_right">
                  <div class="fj_index_details_inp_box">
                    <input id="weight" ref='id' type="number" v-model="num" @click="changeNum = 2" />
                  </div>
                </div>
                <div v-if="sorting_tab == 2" class="fj_index_details_item_right">
                  <div class="fj_index_details_inp_box">
                    <input id="weight" ref='id' type="number" v-model="num" :placeholder="details.weight" @click="changeNum = 2" />
                  </div>
                </div>
              </div>
              <div class="fj_index_details_item">
                <div class="fj_index_details_item_left">
                  备注
                </div>
                <div v-if="!details" class="fj_index_details_item_right">
                  ***
                </div>
                <div v-if="details" class="fj_index_details_item_right">
                  {{details.remark}}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="fj_index_jp">
              <div class="fj_index_num" @click="change(7)">7</div>
              <div class="fj_index_num" @click="change(8)">8</div>
              <div class="fj_index_num" @click="change(9)">9</div>
              <!--<div class="fj_index_num" @click="backspace">退格</div>-->
              <div class="fj_index_num" @click="change(4)">4</div>
              <div class="fj_index_num" @click="change(5)">5</div>
              <div class="fj_index_num" @click="change(6)">6</div>

              <div class="fj_index_num" @click="change(1)">1</div>
              <div class="fj_index_num" @click="change(2)">2</div>
              <div class="fj_index_num" @click="change(3)">3</div>
              <!--<div class="fj_index_num" @click="amend">修改</div>-->
              <div class="fj_index_num" @click="change(0)">0</div>
              <div class="fj_index_num" @click="change('.')">.</div>
              <!--<div class="fj_index_btn" @click="">确定</div>-->
              <div class="fj_index_num" @click="empty">清除</div>
            </div>
            <div class="fj_index_middle_btn_box" v-if="sorting_tab == 1">
              <div class="fj_index_middle_btn side_btn" @click="addSort">保存</div>
              <div class="fj_index_middle_btn side_btn" @click="openAddUp">累加</div>

              <div class="fj_index_middle_btn forbidden" @click="go_revoke">撤销</div>
              <div class="fj_index_middle_btn centre_btn" @click="print('addSort')">保存 · 打印</div>
            </div>
            <div class="fj_index_middle_btn_box" v-if="sorting_tab == 2">
              <div class="fj_index_middle_btn side_btn" @click="editSort">保存</div>
              <div class="fj_index_middle_btn side_btn" @click="openAddUp">累加</div>

              <div class="fj_index_middle_btn side_btn" @click="go_revoke">撤销</div>
              <div class="fj_index_middle_btn centre_btn" @click="print('editSort')">保存 · 打印</div>
            </div>
          </div>
        </div>
      </div>
      <div class="fj_index_right">
        <div class="fj_index_right_top">
          <div class="fj_index_right_top_left">
            <div class="fj_index_right_top_tab" @click="sortingTab(1)" :class="{top_tab_on:sorting_tab==1}">
              未分拣
              <span v-if="listLength != 0">{{listLength}}</span>
            </div>
            <div class="fj_index_right_top_tab" @click="sortingTab(2)" :class="{top_tab_on_red:sorting_tab==2}">
              已分拣
            </div>
          </div>
          <div class="fj_index_right_top_right">

            <div class="fj_index_right_calendar_txt">

              <DatePicker class="index_calendar" style="width: 200px" placeholder="请选择日期" :open="open" :value="sendTime "
                type="date" @on-change="handleChange" @on-clear="handleClear" @on-ok="handleOk">

              </DatePicker>
              <img class="calendar_logo" src="../../../static/images/fj_calendar.png" alt="" />
            </div>
          </div>
        </div>
        <div class="fj_index_right_bottom">
          <div class="fj_index_right_bottom_list">
            <div class="fj_index_right_bottom_item" v-for="(item,index) in list" @click="cargo(item,index)" :class="{list_tab_on:details_index == index}"
              v-if="sorting_tab == 1">
              <div class="bottom_item_name">{{item.item_title}}</div>
              <div class="bottom_item_num">订购量：{{item.num}}</div>
              <!--					<div v-if="sorting_tab == 2" class="bottom_item_num">分拣量：{{item.weight}}</div>-->
            </div>
            <div class="fj_index_right_bottom_item" v-for="(item,index) in list" @click="cargo(item,index)" :class="{list_tab_on_red:details_index == index}"
              v-if="sorting_tab == 2">
              <div class="bottom_item_name_red">{{item.item_title}}</div>
              <div class="bottom_item_num_red">订购量：{{item.num}}</div>
              <div class="bottom_item_num_red">分拣量：{{item.weight}}</div>
            </div>
          </div>
          <div class="no_more">
            <div class="xian"></div>
            <div class="no_more_txt">没有更多了
            </div>
            <div class="xian"></div>

          </div>
        </div>
      </div>
    </div>
    <div>
      <!--<input class="item opa" @keyup="call">-->
    </div>
    <!--累加-->
    <div class="add_up_box" v-show="is_addUp">
      <div class="add_up_item">
        <div class="add_up">
          <div class="add_up_title">
            <div class="add_up_close" @click="closeAddUp">
              <img src="../../../static/images/fj_close.png" />
            </div>
          </div>
          <div class="add_up_content">
            <div class="add_up_inp">
              <span>分拣数量：</span>
              <input id="addUpInp" type="number" placeholder="智能秤或按回车" v-model="addUpNum1" />
            </div>
            <div class="add_up_inp">
              <span>累加数量：</span>
              <span>{{addUpNum2}}</span>
            </div>
          </div>
          <div class="add_up_btn">
            <div v-if="sorting_tab == 1" @click="addSort">完成</div>
            <div v-if="sorting_tab == 2" @click="editSort">完成</div>

            <div v-if="sorting_tab == 1" @click="print('leijia1')">完成并打印</div>
            <div v-if="sorting_tab == 2" @click="print('leijia2')">完成并打印</div>
          </div>
        </div>
      </div>
    </div>
    <!--加载-->
    <div class="loding_box" v-if="isLoding == true">
      <div class="loding">
        <mt-spinner type="snake"></mt-spinner>
        正在加载中.....
      </div>
    </div>
    <!--页面滚动-->
    <div class="fj_jt_box">
      <div class="fj_jt" @click="fullScreen">
        <img src="../../../static/images/fj_amplification.png" v-if="full_screen == false" />
        <img src="../../../static/images/fj_shrink.png" v-if="full_screen == true" />
      </div>
      <div class="fj_jt" @click="scroll('up')">
        <img src="../../../static/images/fj_jt2.png" />
      </div>
      <div class="fj_jt img_down" @click="scroll('down')">
        <img src="../../../static/images/fj_jt2.png" />
      </div>
    </div>

    <sets v-bind:show="show" v-on:back="back"></sets>
    <quit v-bind:msg="exit" v-on:drop="drop"></quit>
    <searching v-bind:show="show" v-bind:sendTime="sendTime" v-on:search="search" v-on:confirm="confirm"></searching>
    <!--<judge></judge>
  <footerw></footerw>-->
  </article>

</template>
<script>
import screenfull from 'screenfull'
import APIUrl from '../../../config/apiurl'
import * as types from '../../../config/types'
import quit from '../public/quit.vue'
import searching from '../public/searching.vue'
import sets from '../public/set.vue'
export default {
  components: {
    quit, searching, sets
    // 'quit': () =>
    // 	import('../public/quit.vue'), // 退出登录
    // 'searching': () =>
    // 	import('../public/searching.vue'), // 检索
    // 'set': () =>
    // 	import('../public/set.vue'), // 检索
    //  'footerw':()=>import('../public/footerw.vue'),   // 底部导航
    //  'judge':()=>import('../public/judge.vue'),       // 判断加背景颜色
  },
  data () {
    return {
      urlData: { // 页面检索参数

        firstId: '', // 一级分类ID
        secondId: '', // 二级分类ID
        collectionId: '', // 分组ID
        userId: '', // 单位名称ID
        isWeight: '', // 是否称重ID
        lineId: '' // 配送路线ID

      },
      // 搜索参数
      seachList: [{
        'type': 1,
        'item': '商品'
      }, {
        'type': 2,
        'item': '用户'
      }],
      seachType: 1,
      sorting_tab: 1, // 分拣tab
      cargo_tab: '', // 商品tab
      details: '', // 商品详情
      details_index: 0, // 商品详情下标
      list: [], // 分拣量列表
      listLength: 0, // 列表长度
      num: '', // 分拣数量
      exit: false, // 退出是否显示
      searching: false, // 是否显示检索
      set: false, // 是否显示设置
      show: '',
      img: require('../../../static/images/fj_exit_b.png'), // 退出图 标
      setImg: require('../../../static/images/fj_set_b.png'), // 设置图 标
      searchImg: require('../../../static/images/fj_search_b.png'), // 退出图 标
      sendTime: '', // 当天日期
      //								sendTime: '2019-09-21', //当天日期
      isLoding: false,

      scroll_num: 0, // 页面滚动条
      itemName: '', // 商品名称或ID
      //								animate: false,
      search_tips: false,
      inputVal: '',
      inputPal: '',
      itemlist: [],
      full_screen: false,
      changeNum: 2,
      is_addUp: false,
      addUpNum: '',
      addUpNum1: '',
      addUpNum2: 0
    }
  },
  watch: {
    inputVal (curVal, oldVal) {
      //				console.log(this.inputVal)
      //				console.log(curVal)
      //				if(this.inputVal != curVal) {
      var str = curVal.replace(/\s+/g, '')
      if (str != '') {
        // 实现input连续输入，只发一次请求
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          //					console.log(curVal)
          this.search_tips = true
          if (this.seachType == 1) {
            this.secondCateList(str)
          } else {
            this.memberList(str)
          }
        }, 300)
      } else {
        this.itemlist = []
        this.search_tips = false
      }
      //				}
    }
  },
  methods: {
    addUp () {
      if (this.addUpNum1 != '') {
        this.addUpNum2 = (parseInt(this.addUpNum1) + parseInt(this.addUpNum2))
        this.num = this.addUpNum2
        this.addUpNum = this.addUpNum1
        this.addUpNum1 = ''
      } else {
        this.$Toast({
          message: '请输入分拣数量',
          duration: 1000
        })
      }
    },
    closeAddUp () {
      this.is_addUp = false
      this.addUpNum2 = 0
      this.addUpNum1 = ''
      this.num = ''
    },
    openAddUp () {
      this.is_addUp = true
      this.$nextTick(function () {
        document.getElementById('addUpInp').focus()
      })
    },

    searchTab (data) {
      this.itemlist = []
      this.inputVal = ''
      this.inputPal = ''
      this.urlData.collectionId = ''
      this.seachType = data
    },
    title (data) {
      this.$Toast({
        message: data,
        duration: 2000
      })
    },
    fullScreen () {
      if (this.full_screen == false) {
        this.full_screen = true
        screenfull.toggle()
        // fullScreen()
      } else {
        this.full_screen = false
        screenfull.exit()
        // exitFullScreen()
      }
    },
    go_revoke () {
      if (this.sorting_tab == 1) {
        this.$Toast({
          message: '未分拣商品，无法撤销',
          duration: 1000
        })
      } else if (this.sorting_tab == 2) {
        if (this.cargo_tab == '') {
          this.$Toast({
            message: '请选择要撤销的商品',
            duration: 1000
          })
          return
        }
        this.isLoding = true
        var obj = {
          appid: APIUrl.appid,
          id: this.cargo_tab,
          timeStamp: APIUrl.timeStamp
        }
        let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret)
        this.$post(APIUrl.root + APIUrl.revoke, {
          appid: APIUrl.appid,
          timeStamp: APIUrl.timeStamp,
          id: this.cargo_tab,
          sign: sign
        })
          .then((response) => {
            judgement(this, response.code, response.msg, types)
            this.isLoding = false
            if (response.code == 200) {
              $('#weight').focus()
              this.$Toast({
                message: '撤销成功',
                duration: 1000
              })
              this.list.splice(this.details_index, 1)
              if (this.list != '') {
                this.details = this.list[0]
                this.details_index = 0
                this.cargo_tab = this.list[0].id
              }
              this.num = ''
              this.listLength += 1
            }
          })
      }
    },
    search_name () { // 点击搜索
      var str = this.inputVal.replace(/\s+/g, '')
      let key
      if (this.inputVal == '') {
        key = this.inputPal
      } else {
        key = this.inputVal
      }
      this.stortList(this.urlData, this.sorting_tab, this.sendTime, key)
    },
    itemId (data) { // 点击提示词
      this.itemlist = []
      this.inputVal = ''
      this.inputPal = data.title

      if (this.seachType == 1) {
        this.stortList(this.urlData, this.sorting_tab, this.sendTime, data.title)
      } else {
        this.urlData.collectionId = data.id
        this.stortList(this.urlData, this.sorting_tab, this.sendTime, '')
      }
      //				this.stortList(this.urlData, this.sorting_tab, this.sendTime, data.title)
    },
    //			animateWidth(name, type) {
    //				if(name == "company_name") {
    //					if(type == "blur") {
    //						this.animate = false;
    //					} else {
    //						this.animate = true;
    //						return;
    //					}
    //				}
    //			},
    call () { // 回车时如未连接插件调用保存，但不打印
      if (this.sorting_tab == 1) {
        	if (isPrint() === false) {
        		this.isLoding = false
        		alert('未安装打印控件，请联系菜东家工作人员。')
        		this.addSort()
        	} else {
        		this.addSort('addSort')
        	}
      } else if (this.sorting_tab == 2) {
        	if (isPrint() === false) {
        		this.isLoding = false
        		alert('未安装打印控件，请联系菜东家工作人员。')
        		this.editSort()
        	} else {
        		this.editSort('editSort')
        	}
      }
    },

    secondCateList (data) { // 商品列表
      var obj = {
        appid: APIUrl.appid,
        timeStamp: APIUrl.timeStamp
      }
      let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret)
      this.$get(APIUrl.root + APIUrl.itemByCateId, {
        appid: APIUrl.appid,
        timeStamp: APIUrl.timeStamp,
        sendTime: this.sendTime,
        keywords: data,
        sign: sign
      })
        .then((response) => {
          this.isLoding = false
          judgement(this, response.code, response.msg, types)
          if (response.code == 200) {
            this.itemlist = response.data
            if (this.itemlist == '') {
              this.search_tips = true
            } else {
              this.search_tips = false
            }
          }
        })
    },
    memberList (data) { // 用户列表
      var obj = {
        appid: APIUrl.appid,
        timeStamp: APIUrl.timeStamp
      }
      let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret)
      this.$post(APIUrl.root + APIUrl.memberList, {
        appid: APIUrl.appid,
        timeStamp: APIUrl.timeStamp,
        sendTime: this.sendTime,
        groupId: 0,
        houseId: 0,
        keywords: data,
        sign: sign
      })
        .then((response) => {
          this.isLoding = false
          judgement(this, response.code, response.msg, types)
          if (response.code == 200) {
            var array = response.data
            // 旧key到新key的映射
            var keyMap = {
              'name': 'title'
            }
            for (var i = 0; i < array.length; i++) {
              var obj = array[i]
              for (var key in obj) {
                var newKey = keyMap[key]
                if (newKey) {
                  obj[newKey] = obj[key]
                  delete obj[key]
                }
              }
            }
            this.itemlist = array
            if (this.itemlist == '') {
              this.search_tips = true
            } else {
              this.search_tips = false
            }
          }
        })
    },

    stortList (data, status, sendTime, name) { // 分拣列表
      //				console.log(JSON.stringify(data))
      // return;
      this.list = []
      this.details = ''
      this.details_index = 0
      this.num = ''
      this.isLoding = true
      var userId = ''
      if (data.collectionId) {
        userId = data.collectionId
        data.userId = ''
        // console.log("yi" + JSON.stringify(data))
      } else {
        userId = data.userId
        // console.log("er" + JSON.stringify(data))
      }
      var obj = {
        appid: APIUrl.appid,
        timeStamp: APIUrl.timeStamp
      }
      let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret)
      this.$post(APIUrl.root + APIUrl.sortList, {
        appid: APIUrl.appid,
        timeStamp: APIUrl.timeStamp,
        firstId: data.firstId,
        secondId: data.secondId,
        itemId: data.itemId, // 商品ID
        userId: userId,
        groupId: data.groupId,
        isWeight: data.isWeight,
        status: status,
        sendTime: sendTime,
        itemName: name,
        lineId: data.lineId,
        houseId: data.houseId,
        sign: sign
      })
        .then((response) => {
          this.isLoding = false
          judgement(this, response.code, response.msg, types)

          if (response.code == 200) {
            this.list = response.data
            // console.log(response)
            $('#weight').focus()
            //							if(this.sorting_tab == 1) {
            if (this.list != '') {
              this.details = this.list[0]
              if (this.sorting_tab == 2) {
                this.addUpNum2 = this.list[0].weight
              }
              this.details_index = 0
              this.cargo_tab = this.list[0].id
            }

            if (this.sorting_tab == 1) {
              this.listLength = this.list.length
            }

            this.itemlist = []
            this.search_tips = false
            //							}
          }
        }).catch(err => {
          that.$Toast({
            	message: err,
            	duration: 1000
          })
        })
    },
    addSort (data) { // 未分拣保存
      //				console.log(this.list)
      if (this.details == '') {
        var that = this
        that.$Toast({
          message: '请选择要分拣的商品',
          duration: 1000
        })
      } else if (this.num == '') {
        var that = this
        that.$Toast({
          message: '请输入分拣数量',
          duration: 1000
        })
      } else if (this.num != '') {
        this.isLoding = true
        var obj = {
          appid: APIUrl.appid,
          id: this.cargo_tab,
          weight: this.num,
          timeStamp: APIUrl.timeStamp
        }
        let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret)
        this.$post(APIUrl.root + APIUrl.addSort, {
          appid: APIUrl.appid,
          timeStamp: APIUrl.timeStamp,
          id: this.cargo_tab,
          weight: this.num,
          sign: sign
        })
          .then((response) => {
            judgement(this, response.code, response.msg, types)
            this.isLoding = false
            // console.log(response)
            if (response.code == 200) {
              $('#weight').focus()

              if (response.data.auto_print == 1) {
                if (data == 'addSort') {
                  	this.$Toast({
                  		message: '保存并打印成功',
                  		duration: 1000
                  	})
                  	this.printSort()
                } else if (data == 'leijia1') {
                  	this.$Toast({
                  		message: '保存并打印成功',
                  		duration: 1000
                  	})
                  	this.printSort('leijia')
                } else {
                  	this.$Toast({
                  		message: '保存成功',
                  		duration: 1000
                  	})
                  	this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.inputVal)
                }
              } else if (response.data.auto_print == 0) {
                this.$Toast({
                  	message: '保存成功',
                  	duration: 1000
                })
                this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.inputVal)
              }
              //								console.log(this.list.length)
              this.list.splice(this.details_index, 1)
              this.closeAddUp()
              if (this.list.length != '') {
                this.num = ''
                this.details = this.list[0]
                this.details_index = 0
                this.cargo_tab = this.list[0].id
              }
              if (this.sorting_tab == 1) {
                if (this.list.length < 1 || this.list.length == 1) {
                  this.listLength = 0
                } else {
                  this.listLength = this.list.length
                }
              }
            }
          })
      }
    },
    editSort (data) { // 已分拣保存
      if (this.details == '') {
        var that = this
        that.$Toast({
          message: '请选择要分拣的商品',
          duration: 1000
        })
      } else if (this.details != '') {
        //					Preview()
        //					this.list = '';
        this.isLoding = true
        var weightNum = ''
        if (this.num == '') {
          weightNum = this.details.weight
        } else {
          weightNum = this.num
        }
        var obj = {
          appid: APIUrl.appid,
          id: this.cargo_tab,
          weight: weightNum,
          timeStamp: APIUrl.timeStamp
        }
        let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret)

        this.$post(APIUrl.root + APIUrl.editSort, {
          appid: APIUrl.appid,
          timeStamp: APIUrl.timeStamp,
          id: this.cargo_tab,
          weight: weightNum,
          sign: sign
        })
          .then((response) => {
            this.isLoding = false
            judgement(this, response.code, response.msg, types)
            // console.log(response)
            if (response.code == 200) {
              $('#weight').focus()
              this.closeAddUp()
              if (response.data.auto_print == 1) {
                if (data == 'editSort') {
                  	this.$Toast({
                  		message: '保存并打印成功',
                  		duration: 1000
                  	})
                  	this.printSort()
                } else if (data == 'leijia2') {
                  	this.$Toast({
                  		message: '保存并打印成功',
                  		duration: 1000
                  	})
                  	this.printSort('leijia')
                } else {
                  this.$Toast({
                    	message: '保存成功',
                    	duration: 1000
                  })
                  this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.inputVal)
                }
              } else if (response.data.auto_print == 0) {
                this.$Toast({
                  	message: '保存成功',
                  	duration: 1000
                })
                this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.inputVal)
              }

              if (this.num != '') {
                this.list[this.details_index].weight = this.num
                this.details.weight = this.num
              }
            }
          })
      }
    },
    printSort (data) { // 分拣打印信息
      //				this.list = '';
      this.isLoding = true
      var obj = {
        appid: APIUrl.appid,
        id: this.cargo_tab,
        timeStamp: APIUrl.timeStamp
      }
      let sign = this.$md5(objKeySort(obj) + APIUrl.appsecret)
      this.$post(APIUrl.root + APIUrl.printSort, {
        appid: APIUrl.appid,
        timeStamp: APIUrl.timeStamp,
        id: this.cargo_tab,
        sign: sign
      })
        .then((response) => {
          judgement(this, response.code, response.msg, types)
          this.isLoding = false
          // console.log(response)
          if (response.code == 200) {
            var obj = response.data
            //							console.log(this.addUpNum)
            // 单个打印
            var sj = obj.send_time // 配送日期
            var code = obj.code // 编号
            var id = this.details.id // ID
            //							var nickname = obj.code  //单位名称
            var title = obj.item_title // 商品名称
            var attr_name = obj.attr_title // 规格
            var num = obj.num // 预定量
            var bodyw = JSON.stringify(obj.body)
            var is_qrcode = obj.is_qrcode
            var qrCode = obj.qrCode
            var font_size = obj.font_size
            if (data == 'leijia') {
              var weight = this.addUpNum
              this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.inputVal)
            } else {
              var weight = obj.weight // 配送数量
            }
            if (weight != 0 && weight != 0.00 && !isNaN(weight)) {
              Preview(code, title, attr_name, num, weight, sj, bodyw, id, is_qrcode, qrCode, font_size)
            }
          }
        })
    },
    print (data) { // 保存并打印
      if (isPrint() === false) { // 点击保存并且打印时如未连接插件则不调用保存
        this.isLoding = false
        alert('未安装打印控件，请联系菜东家工作人员。')
      } else {
        //					console.log(data)
        if (data == 'editSort') {
          this.editSort(data)
        } else if (data == 'addSort') {
          this.addSort(data)
        } else if (data == 'leijia1') {
          this.addSort('leijia1')
        } else if (data == 'leijia2') {
          this.editSort('leijia2')
        }
      }
    },
    cargo (item, index) {
      this.details = item
      this.details_index = index
      this.cargo_tab = item.id
      this.num = ''
      $('#weight').focus()
      if (this.sorting_tab == 1) {
        this.backTop()
        var that = this
        var arr = new Array()
        for (var i = 0; i < that.list.length; i++) {
          if (that.list[i].item_id == item.item_id) {
            if (that.list[i].id != item.id) {
              arr.unshift(that.list[i])
            }
          } else {
            arr.push(that.list[i])
          }
        }
        arr.unshift(item)
        that.details_index = index
        that.list = arr
        if (that.list != '') {
          that.details = that.list[0]
          that.details_index = 0
          that.cargo_tab = that.list[0].id
        }
      } else {
        this.addUpNum2 = item.weight
      }
    },
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 6)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    },
    sortingTab (e) {
      this.itemlist = []
      this.inputVal = ''
      this.inputPal = ''
      this.details = ''
      this.urlData.collectionId = ''
      this.details_index = 0
      this.sorting_tab = e
      this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.itemName)
      this.num = ''
    },
    handleClick () {
      this.open = !this.open
    },
    handleChange (date) {
      this.sendTime = date
      this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.itemName)
      //				console.log(date)
    },
    handleClear () {
      this.open = false
    },
    handleOk () {
      this.open = false
    },

    swarchOut (data) {
      this.show = ''
      if (data == 'searching') {
        this.searchImg = require('../../../static/images/fj_search_f.png')
        this.setImg = require('../../../static/images/fj_set_b.png')
        this.show = data
      } else {
        this.is_show()
      }
      return
      if (this.searching == false) {
        this.searchImg = require('../../../static/images/fj_search_f.png')
        this.searching = true
        document.body.parentNode.style.overflowY = 'hidden'
        $('body').parent().css('overflow-y', 'hidden')
      } else {
        this.searchImg = require('../../../static/images/fj_search_b.png')
        this.searching = false
        document.body.parentNode.style.overflowY = 'auto'
        $('body').parent().css('overflow-y', 'auto')
      }
    },
    setOut (data) {
      this.show = ''
      if (data == 'set') {
        this.setImg = require('../../../static/images/fj_set_w.png')
        this.searchImg = require('../../../static/images/fj_search_b.png')
        this.show = data
      } else {
        this.is_show()
      }
      return
      if (this.set == false) {
        this.setImg = require('../../../static/images/fj_set_w.png')
        this.set = true
      } else {
        this.setImg = require('../../../static/images/fj_set_b.png')
        this.set = false
      }
    },
    is_show () {
      //				alert(1)
      //				if(this.show == "searching") {
      this.searchImg = '../../../static/images/fj_search_b.png'
      this.setImg = '../../../static/images/fj_set_b.png'
      //					this.show = '';
      //				}else if(this.show == "set"){
      this.show = ''
      //				}
    },

    back (data) { // 接收设置组件传来的数据
      this.is_show()
    },
    search (data) { // 接受检索传来的数据
      this.is_show()
    },

    change (e) { // 数字键盘
      //				if(this.changeNum == 1) {
      //					this.inputVal += e;
      //				} else if(this.changeNum == 2) {
      this.changeNum = 2
      this.num += e

      //				}
      //				this.num += e;
    },
    //			backspace() { //退格
    //				this.num = this.num.substring(0, this.num.length - 1);
    //			},
    empty () { // 清除
      //				console.log(this.changeNum)
      if (this.changeNum == 1) {
        this.inputVal = ''
      } else if (this.changeNum == 2) {
        this.num = ''
      }
    },
    dropOut () {
      if (this.exit == false) {
        this.img = require('../../../static/images/fj_exit_w.png')
        this.exit = true
      } else {
        this.img = require('../../../static/images/fj_exit_b.png')
        this.exit = false
      }
    },
    drop (data) { // 接收退出登录组件传来的数据
      this.dropOut()
    },

    confirm (data) { // 接受检索传来的数据
      //				console.log(data)
      this.urlData = {
        firstId: data.firstId,
        secondId: data.secondId,
        itemId: data.itemId,
        userId: data.userId,
        groupId: data.groupId,
        isWeight: data.isWeight,
        lineId: data.lineId,
        houseId: data.houseId
      }
      this.inputPal = ''
      this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.itemName)
      this.swarchOut(this.show)
    },
    scroll (data) { // 页面滚动
      if (data == 'up') {
        if ($(document).scrollTop() <= 0) {
          this.$Toast({
            message: '滚动条已经到达顶部',
            duration: 1000
          })
        } else {
          this.scroll_num -= 200
        }
        $('html,body').animate({
          scrollTop: this.scroll_num
        }, 200)
      } else if (data == 'down') {
        if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
          this.$Toast({
            message: '滚动条已经到达底部',
            duration: 1000
          })
        } else {
          this.scroll_num += 200
        }
        $('html,body').animate({
          scrollTop: this.scroll_num
        }, 200)
      }
    }
  },
  mounted () {
    //			this.$refs.id.focus();
    //			console.log(this.$route.query)
    window.addEventListener('scroll', this.scrollToTop)
    if (JSON.stringify(this.$route.query) != '{}') {
      this.$route.query
      this.urlData = {
        firstId: this.$route.query.firstId,
        secondId: this.$route.query.secondId,
        itemId: this.$route.query.itemId,
        userId: this.$route.query.userId,
        groupId: this.$route.query.groupId,
        isWeight: this.$route.query.isWeight,
        lineId: this.$route.query.lineId,
        houseId: this.$route.query.houseId
      }
      this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.itemName)
    } else {
      this.stortList(this.urlData, this.sorting_tab, this.sendTime, this.itemName)
    }
    var that = this
    $(function () {
      $('#search').keydown(function (e) {
        if (e.keyCode == 13) {
          if (that.seachType == 1) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
              that.search_name()
              that.itemlist = ''
              that.inputVal = ''
            }, 500)
          }
          return false
        }
      })
      $('#weight').keydown(function (e) {
        if (e.keyCode == 13) {
          that.call() // 登录方法名
          return false
        }
      })
      $('#addUpInp').keydown(function (e) {
        if (e.keyCode == 13) {
          that.addUp()
          return false
        }
      })
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  created () {
    var that = this
    if (localStorage.getItem('sort_token')) { // 判断是否登录
      var result = JSON.parse(localStorage.getItem('sort_token'))
      var data = new Object()
      data.sort_token = result.sort_token
      var str = JSON.stringify(data)
      that.$store.commit(types.LOGIN, str)
    }

    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    if (month < 10) {
      month = '0' + month
    }
    if (day < 10) {
      day = '0' + day
    }
    this.sendTime = year + '-' + month + '-' + day
  }
}
</script>
<style type="text/css">
  .fix-bottom {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
