<template>
	<view>
		<view class="top-header">
			<u-navbar  :background="background" title="邀请好友" title-color="#fff" title-bold :border-bottom="false" back-icon-color="#fff" ></u-navbar>
		</view>
		<view class="t-code">
			<view class="c-title">— 您的邀请码 —</view>
			<view class="c-code">17603080910</view>
		</view>
		<view class="qr-code">
			
		</view>
		<view class="qr-text">微信扫一扫</view>
		<view class="qr-line1"></view>
		<view class="invitation-process">
			<view class="p-item">
				<view class="i-text1">1</view>
				<image src="/static/images/invitation/fxhy@2x.png" mode=""></image>
				<view class="i-text2">好友扫描</view>
			</view>
			<image src="/static/images/invitation/determine@2x.png" class="p-right" mode=""></image>
			<view class="p-item">
				<view class="i-text1">2</view>
				<image src="../../static/images/invitation/wczc@2x.png" mode=""></image>
				<view class="i-text2">完成注册</view>
			</view>
			<image src="/static/images/invitation/determine@2x.png" class="p-right" mode=""></image>
			<view class="p-item">
				<view class="i-text1">3</view>
				<image src="../../static/images/invitation/fxhy2@2x.png" mode=""></image>
				<view class="i-text2">绑定成功</view>
			</view>
		</view>
		<view class="qr-btn tabbar">
			<u-button :custom-style="customStyle" shape="circle" :ripple="true">立即分享</u-button>
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
					width: '690rpx',
					height: '80rpx',
					background: 'linear-gradient(0deg, #1B91FF 0%, #0056E4 100%)',
					borderRadius: '40rpx',
					color:'#fff'
				}
			};
		}
	}
</script>

<style lang="less">
page {
	background-color: #FFFFFF;
}
.top-header {
	width: 750rpx;
	height: 500rpx;
	background: url(/static/images/invitation/background2@2x.png);
	background-size: 100% 100%;
}
.t-code {
	width: 670rpx;
	height: 240rpx;
	background: #FFFFFF;
	box-shadow: 0px 0px 20rpx 0px rgba(0, 87, 228, 0.2);
	border-radius: 20rpx;
	margin: -130rpx auto 0;
	text-align: center;
	overflow: hidden;
	.c-title {
		font-size: 32rpx;
		font-weight: 500;
		color: #222222;
		margin-top: 62rpx;
	}
	.c-code {
		font-size: 60rpx;
		font-weight: bold;
		color: #2878FF;
		margin-top: 40rpx;
	}
}
.qr-code {
	width: 280rpx;
	height: 280rpx;
	background: #FFFFFF;
	border: 8rpx solid #2878FF;
	border-radius: 20rpx;
	margin: 60rpx auto 0;
}
.qr-text {
	text-align: center;
	margin-top: 30rpx;
	font-size: 32rpx;
	color: #222222;
}
.qr-line1 {
	width: 690rpx;
	height: 2rpx;
	background: #F0F5FC;
	margin: 40rpx auto 0;
}
.qr-line1 {
	width: 750rpx;
	height: 2rpx;
	background: #F0F5FC;
	margin: 40rpx auto 0;
}
.invitation-process {
	display: flex;
	padding-left: 98rpx;
	.p-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		.i-text1 {
			width: 40rpx;
			height: 40rpx;
			border-radius: 50%;
			line-height: 40rpx;
			text-align: center;
			font-size: 26rpx;
			color: #FFFFFF;
			background-color: #2878FF;
			margin-top: 40rpx;
		}
		image {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			margin: 20rpx 0;
		}
		.i-text2 {
			font-size: 26rpx;
			color: #222222;
		}
	}
	.p-right {
		width: 40rpx;
		height: 40rpx;
		margin: 120rpx 50rpx 0;
	}
}
.qr-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30rpx;
	width: 750rpx;
	height: 120rpx;
	background: #FFFFFF;
	border-top: 1px solid #F1F5FC;
	margin-top: 40rpx;
}
</style>
