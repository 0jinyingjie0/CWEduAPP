<!-- 选择课程页面 -->
<template>
	<view class="body">
		<view class="tip">
			请从以下课程中选择5门课程
		</view>
		<view class="container">
			<u-checkbox-group @change="checkboxGroupChange"  :wrap=line>
				<u-checkbox  class="checkbox"  icon-size="28rpx" active-color="#44B4AE" @change="checkboxChange" shape="circle" v-model="item.checked" v-for="(item, index) in list" :key="index" :name="item.name">{{item.name}}</u-checkbox>
			</u-checkbox-group>
		</view>
		<view class="btn">
			完成
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				line:true,
				list: [{
						name: '   高等数学 （ 一 ）',
						checked: false,
						disabled: false
					},
					{
						name: '   高等数学 （ 一 ）',
						checked: false,
						disabled: false
					},
					{
						name: '   经济学基础',
						checked: false,
						disabled: false
					},
					{
						name: '   马克思主义理论基础',
						checked: false,
						disabled: false
					},
					{
						name: '   大学英语',
						checked: false,
						disabled: false
					},
					{
						name: '   计算机基础',
						checked: false,
						disabled: false
					},
					{
						name: '   毛泽东概论基础',
						checked: false,
						disabled: false
					}
				]
			}
		},
		methods: {
			// 选中某个复选框时，由checkbox时触发
					checkboxChange(e) {
						//console.log(e);
					},
					// 选中任一checkbox时，由checkbox-group触发
					checkboxGroupChange(e) {
						// console.log(e);
					},
		},
	}
</script>

<style scoped>
	.body {
		/* width: 750rpx; */
		background-color: rgba(229, 227, 227, 0.16);
	}

	.tip {
		/* width: 313px; */
		height: 61rpx;
		font-size: 24rpx;
		line-height: 61rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
		padding: 6rpx 0rpx 6rpx 30rpx;
		background-color: rgba(229, 227, 227, 0.16);
	}

	.container {
		background-color: #FFFFFF;
		padding:30rpx  0 30rpx 30rpx;
		height: 700rpx;
	}
	.checkbox{
		height: 90rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.btn{
		background-color: rgba(229, 227, 227, 0.16);
		/* width: 600rpx; */
		height: 98rpx;
		line-height: 98rpx;
		text-align: center;
		background: #44B4AE;
		border-radius: 12rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		margin-left: 45rpx;
		margin-right:45rpx ;
		margin-top: 200rpx;
	}
</style>
