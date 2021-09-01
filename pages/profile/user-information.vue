<template>
	<view>
		<view class="user-list">
			<view class="user-item" @click="" :hover-stay-time="200" hover-class="u-hover-class">
				<view class="i-left">头像</view>
				<view class="i-right">
					<image src="/static/images/profile/photo@2x.png" mode="" class="avatar"></image>
					<image src="/static/images/index/determine@2x.png" mode="" class="right"></image>
				</view>
			</view>
			<view class="user-item" :hover-stay-time="200" hover-class="u-hover-class">
				<view class="i-left">账号</view>
				<view class="i-right">
					1312312323
				</view>
			</view>
		</view>
		<view class="user-tip">实名认证(仅用于提供便捷服务)</view>
		<view class="user-list">
			<view class="user-item" :hover-stay-time="200" hover-class="u-hover-class">
				<view class="i-left">姓名</view>
				<view class="i-right">
					福警
				</view>
			</view>
			<view class="user-item" :hover-stay-time="200" hover-class="u-hover-class">
				<view class="i-left">身份证</view>
				<view class="i-right">
					1312312323
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
			.avatar {
				width: 76rpx;
				height: 76rpx;
				border-radius: 50%;
			}
			.right {
				width: 24rpx;
				height: 24rpx;
				margin-left: 16rpx;
			}
		}
	}
}
.user-tip {
		font-size: 24rpx;
		color: #666666;
		margin: 24rpx 0;
		padding: 0;
		background-color: #F5F5F5;
		margin-left: 30rpx;
}
</style>
