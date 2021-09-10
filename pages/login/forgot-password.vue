<template>
	<view class="forgot-password">
		<u-image width="400rpx" height="400rpx" src="/static/images/index/passwordbj@2x.png" class="logo"></u-image>
		<block v-if="!nextStep"> 
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/phone@2x.png" mode=""></image>
					<input v-model="mobile" type="number" placeholder="请输入手机号" placeholder-style="color:#aaaaaa" />
				</view>
			</view>
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/captcha@2x.png" mode=""></image>
					<input v-model="code" type="number" placeholder="请输入验证码" placeholder-style="color:#aaaaaa" />
				</view>
				<view class="code" :style="{opacity:verCodeText == '获取验证码' ? 1 : .5}" @click="getVerify">{{verCodeText}}</view>
			</view>
			<view class="c-tip" v-if="verCodeText != '获取验证码'">短信验证码已发送至{{mobile}}</view>
		</block>
		<block v-else>
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/password@2x.png" mode=""></image>
					<input v-model="newPassword" type="password" placeholder="请输入新密码" placeholder-style="color:#aaaaaa" v-if="isHide1"/>
					<input v-model="newPassword" type="text" placeholder="请输入新密码" placeholder-style="color:#aaaaaa" v-else/>
				</view>
				<image src="/static/images/index/hide@2x.png" mode="" class="ice" @click="isHide1 = !isHide1" v-if="isHide1"></image>
				<image src="/static/images/index/show@2x.png" mode="" class="ice" @click="isHide1 = !isHide1" v-else></image>
			</view>
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/password@2x.png" mode=""></image>
					<input v-model="confirmnewPassword" type="password" placeholder="请确认新密码" placeholder-style="color:#aaaaaa" v-if="isHide2" />
					<input v-model="confirmnewPassword" type="text" placeholder="请确认新密码" placeholder-style="color:#aaaaaa"  v-else/>
				</view>
				<image src="/static/images/index/hide@2x.png" mode="" class="ice" @click="isHide2 = !isHide2" v-if="isHide2"></image>
				<image src="/static/images/index/show@2x.png" mode="" class="ice" @click="isHide2 = !isHide2" v-else></image>
			</view>
			<view class="c-tip">账号：17603080910</view>
		</block>
		
		<u-button :custom-style="customStyle" shape="circle" :ripple="true" @click="nextstep" v-if="!nextStep">下一步</u-button>
		<u-button :custom-style="customStyle" shape="circle" :ripple="true" @click="confirm" v-else>确定</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle:{
					background: '#2878FF',
					color:'#fff',
					marginTop: '80rpx',
					height:'80rpx',
				},
				nextStep: false,
				verCodeText:'获取验证码',
				mobile:'',
				code:'',
				isHide1: true,
				isHide2: true,
				newPassword:'',
				confirmnewPassword:''
			}
		},
		methods: {
			// 获取验证吗
			async getVerify() {
				if(this.verCodeText != "获取验证码") return
				
				let intervalTime = 60;
				let res = await this.$http.getCaptcha({
					mobile: this.mobile,
					type:2
				})
				this.$t('验证码已发送至手机')
				let timer = setInterval(()=>{
					this.verCodeText = `${intervalTime}s`
					intervalTime --
					if(intervalTime < 0) {
						this.verCodeText = "获取验证码"
						clearInterval(timer)
					}
				},1000)
				console.log(res);
			},
			nextstep() {
				if(!this.code) {
					this.$t('请输入验证码')
					return
				}
				this.nextStep = true
			},
			async confirm() {
				let res = await this.$http.findPassword({
					mobile:this.mobile,
					smsCode:this.code,
					newPassword:this.newPassword,
					confirmnewPassword:this.confirmnewPassword
				})
				this.$t('找回密码成功')
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="less">
page {
	background-color: #FFFFFF;
	padding: 0 80rpx;
}
.logo {
	display: block;
	margin: 42rpx auto 0;
}
.c-input {
	height: 120rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #EEEEEE;
	margin-top: 20rpx;
	.c-input-left {
		display: flex;
		align-items: center;
		image {
			width: 40rpx;
			height: 40rpx;
		}
		input {
			font-size: 28rpx;
			margin-left: 20rpx;
		}
	}
	.ice {
		width: 40rpx;
		height: 40rpx;
	}
	.code {
		width: 200rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: #2878FF;
		border: 1rpx solid #2878FF;
		border-radius: 30rpx;
		
	}
}
.c-tip {
	font-size: 28rpx;
	color: #AAAAAA;
	margin-top: 32rpx;
}
</style>
