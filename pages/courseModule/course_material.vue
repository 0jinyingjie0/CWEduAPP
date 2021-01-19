<!-- 课程资料页面 -->
<template>
	<view class="body">
		<view class="container">
			<view class="un_read">
				<image class="img_icon" src="../../static/shijuan@2x.png" mode=""></image>
				<view class="name">教学大纲1</view>
				<view class="litel_name">已学习8分10秒</view>
				<u-icon class="right_icon" name="arrow-right"></u-icon>
			</view>
			<u-line class="line" color="#000000" style="opacity: 0.2"/>
			<view class="un_read">
				<image class="img_icon" src="../../static/shijuan@2x.png" mode=""></image>
				<view class="name">教学大纲2</view>
				<view class="litel_name">已学习8分10秒</view>
				<u-icon class="right_icon" name="arrow-right"></u-icon>
			</view>
			<u-line class="line" color="#000000" style="opacity: 0.2"/>
		</view>
		<!-- <u-modal v-model="show" @confirm="confirm_btn" show-cancel-button :cancel-style="cancel_style"  confirm-color="#44B4AE" width="70%" :content="content"></u-modal> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#fff',
					height: "88rpx",
				},
				show: false,
				content: '你确定要清除所有缓存吗?',
				cancel_style: {
					border:'2rpx',
					borderBottom:"#000000"
					// borderRight: 1px solid '#000000',					
					// opacity: '0.1'
				},
				form:{
					clear_cache: "2.18M",
					location: false,
					versions:false
				},
				location_list:[
					{
						value: '1',
						label: '江'
					},
					{
						value: '2',
						label: '湖'
					}
				],
				versions_list:[
					{
						value: '1',
						label: '江'
					},
					{
						value: '2',
						label: '湖'
					}
				],
			}
		},
		methods: {
			all_read() { //全部已读
				this.is_show_red = false
				
			},
			confirm(e) {
				console.log(e, "22");
			},
			open() {
				this.show = true;
			},
			confirm_btn(){
				console.log("确认清除")
			}
		}
	}
</script>
<style scoped lang="scss">
	.body {
		width: 100%;
	}
	.container {
		background-color: #FFFFFF;
		padding: 0 30rpx;
	}
	.un_read {
		width: 690rpx;
		height: 142rpx;
		padding: 31rpx  30rpx 48rpx 30rpx ;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		position: relative;
	}
	.select_all {
		width: 464rpx;
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
	.img_icon{
		display: inline-block;
		width: 24rpx;
		height: 30rpx;
		margin-right: 23rpx;
	}
	.litel_name{
		// width: 156rpx;
		margin-left: 47rpx;
		margin-top: 17rpx;
		height: 21rpx;
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 23rpx;
		position: relative;
	}
	.right_icon{
		position: absolute;
		top: 50rpx;
		right: 30rpx;
		color: #CCCCCC;
	}
</style>
