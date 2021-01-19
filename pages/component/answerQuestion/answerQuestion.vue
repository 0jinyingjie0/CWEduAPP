<template>
<!-- 答题页面 -->
  <view class style="padding: 20rpx;">
    <view class style="width:100%;height: 30rpx;">
      <view style="margin-left:15rpx;float: left;height:30rpx;margin-top: 10up">作业1</view>
      <view class style="float:right;padding-right:20rpx;height: 30rpx;">1/100</view>
    </view>
    <view class style="margin-left:15rpx;margin-top:15rpx">(单选题，1.0分)经济学的基础是什么</view>
    <view class="item" style>
      <view class="info">A</view>
      <view class="info_word">经济学的基础是</view>
    </view>
	 <view class="item" style>
      <view class="info">B</view>
      <view class="info_word">经济学的基础是</view>
    </view>
	 <view class="item" style>
      <view class="info">C</view>
      <view class="info_word">经济学的基础是</view>
    </view>
	 <view class="item" style>
      <view class="info">D</view>
      <view class="info_word">经济学的基础是</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.item {
  height: 80rpx;
  /* margin-top: 10rpx; */
}
.info {
  display:inline-block;
  width: 40rpx;
  height: 40rpx;
  background-color: #ccc;
  border-radius: 50rpx;
  margin-left: 15rpx;
  margin-top: 15rpx;
  text-align: center;
  line-height: 40rpx;
  font-size: 20rpx;
}
.info_word {
  display:inline-block;
  line-height: 40rpx;
  margin-top: 15rpx;
  margin-left: 16rpx;
}
</style>
