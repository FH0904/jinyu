<template>
	<view>
		<view class="c-tip">
			信息加密处理，仅用于银行验证，请验证您本人的银行卡，认证通过后身份信息不可更改
		</view>
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
		<view style="background-color: #FFFFFF;padding: 0 30rpx;border-radius: 20rpx 20rpx 0px 0px;">
			<view class="c-item">
				<view class="c-left">银行卡号</view>
				<view class="c-right">金鱼鱼</view>
			</view>
			<view class="c-item">
				<view class="c-left">证件类型</view>
				<view class="c-right">身份证</view>
			</view>
			<view class="c-item" style="border: 0;">
				<view class="c-left">证件号码</view>
				<view class="c-right">4********************8</view>
			</view>
		</view>
		
		<view style="background-color: #FFFFFF;padding: 0 30rpx;margin-top: 20rpx;">
			<view class="c-item">
				<view class="c-left">银行卡号</view>
				<view class="c-right">
					<input type="number" placeholder="请输入cvn2" placeholder-style="color: #AAAAAA;"/>
				</view>
			</view>
			<view class="c-item">
				<view class="c-left">cvn2</view>
				<view class="c-right">
					<view class="r-text">
						<text>请选择银行</text>
						<image src="/static/images/profile/determine@2x.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="c-item" style="border: 0;">
				<view class="c-left">银行预留手机号</view>
				<view class="c-right">
					<view class="r-text">
						<text style="color: #222;">176****0910</text>
					</view>
				</view>
			</view>
		</view>
		
		<view style="background-color: #FFFFFF;padding: 0 30rpx;margin-top: 20rpx;">
			<view class="c-item">
				<view class="c-left">开户行地址</view>
				<view class="c-right">
					<view class="r-text">
						<text>请选择</text>
						<image src="/static/images/profile/determine@2x.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="c-item">
				<view class="c-left">支行名称</view>
				<view class="c-right">
					<input type="number" placeholder="请输入支行名称" placeholder-style="color: #AAAAAA;"/>
				</view>
			</view>
			<view class="c-item">
				<view class="c-left">账单日</view>
				<view class="c-right">
					<view class="r-text">
						<text>请选择</text>
						<image src="/static/images/profile/determine@2x.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="c-item" style="border: none;">
				<view class="c-left">还款日</view>
				<view class="c-right">
					<view class="r-text">
						<text>请选择</text>
						<image src="/static/images/profile/determine@2x.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="user-agreement">
			<label class="radio">
				<radio value="" style="transform: scale(.8);" /><text style="color: #666;">阅读并同意</text><text style="color: #2878FF;">《金鱼实名认证协议》</text>
			</label>
		</view>
		
		<view class="exit-btn">
			<u-button :custom-style="customStyle" shape="circle" :ripple="true" @click="navTo">下一步</u-button>
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
.c-tip {
	width: 750rpx;
	height: 90rpx;
	background: #DFEAFC;
	padding: 18rpx 30rpx;
	font-size: 24rpx;
	color: #666666;
	line-height: 30rpx;
}
.card-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20rpx;
	.l-item {
		width: 690rpx;
		height: 240rpx;
		background: url(/static/images/profile/card1@2x.png);
		background-size: 100% 100%;
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
.c-item {
	border-bottom: 1px solid #EEEEEE;
	width: 100%;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 28rpx;
	background: #FFFFFF;
	
	
	.c-left {
		color: #666666;
	}
	.c-right {
		color: #AAAAAA;
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
.user-agreement {
	.radio {
		display: flex;
		align-items: center;
		font-size: 28rpx;
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
}
</style>
