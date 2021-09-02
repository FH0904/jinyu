<template>
	<view>
		<view class="top-header">
			<u-navbar :custom-back="customBack" title="我的团队" title-color="#fff" title-bold :background="background" :is-fixed="false"  :border-bottom="false" back-icon-color="#fff"></u-navbar>
			<view class="h-info">
				<view class="i-item" style="border-right: 1px solid rgba(255,255,255,.3);">
					<text class="i-text1">会员总数(人)</text>
					<text class="i-text2">10318</text>
				</view>
				<view class="i-item">
					<text class="i-text1">累积收入(元)</text>
					<text class="i-text2">10318</text>
				</view>
			</view>
		</view>
		<view class="team-list">
			<view class="l-item" v-for="(item,index) in 4">
				<image src="/static/images/profile/capital@2x.png" mode=""></image>
				<view class="i-right">
					<view class="r-list1">
						<view class="l-name">
							<text>未实名</text>
							<image src="../../static/images/profile/realname1@2x.png" mode=""></image>
						</view>
						<view class="l-tel">136****4517</view>
					</view>
					<view class="r-list2">
						<text class="l-text1">10</text>
						<text class="l-text2">人</text>
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
				background:{
					background: 'transparent'
				},
			};
		},
		methods:{
			customBack() {
				uni.navigateBack()
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
	width: 750rpx;
	min-height: 170rpx;
	background: #FFFFFF;
	border-radius: 20rpx 20rpx 0rpx 0rpx;
	margin-top: -60rpx;
	padding: 0 30rpx;
	.l-item {
		display: flex;
		align-items: center;
		height: 170rpx;
		width: 100%;
		border-bottom: 1px solid #EEEEEE;
		image {
			width: 80rpx;
			height: 80rpx;
		}
		.i-right {
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 20rpx;
			.r-list1 {
				.l-name {
					display: flex;
					align-items: center;
					text {
						font-size: 32rpx;
						font-weight: 500;
						color: #222222;
					}
					image {
						width: 40rpx;
						height: 40rpx;
						margin-left: 20rpx;
					}
				}
				.l-tel {
					margin-top: 14rpx;
					color: #aaa;
				}
			}
			.r-list2 {
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				font-weight: 400;
				color: #AAAAAA;
				margin-top: 16rpx;
				font-size: 28rpx;
				.l-text1 {
					color: #2878FF;
					font-weight: bold;
				}
				.l-text2 {
					color: #222;
				}
			}
		}
	}
}
</style>
