<template>
	<view>
		<view class="user-list">
			<view class="user-item" :hover-stay-time="200" hover-class="u-hover-class">
				<view class="i-left">登录密码</view>
				<view class="i-right">
					<image src="/static/images/index/determine@2x.png" mode=""></image>
				</view>
			</view>
			<view class="user-item" :hover-stay-time="200" hover-class="u-hover-class">
				<view class="i-left">建议反馈</view>
				<view class="i-right">
					3323400699@qq.com
				</view>
			</view>
			<view class="user-item" :hover-stay-time="200" hover-class="u-hover-class">
				<view class="i-left">关于</view>
				<view class="i-right">
					版本号V1.0.0
				</view>
			</view>
		</view>
		<view class="exit-btn">
			<u-button :custom-style="customStyle" shape="circle" :ripple="true">退出登录</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle:{
					background: '#2878FF',
					color:'#fff',
					height:'80rpx',
					width:'690rpx'
				}
			};
		}
	}
</script>

<style lang="less">
.user-list {
	padding: 0 30rpx;
	background-color: #FFFFFF;
	.user-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
		height: 100rpx;
		
		.i-left {
			color: #666;
			font-size: 28rpx;
		}
		.i-right {
			display: flex;
			align-items: center;
			color: #aaa;
			font-size: 28rpx;
			image {
				width: 24rpx;
				height: 24rpx;
			}
		}
	}
}
.exit-btn {
	position: absolute;
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
