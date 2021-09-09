<template>
	<view class="forgot-password">
		<u-image width="400rpx" height="400rpx" src="/static/images/index/passwordbj@2x.png" class="logo"></u-image>
		<view class="c-input">
			<view class="c-input-left">
				<image src="/static/images/index/captcha@2x.png" mode=""></image>
				<input type="text" placeholder="请输入验证码" placeholder-style="color:#aaaaaa" />
			</view>
			<view class="code">获取验证码</view>
		</view>
		<view class="c-tip">短信验证码已发送至176****0910</view>
		
		<u-button :custom-style="customStyle" shape="circle" :ripple="true">下一步</u-button>
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
				nextStep: false
			}
		},
		methods: {
			
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
