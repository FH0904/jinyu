<template>
	<view>
		<view class="top-header">
			<u-navbar :background="background" :is-fixed="false" :is-back="false" :border-bottom="false"></u-navbar>
			<view class="user-info" @click="navTo('/pages/profile/user-information')">
				<view class="avatar">
					<image src="/static/images/profile/photo@2x.png" mode=""></image>
				</view>
				<view class="i-left">
					<view class="l-tel">
						<text>176****0910</text>
						<image src="/static/images/profile/icon_wsm@2x.png" mode=""></image>
					</view>
					<!-- <view class="l-rate">费率 0.49%+1</view> -->
				</view>
			</view>
		</view>
		<u-image width="100%" height="460rpx" src="/static/images/index/top_backdrop@2x.png"></u-image>
		
		
		<view class="team-msg">
			<view class="m-item" @click="navTo('/pages/profile/my-wallet')" style="border-right: 1px solid #EEEEEE;" :hover-stay-time="200" hover-class="u-hover-class">
				<text class="l-numner">9999.99</text>
				<text class="l-text">钱包(元)</text>
			</view>
			<view class="m-item" @click="navTo('/pages/profile/my-team')" :hover-stay-time="200" hover-class="u-hover-class">
				<text class="l-numner">999999</text>
				<text class="l-text">团队(人)</text>
			</view>
		</view>
		
		
		<view class="explain-list">
			<view class="l-list" @click="navTo('/pages/profile/my-card')" :hover-stay-time="200" hover-class="u-hover-class">
				<image src="/static/images/profile/wddd@2x.png" mode=""></image>
				<view class="l-right">
					<text>银行卡</text>
					<image src="/static/images/index/determine@2x.png" mode=""></image>
				</view>
			</view>
			<view class="l-list" :hover-stay-time="200" hover-class="u-hover-class">
				<image src="/static/images/profile/bill@2x.png" mode=""></image>
				<view class="l-right">
					<text>账单</text>
					<image src="/static/images/index/determine@2x.png" mode=""></image>
				</view>
			</view>
			<view class="l-list" :hover-stay-time="200" hover-class="u-hover-class" @click="navTo('/pages/profile/setting')">
				<image src="/static/images/profile/set@2x.png" mode=""></image>
				<view class="l-right">
					<text>设置</text>
					<image src="/static/images/index/determine@2x.png" mode=""></image>
				</view>
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
.user-info {
	margin-top: 40rpx;
	padding-left: 40rpx;
	display: flex;
	.avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 140rpx;
		height: 140rpx;
		background-color: rgba(255,255,255,.2);
		border-radius: 50%;
		image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
	}
	.i-left {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-left: 34rpx;
		.l-tel {
			display: flex;
			font-size: 32rpx;
			font-weight: bold;
			color: #FFFFFF;
			image {
				width: 110rpx;
				height: 32rpx;
				margin-left: 18rpx;
			}
		}
		.l-rate {
			margin-top: 20rpx;
			font-size: 28rpx;
			color: #fff;
		}
	}
}
.team-msg {
	display: flex;
	position: absolute;
	left: 0;
	right: 0;
	width: 690rpx;
	height: 190rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	margin: -100rpx auto 0;
	.m-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 86rpx;
		margin-top: 54rpx;
		.l-numner {
			font-size: 40rpx;
			font-weight: bold;
			color: #2878FF;
		}
		.l-text {
			margin-top: 22rpx;
			font-size: 28rpx;
			color: #222222;
		}
	}
}
.explain-list {
	width: 690rpx;
	height: 302rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	padding: 0 30rpx;
	overflow: hidden;
	margin: 120rpx auto 0;
	.l-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		
		font-size: 28rpx;
		color: #222222;
		image {
			width: 40rpx;
			height: 40rpx;
		}
		.l-right {
			flex: 1;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #EEEEEE;
			margin-left: 20rpx;
			image {
				width: 24rpx;
				height: 24rpx;
			}
		}
	}
	.l-list:nth-child(3){
		.l-right {
			border-bottom: 0px solid #EEEEEE;
		}
	}
}
</style>
