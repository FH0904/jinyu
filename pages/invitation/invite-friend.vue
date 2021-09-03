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
		<view class="qr-line"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					background: 'transparent'
				},
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
.qr-line {
	width: 690rpx;
	height: 2rpx;
	background: #F0F5FC;
	margin: 40rpx auto 0;
}
</style>
