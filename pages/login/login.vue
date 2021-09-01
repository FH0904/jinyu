<template>
	<view>
		<view class="top-header">
			<u-navbar :custom-back="customBack"  :background="background" :is-fixed="false"  :border-bottom="false" back-icon-color="#fff"></u-navbar>
			<u-image width="280rpx" height="120rpx" src="/static/images/index/logo@2x.png" class="logo"></u-image>
		</view>
		<view class="login-content">
			<view class="c-tip">您好，请登录</view>
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/phone@2x.png" mode=""></image>
					<input type="text" placeholder="请输入手机号" placeholder-style="color:#aaaaaa" />
				</view>
			</view>
			<view class="c-input">
				<view class="c-input-left">
					<image src="/static/images/index/password@2x.png" mode=""></image>
					<input type="password" placeholder="请输入登录密码" placeholder-style="color:#aaaaaa" />
				</view>
				<image src="/static/images/index/hide@2x.png" mode="" class="ice"></image>
			</view>
			<u-button :custom-style="customStyle" shape="circle" :ripple="true">登录</u-button>
			<view class="forget" @click="navTo('/pages/login/forgot-password')">忘记密码</view>
		</view>
		<view class="b-tip">
			<text>没有账号？</text>
			<text class="b-text-light" @click="navTo('/pages/login/register')">立即注册</text>
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
				customStyle:{
					background: '#2878FF',
					color:'#fff',
					marginTop: '60rpx',
					height:'80rpx'
				}
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
	height: 620rpx;
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
