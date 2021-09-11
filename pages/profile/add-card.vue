<template>
	<view style="">
		<view style="background-color: #FFFFFF;padding: 0 30rpx;">
			<view class="c-item">
				<view class="c-left">银行卡号</view>
				<view class="c-right">
					<input type="number" placeholder="请输入银行卡号" placeholder-style="color: #AAAAAA;"/>
				</view>
			</view>
			<view class="c-item">
				<view class="c-left">银行</view>
				<view class="c-right">
					<view class="r-text">
						<picker @change="bindPickerChange1" :value="index1" :range="array1" range-key="bankName">
							<block v-if="index1 == -1">
								<text>请选择银行</text>
								<image src="/static/images/profile/determine@2x.png" mode=""></image>
							</block>
							<block v-else>
								<text style="color: #222;">{{array1[index1].bankName}}</text>
								<image src="/static/images/profile/determine@2x.png" mode=""></image>
							</block>
						</picker>
					</view>
				</view>
			</view>
			<view class="c-item" style="border: 0;">
				<view class="c-left">卡类型</view>
				<view class="c-right">
					<view class="r-text">
						
						
						<picker @change="bindPickerChange2" :value="index2" :range="array2">
							<block v-if="index2 == -1">
								<text>请选择卡类型</text>
								<image src="/static/images/profile/determine@2x.png" mode=""></image>
							</block>
							<block v-else>
								<text style="color: #222;">{{array2[index2]}}</text>
								<image src="/static/images/profile/determine@2x.png" mode=""></image>
							</block>
						</picker>
					</view>
				</view>
			</view>
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
				},
				array1: [],
				index1: -1,
				array2: ['储蓄卡','信用卡'],
				index2: -1,
			};
		},
		methods:{
			navTo() {
				uni.navigateTo({
					url:'add-card2'
				})
			},
			async getAllBankList() {
				let res = await this.$http.queryAllBankList()
				console.log(res);
				this.array1 = res.data
			},
			bindPickerChange1(e){
				this.index1 = e.target.value
			},
			bindPickerChange2(e){
				this.index2 = e.target.value
			},
		},
		onShow() {
			this.getAllBankList()
		}
	}
</script>

<style lang="less">
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
