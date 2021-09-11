<template>
	<view style="font-size: 0;">
		<u-image width="100%" height="1200" src="/static/images/invitation/background@2x.png"></u-image>
		<view class="i-bottom">
			<view class="b-box1">
				<view class="b-bar">邀请谁</view>
				<view class="b-content">有 <text style="color: #0D73F2;font-weight: bold;margin: 0 10rpx;">2张以上</text> 信用卡的人</view>
			</view>
			<view class="b-box2">
				<view class="b-bar">怎么奖励?</view>
				<view class="b-list">
					<view class="l-item">
						<text class="i-text1">[直接邀请人]</text>
						<text class="i-text2">每划卡1万元，奖励您3元</text>
					</view>
					<view class="l-item">
						<text class="i-text1">[间接邀请人]</text>
						<text class="i-text2">每划卡1万元，奖励您2元</text>
					</view>
					<view class="l-example">
						<view class="e-title">[例]</view>
						<view class="e-list">马云邀请了马化腾，马化腾邀请了刘强东；</view>
						<view class="e-list">马化腾划卡1万元，马云收到奖励3元；</view>
						<view class="e-list">刘强东划卡1万元，马化腾收到奖励3元，马云收到奖励2元。</view>
					</view>
				</view>
			</view>
			<view class="i-tip">最终解释权归金鱼所有</view>
			<view class="invitation-btn" >
				<u-button :custom-style="customStyle" shape="circle" :ripple="true" @click="navTo('/pages/invitation/invite-friend')">邀请</u-button>
			</view> 
			<view class="tabbar"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle:{
					width: '690rpx',
					height: '80rpx',
					background: 'linear-gradient(0deg, #1B91FF 0%, #0056E4 100%)',
					borderRadius: '40rpx',
					color:'#fff'
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
	background-color: #1f158f;
}
.i-bottom {
	.b-box1 {
		position: relative;
		width: 690rpx;
		height: 240rpx;
		text-align: center;
		line-height: 260rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: -360rpx auto 0;
		.b-bar {
			position: absolute;
			left: 50%;
			top: -20rpx;
			transform: translateX(-50%);
			width: 470rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			font-weight: bold;
			background: url(../../static/images/invitation/title@2x.png);
			background-size: 100% 100%;
			color: #FFFFFF;
			font-size: 36rpx;
		}
		.b-content {
			font-size: 32rpx;
		}
	}
	.b-box2 {
		position: relative;
		width: 690rpx;
		height: 520rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: 40rpx auto 0;
		padding: 60rpx 56rpx 0 40rpx;
		.b-bar {
			position: absolute;
			left: 50%;
			top: -20rpx;
			transform: translateX(-50%);
			width: 470rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			font-weight: bold;
			background: url(../../static/images/invitation/title@2x.png);
			background-size: 100% 100%;
			color: #FFFFFF;
			font-size: 36rpx;
		}
		.b-list {
			font-size: 28rpx;
			.l-item {
				margin-top: 40rpx;
				.i-text1 {
					font-weight: bold;
					color: #0D72F1;
					margin-right: 16rpx;
				}
			}
			.l-example {
				margin-top: 40rpx;
				.e-title {
					font-weight: bold;
					color: #0D72F1;
				}
				.e-list {
					margin-top: 20rpx;
					font-size: 28rpx;
					line-height: 40rpx;
				}
			}
		}
	}
	.i-tip {
		text-align: center;
		margin: 40rpx 0;
		font-size: 24rpx;
		color: #AAAAAA;
	}
	.invitation-btn {
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
