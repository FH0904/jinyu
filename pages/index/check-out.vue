<template>
	<view>
		<view class="top-header">
			<u-navbar :custom-back="customBack" title="收银台" title-color="#fff" title-bold :background="background" :is-fixed="false"  :border-bottom="false" back-icon-color="#fff"></u-navbar>
			<view class="h-info">
				<view class="i-item" style="border-right: 1px solid rgba(255,255,255,.3);">
					<text class="i-text1">刷卡金额(元)</text>
					<text class="i-text2">10318</text>
				</view>
				<view class="i-item">
					<text class="i-text1">到账金额(元)</text>
					<text class="i-text2">10318</text>
				</view>
			</view>
		</view>
		<view class="team-list">
			<view class="l-item" style="border-right: 1px solid rgba(255,255,255,.3);">
				<text class="i-text1">费率</text>
				<text class="i-text2">0.59%+1 </text>
			</view>
			<view class="l-item">
				<text class="i-text1">手续费(元)</text>
				<text class="i-text2">10318</text>
			</view>
		</view>
		<view class="tip">
			<view class="t-list">温馨提示：</view>
			<view class="t-list">到账金额=刷卡金额-(收银金额*0.59%+1)</view>
			<view class="t-list">9940.00=10000.00-(10000*0.59%+1)</view>
		</view>
		
		<view class="exit-btn">
			<u-button :custom-style="customStyle" shape="circle" :ripple="true" @click="navTo('/pages/index/verification-code')">下一步</u-button>
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
					height:'80rpx',
					width:'690rpx'
				}
			};
		},
		methods:{
			customBack() {
				uni.navigateBack()
			},
			navTo(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="less">
.top-header {
	width: 750rpx;
	height: 400rpx;
	background: linear-gradient(-90deg, #1B91FF 0%, #0056E4 100%);
	.h-info {
		display: flex;
		height: 130rpx;
		margin-top: 60rpx;
		color: #FFFFFF;
		.i-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.i-text1 {
				font-size: 28rpx;
			}
			.i-text2 {
				font-size: 48rpx;
				font-weight: bold;
				margin-top: 30rpx;
			}
		}
	}
}
.team-list {
	display: flex;
	width: 750rpx;
	height: 200rpx;
	background: #FFFFFF;
	border-radius: 20rpx 20rpx 0rpx 0rpx;
	margin-top: -60rpx;
	padding: 0 30rpx;
	.l-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.i-text1 {
			font-size: 26rpx;
			color: #AAAAAA;
		}
		.i-text2 {
			font-size: 40rpx;
			font-weight: bold;
			margin-top: 30rpx;
			color: #222;
		}
	}
}
.tip {
	font-size: 24rpx;
	color: #666666;
	margin: 40rpx 0 0 30rpx;
	.t-list {
		line-height: 40rpx;
	}
}
.exit-btn {
	position: fixed;
	bottom: 0;
	width: 750rpx;
	height: 120rpx;
	background: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 30rpx;
}
</style>
