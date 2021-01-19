<!-- 我的待办页面 -->
<template>
	<view class="body">
		<u-navbar :is-back="true" title="我的待办" title-color="#ffffff" title-size="36rpx" back-icon-color="#fff" :background="background" style="margin-top:-88rpx">
		</u-navbar>
		<u-tabs name="cate_name" active-color="#43B4AE" inactive-color="#4D4D4D" count="cate_count" :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="container">
			<view class="un_read">
				<view class="name">今日待办消息未读消息</view>
				<view class="litel_name">2020-11-11</view>
			</view>
			<u-line class="line" color="#000000" style="opacity: 0.2"/>
			<view class="un_read">
				<view class="name">今日待办消息未读消息</view>
				<view class="litel_name">2020-11-10</view>
			</view>
			<u-line class="line" color="#000000" style="opacity: 0.2"/>
			<view class="un_read">
				<view class="name">今日待办消息未读消息</view>
				<view class="litel_name">2020-11-10</view>
			</view>
			<u-line class="line" color="#000000" style="opacity: 0.2"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#44B4AE',
				},
				list: [{
					cate_name: '未读消息'
				}, {
					cate_name: '已读消息'
				}, ],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.body {
		width: 100%;
	}
	.container {
		background-color: #FFFFFF;
		padding: 0 30rpx;
	}
	.un_read {
		/* width: 690rpx; */
		height: 142rpx;
		padding: 31rpx  30rpx 48rpx 30rpx ;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		position: relative;
}
	.name{
		display: inline-block;
		height: 50rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 50rpx;
	}
	.litel_name{
		display: inline-block;
		/* // width: 156rpx; */
		margin-left: 47rpx;
		margin-top: 17rpx;
		height: 21rpx;
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 23rpx;
		position: absolute;
		right: 31rpx;
		top: 31rpx;
	}
</style>
