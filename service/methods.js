import http from './network.js'

// 登录
const login = (data) => {
	return http.request({
		url: 'app/auth/login',
		dataType: 'json',
		method: 'POST',
		data
	})
}
// 注册
const register = (data) => {
	return http.request({
		url: 'app/auth/register',
		dataType: 'json',
		method: 'POST',
		data
	})
}
// 获取验证码
const getCaptcha = (data) => {
	return http.request({
		url: 'app/auth/getCaptcha',
		dataType: 'json',
		method: 'POST',
		data
	})
}
// 找回密码
const findPassword = (data) => {
	return http.request({
		url: 'app/member/findPassword',
		dataType: 'json',
		method: 'POST',
		data
	})
}
// 获取会员信息
const memberInfo = (data) => {
	return http.request({
		url: 'app/member/getMemberInfo',
		dataType: 'json',
		method: 'get',
		data
	})
}
// 查询绑卡支持的银行列表
const queryAllBankList = (data) => {
	return http.request({
		url: 'app/bankcard/queryAllBankList',
		dataType: 'json',
		method: 'get',
		data
	})
}

// 文件上传接口
const uploadPicture = (filePath, data = {}, fileType = 'image') => {
	return http.uploadFile('app/customer/storage/uploadPicture', filePath, data, fileType)
}

		
export default {
	uploadPicture,
	login,
	register,
	getCaptcha,
	findPassword,
	queryAllBankList,
	memberInfo
}