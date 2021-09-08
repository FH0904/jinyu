<template>
	<view>
		<view class="w-title">到账银行卡</view>
		<view class="card-list">
			<view class="l-item">
				<image src="/static/images/profile/capital@2x.png" mode=""></image>
				<view class="i-right">
					<view class="r-text1">中国招商银行</view>
					<view class="r-text2">储蓄卡</view>
					<view class="r-text3">**** **** **** 6777</view>
				</view>
			</view>
		</view>
		<view class="withdrawal-input">
			<view class="i-title">
				<view class="t-left">
					<text class="l-text1">可提现余额 </text>
					<text class="l-text2">1000.00</text>
				</view>
				<view class="t-right">全部提现</view>
			</view>
			<view class="i-input">
				<text class="i-Symbol">¥</text>
				<input type="text" value="" placeholder="请输入10元以上提现金额" placeholder-style="font-size: 28rpx;font-weight: normal;"/>
			</view>
		</view>
		<view class="w-tip">单笔提现最小金额为10元，每笔需扣除2元提现手续费</view>
		<view class="qr-btn tabbar">
			<u-button :custom-style="customStyle" shape="circle" :ripple="true">立即提现</u-button>
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
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url:'/pages/profile/withdrawal-list'
			})
		},
	}
</script>

<style lang="less">
.w-title {
	font-size: 32rpx;
	font-weight: bold;
	color: #333333;
	margin: 30rpx 0 0 30rpx;
}
.card-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	.l-item {
		width: 690rpx;
		height: 240rpx;
		background: url(/static/images/profile/card1@2x.png);
		background-size: 100% 100%;
		margin-top: 30rpx;
		display: flex;
		padding:40rpx 0 0 30rpx ;
		image {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		.i-right {
			margin-left: 24rpx;
			color: #FFFFFF;
			.r-text1 {
				font-size: 32rpx;
				font-weight: bold;
				
			}
			.r-text2 {
				font-size: 24rpx;
				font-weight: 400;
				margin-top: 18rpx;
			}
			.r-text3 {
				font-size: 48rpx;
				font-weight: bold;
				margin-top: 50rpx;
			}
		}
	}
}
.withdrawal-input {
	width: 750rpx;
	height: 230rpx;
	background: #FFFFFF;
	border-radius: 20rpx 20rpx 0px 0px;
	padding: 0 30rpx;
	.i-title {
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
		font-size: 28rpx;
		.t-left {
			.l-text1 {
				color: #222222;
			}
			.l-text2 {
				color: #2878FF;
				font-weight: bold;
				margin-left: 10rpx;
			}
		}
		.t-right {
			color: #2878FF;
		}
	}
	.i-input {
		display: flex;
		align-items: center;
		margin-top: 50rpx;
		text {
			font-size: 40rpx;
			font-weight: bold;
			color: #222222;
		}
		input {
			width: 500rpx;
			margin-left: 20rpx;
			font-size: 40rpx;
			font-weight: bold;
		}
	}
}
.w-tip {
	font-size: 24rpx;
	color: #AAAAAA;
	text-align: center;
	margin-top: 30rpx;
}
.qr-btn {
	position: fixed;
	bottom: 0;
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
