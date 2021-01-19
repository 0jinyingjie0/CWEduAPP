<template>
	<view class="container">
		<view style="position:relative">
			<input class="uni-input" confirm-type="search" placeholder="大家都在搜:公务员" />
			<button class="btn">搜索</button>
			<!-- <button type="default" style="float: left;">通过方法跳转到about页面</button> -->
		</view>
		<view class="intro" style="margin-top:16rpx">
			<p class="title">学习大作战</p>
			<p class="title1">让学习简单起来</p>
			<p class="title2">让你更优秀</p>
		</view>
		<view class="">
			<p class="word">快速通道</p>
			   <view class="little_box"  @click="toMyBacklog">
				   <image src="../../static/daiban@2x.png" mode="" style="width:63rpx;height:60rpx;margin-left:30rpx;margin-top:20rpx;float:left"></image>
				   <p style="float:left;margin-top: 38rpx;margin-left:44rpx;font-size: 24rpx;">我的待办</p>
			   </view>
			   <view class="little_box1" @click="toMyStudy">
				   <image src="../../static/xuexi@2x(1).png" mode="" style="width:63rpx;height:60rpx;margin-left:30rpx;margin-top:20rpx;float:left"></image>
				   <p style="float:left;margin-top: 38rpx;margin-left:44rpx;font-size: 24rpx;">我的学习</p>
			   </view>
			   <view class="little_box" @click="toMyApply">
			   		<image src="../../static/baoming@2x.png" mode="" style="width:63rpx;height:60rpx;margin-left:30rpx;margin-top:20rpx;float:left"></image>
			   	    <p style="float:left;margin-top: 38rpx;margin-left:44rpx;font-size: 24rpx;">我要报名</p>
			   </view>
			   <view class="little_box1" @click="toMyCustom">
			   		<image src="../../static/zixun@2x.png" mode="" style="width:63rpx;height:60rpx;margin-left:30rpx;margin-top:20rpx;float:left"></image>
			   		<p style="float:left;margin-top: 38rpx;margin-left:44rpx;font-size: 24rpx;">我要咨询</p>
			   </view>
		</view>
		<view style="margin-top:280rpx">
			<p class="word1">课程试听</p>
			<view class="item1" @click="toPlayCourse">
				<image src="../../static/xuexi@2x(1).png" mode="" style="width:334rpx;height:182rpx;margin-top:30rpx"></image>
				<p style="font-size: 26rpx;font-weight: 500;color: #333333;margin-top:20rpx">计算机应用基础</p>
				<p style="color: #999999;font-size:24rpx;margin-top:10rpx">免费试听</p>
			</view>
			<view class="item2" @click="toPlayCourse">
				<image src="../../static/xuexi@2x(1).png" mode="" style="width:334rpx;height:182rpx;margin-top:30rpx"></image>
				<p style="font-size: 26rpx;font-weight: 500;color: #333333;margin-top:20rpx">建筑制图</p>
				<p style="color: #999999;font-size:24rpx;margin-top:10rpx">免费试听</p>
			</view>
			<view class="item1" @click="toPlayCourse">
				<image src="../../static/xuexi@2x(1).png" mode="" style="width:334rpx;height:182rpx;margin-top:30rpx"></image>
				<p style="font-size: 26rpx;font-weight: 500;color: #333333;margin-top:20rpx">计算机应用基础</p>
				<p style="color: #999999;font-size:24rpx;margin-top:10rpx">免费试听</p>
			</view>
			<view class="item2" @click="toPlayCourse">
				<image src="../../static/xuexi@2x(1).png" mode="" style="width:334rpx;height:182rpx;margin-top:15.5rpx"></image>
				<p style="font-size: 26rpx;font-weight: 500;color: #333333;margin-top: 20rpx;">建筑制图</p>
				<p style="color: #999999;font-size:24rpx;margin-top:10rpx">免费试听</p>
			</view>
		</view>
		
		<text class="intro"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			toMyStudy(){
				uni.navigateTo({
					url:"../study/study"
				})
			},
			toMyApply(){
				uni.navigateTo({
					url:"../apply/index"
				})
			},
			toMyCustom(){
				uni.navigateTo({
					url:"../component/customerServe"
				})
			},
			toMyBacklog(){
				uni.navigateTo({
					url:"../myset/backlog"
				})
			},
			toPlayCourse() {
				uni.navigateTo({
					url:"/pages/courseModule/coursePlay"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 15rpx;
		font-size: 14rpx;
		line-height: 24rpx;
	}
	.btn{
		position:absolute;
		right:0rpx;
		top: 0rpx;
		width: 138rpx;
        height: 70rpx;
        background: #44B4AE;
        border-radius: 10rpx;
        // width: 58px;
        // height: 28rpx;
        line-height: 70rpx;
        text-align: center;
        font-size: 30rpx;
        font-weight: 500;
        color: #FFFFFF;
	}
	.intro{
		// width:100%;
		height: 218rpx;
		background: linear-gradient(-30deg, #69E0DA 0%, #68DFD9 100%);
		margin-top:26rpx;
		margin:0 auto;
		border-radius: 10rpx;
	}
	.title{
		color: #FFFFFF;
		font-size: 32rpx;
		margin-left:2rpx;
		/* margin-top:32rpx; */
		padding:32rpx;
		font-weight: bold;
	}
	.title1{
		font-size: 24rpx;
		color: #FFFFFF;
		margin-left:32rpx;
	}
	.title2{
		font-size:24rpx;
		color: #FFFFFF;
		margin-left:32rpx;
		line-height: 32rpx;
		margin-top:16rpx
	}
	.uni-input{
		width:98%;
		height:70rpx;
		line-height:70rpx;	
        background: #F0F0F0;
		font-size:25rpx;
		padding-left:15rpx;
		}
	.word{
		height:15rpx;
		font-size: 32rpx;
		font-weight: bold;
		margin-top:25.5rpx
	}
	.little_box{
		width: 350rpx;
		height:150rpx;
		height: 100rpx;
		margin-top: 30rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 19rpx 2rpx rgba(230, 230, 230, 0.52);
		border-radius: 10rpx;
		float: left;
	}
	.little_box1{
		width: 350rpx;
		height:50rpx;
		height: 100rpx;
		margin-top: 30rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 19rpx 2rpx rgba(230, 230, 230, 0.52);
		border-radius: 10rpx;
		float: right;
	}
	.word1{
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		margin-top:30rpx;
		}
		.item1{
			float: left;
		}
		.item2{
			float:right;
			/* /* margin-left:10rpx */
		}
		.item3{
			float:left
		}
		.item4{
			float:right
		}
	
</style>
