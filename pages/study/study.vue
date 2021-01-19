<!-- 修改手机号码页面 -->
<template>
	<view class="body">
		<view class="tab_info">
			<span class="school_title">{{school.title}}</span>
			<span class="school_semester" >{{school.semester}}</span>
			<view class="school_time">{{school.time}}</view>
			<view class="school_tab">
				<image class="school_icon" src="../../static/qiehuan.png" mode=""></image>
				<view class="school_icon_word">切换</view>
			</view>
		</view>
		<view class="container">
			<u-tabs class="tab" :list="list" height="100" active-color="#43B4AE" font-size="16rpx" :is-scroll="false" :current="current" @change="change"></u-tabs>
			<u-line class="line" color="#000000" style="opacity: 0.2"/>
			
			<view class="in_mend">
				<view class="item_lesson" @click="toCourseDetaile">
					<span>
						<image class="book_picture" src="../../static/book.png" mode=""></image>
					</span>
					<span>
						<view class="book">
							<view class="title_img">
								<view class="book_title">{{book.title}}</view>
								<view class="book_status">
									<image class="status_img" src="../../static/zaixiu@2x.png" mode=""></image>
								</view>
								
							</view>
							<view class="book_exam">{{book.exam}}</view>
							<view class="book_exam">课程已学习{{book.plan}}%</view>
							<u-line-progress active-color="#44B4AE" height="8" :show-percent="false"  :round="true" :percent="book.plan"></u-line-progress>
						</view>
						
					</span>
					<u-line class="line" color="#000000" style="opacity: 0.2"/>
				</view>
				<view class="item_lesson">
					<span>
						<image class="book_picture" src="../../static/book.png" mode=""></image>
					</span>
					<span>
						<view class="book">
							<view class="title_img">
								<view class="book_title">{{book.title}}</view>
								<view class="book_status">
									<image class="status_img" src="../../static/zaixiu@2x.png" mode=""></image>
								</view>
								
							</view>
							<view class="book_exam">{{book.exam}}</view>
							<view class="book_exam">课程已学习{{book.plan}}%</view>
							<u-line-progress active-color="#44B4AE" height="8" :show-percent="false"  :round="true" :percent="book.plan"></u-line-progress>
						</view>
						
					</span>
					<u-line class="line" color="#000000" style="opacity: 0.2"/>
				</view>
				<view class="item_lesson">
					<span>
						<image class="book_picture" src="../../static/book.png" mode=""></image>
					</span>
					<span>
						<view class="book">
							<view class="title_img">
								<view class="book_title">{{book.title}}</view>
								<view class="book_status">
									<image class="status_img" src="../../static/zaixiu@2x.png" mode=""></image>
								</view>
								
							</view>
							<view class="book_exam">{{book.exam}}</view>
							<view class="book_exam">课程已学习{{book.plan}}%</view>
							<u-line-progress active-color="#44B4AE" height="8" :show-percent="false"  :round="true" :percent="book.plan"></u-line-progress>
						</view>
						
					</span>
					<u-line class="line" color="#000000" style="opacity: 0.2"/>
				</view>
			</view>
		</view>
		<u-modal v-model="show" negative-top='650'   :content="content"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#ffffff',
					
				},
				school:{
					title:"遵义职业技术学院",
					semester:'当前学期',
					time:'2020.06.01-2020.12.15',
				},
				book:{
					title:'经济学基础',
					status:'已完成',
					plan:40,
					exam:'暂无考试安排'
				},
				list: [{
						name: '在修课程'
					}, {
						name: '已修完课程',
						count: 1
					}, 
				],
				current: 0,
				show: false,
				content: '东临碣石，以观沧海'
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			change_term(){
				this.show = true;
				console.log("222")
			},
				toCourseDetaile(){
				console.log("####");
				uni.navigateTo({
					url:"../courseModule/enterCourse"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .u-tab-bar {
		position: absolute;
		bottom: -6rpx;
	}
	.body{
		width: 100%;
		background-color: rgba(229, 227, 227, 0.16);
	}
	.tab_info{
		background-color: #FFFFFF;
		height: 180rpx;
		padding: 40rpx 52rpx 32rpx 30rpx;		
		position: relative;
	}
	.school_title{
		height: 30rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
	.school_semester{
		height: 24rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		margin-left: 20rpx;
	}
	.school_time{
		width: 300rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		background-color: #F8F8F8;
		border-radius: 25rpx;
		margin-top: 30rpx;
	}
	.school_tab{
		position: absolute;
		top: 40rpx;
		right: 52rpx;
	}
	.school_icon{
		width: 45rpx;
		height: 45rpx;
	}
	.school_icon_word{
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #E92222;
	}
	.item_lesson{
		height: 280rpx;
		/* margin-top: 8px; */
	}
	.in_mend{
		width: 750rpx;
		padding: 0px 40rpx 0px 30rpx;
		background-color: #ffffff;
	}
	.book_picture{
		width: 140rpx;
		height: 200rpx;
		float: left;
		margin: 40rpx 0 40rpx 0;
	}
	.book{
		float: left;
		margin-left: 30rpx;
		width: 480rpx;
	}
	.book_title{
		/* width: 147px; */
		height: 30rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		margin-top: 20rpx;
		float: left;
	}
	.book_status{
		float: left;
		margin-left: 20rpx;
	}
	.title_img{
		height: 50rpx;
	}
	.status_img{
		width: 80rpx;
		height: 36rpx;
		margin-top: 22rpx;
	}
	.book_exam{
		/* width: 154px; */
		height: 26rpx;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		margin-top: 20rpx;
	}
	.line{
		margin-bottom: 50rpx;
	}
</style>
