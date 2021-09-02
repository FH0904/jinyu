<template>
	<view>
		<view class="card-list">
			<view class="l-item" v-for="(item,index) in 4" :key="index" >
				<image src="/static/images/profile/capital@2x.png" mode=""></image>
				<view class="i-right">
					<view class="r-text1">中国招商银行</view>
					<view class="r-text2">储蓄卡</view>
					<view class="r-text3">**** **** **** 6777</view>
				</view>
			</view>
		</view>
		<u-button :custom-style="customStyle" shape="circle" :ripple="true" @click="navTo('/pages/profile/add-card')">
			<view class="d-flex a-center j-center">
				<image src="/static/images/profile/add@2x.png" mode="" style="margin-right: 20rpx; width: 40rpx;height: 40rpx;"></image>
				<text>添加银行卡</text>
			</view>
		</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle:{
					background: '#fff',
					color:'#2878FF',
					marginTop: '40rpx',
					height:'80rpx',
					width:'400rpx'
				}
			};
		},
		methods: {
			navTo(url) {
				uni.navigateTo({
					url
				})
			},
		}
	}
</script>

<style lang="less">
.card-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	.l-item {
		width: 690rpx;
		height: 240rpx;
		background: url(/static/images/profile/card1@2x.png);
		background-size: 100% 100%;
		margin-top: 20rpx;
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
</style>
