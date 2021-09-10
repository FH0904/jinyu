<template>
	<view>
		<view class="top-header">
			<u-navbar :custom-back="customBack"   :background="background" :is-fixed="false"  :border-bottom="false" back-icon-color="#fff"></u-navbar>
			<u-image width="280rpx" height="120rpx" src="/static/images/index/logo@2x.png" class="logo"></u-image>
		</view>
		<view class="login-content"> 
			<view class="c-tip">您好，请注册</view>
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/phone@2x.png" mode=""></image>
					<input v-model="mobile" type="text" placeholder="请输入手机号" placeholder-style="color:#aaaaaa" />
				</view>
			</view>
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/captcha@2x.png" mode=""></image>
					<input v-model="code" type="text" placeholder="请输入验证码" placeholder-style="color:#aaaaaa" />
				</view>
				<view class="code" :style="{opacity:verCodeText == '获取验证码' ? 1 : .5}" @click="getVerify">{{verCodeText}}</view>
			</view>
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/password@2x.png" mode=""></image>
					<input v-model="password" style="width: 420rpx;" type="password" placeholder="8-16位数字、字母或字符组成" placeholder-style="color:#aaaaaa" v-if="isHide"/>
					<input v-model="password" style="width: 420rpx;" type="text" placeholder="8-16位数字、字母或字符组成" placeholder-style="color:#aaaaaa" v-else/>
				</view>
				<image src="/static/images/index/hide@2x.png" mode="" class="ice" @click="isHide = !isHide" v-if="isHide"></image>
				<image src="/static/images/index/show@2x.png" mode="" class="ice" @click="isHide = !isHide" v-else></image>
			</view>
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/invitee@2x.png" mode=""></image>
					<input v-model="referrerMobile" type="number" placeholder="请输入邀请人手机号" placeholder-style="color:#aaaaaa" />
				</view>
			</view>
			<view class="c-agreement">
				<label class="radio">
					<radio value="" style="transform: scale(.8);" color="#2878FF"/>
					<text>我已阅读并同意</text>
					<text style="color: #2878FF;">《金鱼用户服务协议》</text>
					<text>和</text>
					<text style="color: #2878FF;">《隐私政策》</text>
				</label>
			</view>
			<u-button :custom-style="customStyle1" shape="circle" :ripple="true" @click="toRegister">注册</u-button>
			<!-- <u-button :custom-style="customStyle2" shape="circle" :ripple="true" @click="toRegister">注册</u-button> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					background: 'transparent'
				},
				customStyle1:{
					background: '#2878FF',
					color:'#fff',
					marginTop: '60rpx',
					height:'80rpx'
				},
				customStyle2:{
					background: '#2878FF',
					color:'#fff',
					marginTop: '60rpx',
					height:'80rpx',
					opacity:.6,
				},
				mobile:'',
				password:'',
				referrerMobile:'',
				code:'',
				verCodeText:'获取验证码',
				isHide: true
			};
		},
		methods:{
			navTo(url) {
				uni.navigateTo({
					url
				})
			},
			customBack() {
				uni.navigateBack()
			},
			async toRegister() {
				let res = await this.$http.register({
					mobile:this.mobile,
					password:this.password,
					code:this.code,
					referrerMobile:this.referrerMobile
				})
				this.$t('注册成功')
				setTimeout(()=>{
					uni.redirectTo({
						url:'login'
					})
				},1000)
			},
			async getVerify() {
				if(this.verCodeText != "获取验证码") return
				
				let intervalTime = 60;
				let res = await this.$http.getCaptcha({
					mobile: this.mobile,
					type:0
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
			}
		}
	}
</script>

<style lang="less">
.top-header {
	width: 750rpx;
	height: 460rpx;
	background: linear-gradient(-90deg, #1B91FF 0%, #0056E4 100%);
	.logo {
		display: block;
		margin: 32rpx auto 0;
	}
}
.login-content {
	width: 670rpx;
	height: 900rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	margin: -120rpx auto 0;
	padding: 0 40rpx;
	overflow: hidden;
	.c-tip {
		font-size: 36rpx;
		font-weight: bold;
		margin-top: 60rpx;
		color: #2878FF;
	}
	.c-input {
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
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
	.c-agreement {
		color: #666;
		font-size: 28rpx;
		margin-top: 46rpx;
		line-height: 40rpx;
	}
	.forget {
		font-size: 28rpx;
		color: #2878FF;
		margin-top: 40rpx;
		text-align: center;
	}
}
.b-tip {
	position: absolute;
	bottom: 60rpx;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	justify-content: center;
	font-size: 28rpx;
	color: #666;
	.b-text-light {
		color: #2878FF;
	}
}
</style>
