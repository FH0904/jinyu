<template>
	<view>
		<view class="wallet-info">
			<view class="balance-text">可提现余额(元)</view>
			<view class="balance-price">
				<view class="b-num">9999.00</view>
				<view class="b-btn">去提现</view>
			</view>
			<view class="line"></view>
			<view class="balance-bottom">
				<view class="b-item" style="border-right: 1px solid rgba(255,255,255,.3);">
					<text>累计收入(元)</text>
					<text class="i-number">9999</text>
				</view>
				<view class="b-item" @click="navTo('/pages/profile/my-team')">
					<view class="d-flex a-center">
						<text>我的团队(人)</text>
						<image src="/static/images/profile/determine2@2x.png" mode="" style="margin-left: 14rpx; width: 24rpx;height: 24rpx;"></image>
					</view>
					
					<text class="i-number">9999</text>
				</view>
			</view>
		</view>
		<view class="wallet-list">
			<view class="l-item" v-for="(item,index) in 4">
				<image src="/static/images/profile/capital@2x.png" mode=""></image>
				<view class="i-right">
					<view class="r-list1">
						<text>团队还款</text>
						<text>+99元</text>
					</view>
					<view class="r-list2">
						<text>2021-02-20 09:50</text>
						<text>余额：3.00 元</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			navTo(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="less">
.wallet-info {
	background: linear-gradient(-90deg, #1B91FF 0%, #0056E4 100%);
	width: 690rpx;
	height: 360rpx;
	margin: 20rpx auto 0;
	border-radius: 20rpx;
	padding: 0 30rpx;
	overflow: hidden;
	.balance-text {
		font-size: 28rpx;
		color: #FFFFFF;
		margin-top: 58rpx;
	}
	.balance-price {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 28rpx;
		.b-num {
			font-size: 60rpx;
			font-weight: bold;
			color: #FFFFFF;
		}
		.b-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 160rpx;
			height: 60rpx;
			background: #FFFFFF;
			border-radius: 30rpx;
			color: #2878FF;
			font-size: 28rpx;
		}
	}
	.line {
		width: 620rpx;
		height: 1rpx;
		background: #FFFFFF;
		opacity: 0.3;
		margin-left: 4rpx;
		margin-top: 40rpx;
	}
	.balance-bottom {
		display: flex;
		margin-top: 40rpx;
		.b-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 80rpx;
			color: #FFFFFF;
			font-size: 24rpx;
			.i-number {
				font-size: 36rpx;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
}
.wallet-list {
	width: 750rpx;
	min-height: 400rpx;
	background: #FFFFFF;
	border-radius: 20rpx 20rpx 0px 0px;
	margin: -10rpx auto 0;
	padding: 10rpx 30rpx;
	.l-item {
		display: flex;
		align-items: center;
		height: 140rpx;
		width: 100%;
		border-bottom: 1px solid #EEEEEE;
		image {
			width: 80rpx;
			height: 80rpx;
		}
		.i-right {
			flex: 1;
			margin-left: 20rpx;
			.r-list1 {
				display: flex;
				justify-content: space-between;
				font-size: 32rpx;
				font-weight: bold;
				color: #222222;
			}
			.r-list2 {
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				font-weight: 400;
				color: #AAAAAA;
				margin-top: 16rpx;
			}
		}
	}
}
</style>
