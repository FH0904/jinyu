<template>
	<view>
		<view class="top-header">
			<u-navbar :background="background" :is-fixed="false" :is-back="false" :border-bottom="false"></u-navbar>
			<view class="h-tip">Hi ~ </view>
			<view class="h-tip">金鱼欢迎您</view>
		</view>
		<u-image width="100%" height="460rpx" src="/static/images/index/top_backdrop@2x.png"></u-image>
		<view class="grid-content" style="margin: -200rpx auto 0;"  :hover-stay-time="200" hover-class="u-hover-class">
			<view class="c-left">
				<view class="l-text1">还款</view>
				<view class="l-text2">一千还10000</view>
				<view class="l-text3">查看</view>
			</view>
			<u-image width="300rpx" height="300rpx" src="/static/images/index/repayment@2x.png" style="margin-top: 50rpx;"></u-image>
		</view>
		<view @click="navTo('/pages/index/repayment')" class="grid-content" style="margin: 30rpx auto 0;" :hover-stay-time="200" hover-class="u-hover-class">
			<view class="c-left">
				<view class="l-text1">刷卡</view>
				<view class="l-text2">实时到账</view>
				<view class="l-text3">查看</view>
			</view>
			<u-image width="300rpx" height="300rpx" src="/static/images/index/paycard@2x.png" style="margin-top: 50rpx;"></u-image>
		</view>
		
		<view class="explain-list">
			<view class="l-title">用卡指南</view>
			<view class="l-list" :hover-stay-time="200" hover-class="u-hover-class">
				<view class="l-left">如何制定还款计划?</view>
				<image src="/static/images/index/determine@2x.png" mode=""></image>
			</view>
		</view>
		
		<view style="height: 200rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					background: 'transparent'
				}
			};
		},
		methods: {
			navTo(url) {
				uni.navigateTo({
					url      
				})
			}
		},
		onLoad() {
			!uni.getStorageSync('userToken')&&uni.navigateTo({
				url:'../login/login'
			})
		}
	}
</script>

<style lang="less">
page {
	background-color: #F5F5F5;
}
.top-header {
	position: absolute;
	top: 0;
	z-index: 999;
	.h-tip {
		font-size: 40rpx;
		font-weight: bold;
		color: #fff;
		margin-top: 20rpx;
		margin-left: 50rpx;
	}
}
.grid-content {
	position: relative;
	width: 690rpx;
	height: 400rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	overflow: hidden;
	padding-right: 58rpx;
	display: flex;
	justify-content: space-between;
	.c-left {
		margin-left: 52rpx;
		.l-text1 {
			color: #2878FF;
			font-weight: bold;
			font-size: 40rpx;
			margin-top: 106rpx;
		}
		.l-text2 {
			font-size: 32rpx;
			color: #222;
			margin-top: 40rpx;
		}
		.l-text3 {
			width: 120rpx;
			height: 40rpx;
			line-height: 40rpx;
			text-align: center;
			background: #2878FF;
			border: 1rpx solid #2878FF;
			border-radius: 20rpx;
			margin-top: 66rpx;
			font-size: 28rpx;
			color: #FFFFFF;
		}
	}
}
.explain-list {
	width: 690rpx;
	height: 580rpx;
	background: #FFFFFF;
	border-radius: 12rpx;
	padding: 0 30rpx;
	overflow: hidden;
	margin: 30rpx auto 0;
	.l-title {
		font-size: 36rpx;
		font-weight: bold;
		color: #222222;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
	}
	.l-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;
		font-size: 28rpx;
		color: #222222;
		image {
			width: 24rpx;
			height: 24rpx;
		}
	}
}
</style>
