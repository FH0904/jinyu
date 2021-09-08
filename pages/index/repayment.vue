<template>
	<view>
		<view class="top-header">
			<u-navbar  :background="background" title="邀请好友" title-color="#fff" title-bold :border-bottom="false" back-icon-color="#fff" >
				<view style="display: flex;justify-content: flex-end;flex: 1;padding-right: 32rpx;font-size: 28rpx;color: #FFFFFF;">
					刷卡记录
				</view>
			</u-navbar>
			<view class="h-msg">
				<view class="m-title">刷卡收款</view>
				<image src="../../static/images/index/backdrop@2x.png" mode=""></image>
			</view>
		</view>
		<view class="r-input">
			<view class="i-title">收款金额</view>
			<view class="i-input">
				<text>¥</text>
				<input type="text" value=""  placeholder="请输入收款金额" placeholder-style="font-size: 28rpx;color: #AAAAAA;"/>
			</view>
		</view>
		
		<view style="background-color: #FFFFFF;padding: 0 30rpx;margin-top: 20rpx;">
			<view class="c-item" style="border: none;">
				<view class="c-left">商品</view>
				<view class="c-right">
					<view class="r-text">
						<text>请选择</text>
						<image src="/static/images/profile/determine@2x.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view style="background-color: #FFFFFF;padding: 0 30rpx;margin-top: 20rpx;">
			<view class="c-item">
				<view class="c-left">支付卡</view>
				<view class="c-right">
					<view class="r-text">
						<text>请选择</text>
						<image src="/static/images/profile/determine@2x.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="c-item" style="border: none;">
				<view class="c-left">收款卡</view>
				<view class="c-right">
					<view class="r-text">
						<text>请选择</text>
						<image src="/static/images/profile/determine@2x.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="exit-btn">
			<view class="b-tip">防诈骗擦亮眼，拒绝诱惑不贪心</view>
			<u-button :custom-style="customStyle" shape="circle" :ripple="true" @click="navTo('/pages/index/check-out')">下一步</u-button>
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
		methods: {
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
	background-size: 100% 100%;
	.h-msg {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		margin-top: 24rpx;
		.m-title {
			font-size: 36rpx;
			font-weight: 500;
			color: #FFFFFF;
		}
		image {
			width: 280rpx;
			height: 230rpx;
		}
	}
}
.r-input {
	padding-left: 32rpx;
	width: 750rpx;
	height: 200rpx;
	background: #FFFFFF;
	overflow: hidden;
	border-radius: 20rpx 20rpx 0rpx 0rpx;
	margin-top: -70rpx;
	.i-title {
		font-size: 28rpx;
		font-weight: 500;
		color: #222222;
		margin-top: 50rpx;
	}
	.i-input {
		display: flex;
		align-items: center;
		margin-top: 46rpx;
		text {
			font-size: 40rpx;
			font-weight: bold;
			color: #222222;
		}
		input {
			font-size: 40rpx;
			font-weight: bold;
			color: #222222;
			margin-left: 20rpx;
		}
	}
}
.c-item {
	border-bottom: 1px solid #EEEEEE;
	width: 100%;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 28rpx;
	.c-left {
		color: #666666;
	}
	.c-right {
		color: #222;
		.r-text {
			display: flex;
			align-items: center;
			color: #aaa;
			image {
				width: 24rpx;
				height: 24rpx;
				margin-left: 20rpx;
			}
		}
		input {
			font-size: 28rpx;
			text-align: right;
			color: #222;
		}
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
	.b-tip {
		position: absolute;
		top: -60rpx;
		font-size: 24rpx;
		color: #AAAAAA;
	}
}
</style>
