// 配置API接口地址
const timeStamp=Math.round(new Date().getTime()/1000);
export default {
    // root                  : process.env.API_HOST,               // 代理
    root               : window.location.protocol+"//"+window.location.hostname+'/',// 上线；
    appid                 : 3,                                  // appid
    appsecret             : 'StJfzJcXmya6k6Ar',                 // 密码
    timeStamp             : timeStamp,                          // 时间戳
	login                 : 'sort/login',             			// 登录
	logout                : 'sort/logout',             		    // 退出登录
	touchCate             : 'sort/touchCate',             		// 搜索条件数据
	memberList            : 'sort/memberList',             		// 用户列表
	secondCate            : 'sort/secondCate',             		// 二级分类
	sortList              : 'sort/sortList',             		// 分拣列表
	addSort               : 'sort/addSort',             		// 未分拣保存操作
	editSort              : 'sort/editSort',             		// 已分拣保存操作
	memberInfo            : 'sort/memberInfo',             		// 用户信息
	printSort             : 'sort/printSort',             		// 分拣打印信息
	itemList              : 'sort/itemList',             		// 商品名称搜索
	revoke                : 'sort/revoke',             		    // 分拣撤销
	itemByCateId          : 'sort/itemByCateId',                // 商品列表
    baseURL               : '',
};
