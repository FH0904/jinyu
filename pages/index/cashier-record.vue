<template>
	<view style="padding: 0 30rpx;">
		<view class="r-time">
			<text class="t-day">2021年10月</text>
			<image src="/static/images/index/down.png" mode=""></image>
		</view>
		<view class="r-list">
			<view class="r-item">
				<view class="i-left"></view>
				<view class="i-right">
					<view class="r-price">
						<view class="p-price1">￥5000.00</view>
						<view class="p-price2">2021-10-11 9:00:50</view>
					</view>
					<view class="r-status">已到账</view>
				</view>
			</view>
			<view class="r-item">
				<view class="i-left"></view>
				<view class="i-right">
					<view class="r-price">
						<view class="p-price1">￥5000.00</view>
						<view class="p-price2">2021-10-11 9:00:50</view>
					</view>
					<view class="r-status">已到账</view>
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
		}
	}
</script>

<style lang="less">
.r-time {
	display: flex;
	align-items: center;
	margin-top: 40rpx;
	.t-day {
		font-size: 32rpx;
		font-weight: bold;
		color: #222222;
	}
	image {
		width: 24rpx;
		height: 24rpx;
		margin-left: 20rpx;
	}
}
.r-list {
	.r-item {
		display: flex;
		align-items: center;
		height: 140rpx;
		border-bottom: 1px solid #EEEEEE;
		.i-left {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			background-color: #2C405A;
		}
		.i-right {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-left: 20rpx;
			.r-price {
				.p-price1 {
					color: #222222;
					font-size: 32rpx;
					font-weight: bold;
				}
				.p-price2 {
					font-size: 24rpx;
					color: #AAAAAA;
					margin-top: 20rpx;
				}
			}
			.r-status {
				font-size: 28rpx;
				color: #2878FF;
			}
		}
	}
}
</style>
