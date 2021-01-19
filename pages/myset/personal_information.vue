<!-- 个人信息页面 -->
<template>
	<view class="body">
		<!-- <u-navbar class="nav" title="" :is-back="false" back-icon-color="#fff" color="#fff" :background="background" :shadow="false">
			<view slot="right">
				<image class="code" src="../../static/saoyisao@2x.png" mode=""></image>
				<image class="set" src="../../static/shezhi@2x.png" mode="" @click="toSetPage"></image>
			</view>
		</u-navbar> -->
		<view class="infomation">
			<view class="right_icon" style="padding: 16rpx;">
				<image class="code" src="../../static/saoyisao@2x.png" mode=""></image>
				<image class="set" src="../../static/shezhi@2x.png" mode="" @click="toSetPage"></image>
			</view>
			<view class="info-main">
				<u-avatar class="head_photo" size="70rpx" src="/static/touxiang.png" @click="toMyMessage"></u-avatar>
				<view class="info-content">
					<view class="info_word">
						<view class="name">赵丽娜</view>
						<view class="school">同学，欢迎回来</view>
					</view>
					<u-icon class="info-right-icon" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="info_bg">
			<view class="info">
				<view class="my_find">
					我的发现
				</view>
				<view class="three-icon">
					<view class="info_icon">
						<image class="three_icon" src="../../static/chengjichaxun.png" mode="" @click="toSearchGrade"></image>
						<view class="three_word" style="margin-left: -25rpx;">成绩查询</view>
					</view>
					<view class="info_icon">
						<image class="three_icon" src="../../static/daiban@2x.png" mode="" @click="toMyBacklog"></image>
						<view class="three_word" style="margin-left: -20rpx;">我的待办</view>
					</view>
					<view class="info_icon">
						<image  class="three_icon" src="../Img/customer/kefu.png" mode="" @click="toServe"></image>
						<view class="three_word">找客服</view>
					</view>				
				</view>
			</view>
		</view>
		<view class="school_info">
			<view class="school_name">
				遵义职业技术学院
			</view>
			<view class="un_read">
				<image class="image_icon" src="../Img/courseImg/xiaoxi.png" mode=""></image>
				<view class="school_item" @click="toMyMsg">我的消息</view>
				<view class="item-right-icon"><u-icon name="arrow-right"></u-icon></view>
			</view>
			<view class="un_read">
				<image class="image_icon" src="../../static/jiaofei@2x.png" mode=""></image>
				<view class="school_item">缴费信息</view>
				<u-icon class="item-right-icon" name="arrow-right"></u-icon>
			</view>
			<view class="un_read">
				<image class="image_icon" src="../../static/xuanke@2x.png" mode=""></image>
				<view class="school_item" @click="toMySemester">学期选课</view>
				<u-icon class="item-right-icon" name="arrow-right"></u-icon>
			</view>
			<view class="un_read">
				<image class="image_icon" src="../../static/bangzhu@2x.png" mode=""></image>
				<view class="school_item">帮助与反馈</view>
				<u-icon class="item-right-icon" name="arrow-right"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#44B4AE',
					backIconColor: '#fff'
				},
				show: false,
				list: [{
						value: '1',
						label: '江'
					},
					{
						value: '2',
						label: '湖'
					}
				],
				form: {
					info: {
						nation: '汉',
						sex: '女',
						identity_card: '140566666666666666',
						number: '13666666666',
						location: '昆明冶金高等专科学校',
						number_password: '111',
						code: '111',
					},
					school: {
						student_number: "19010104",
						targeted_school: '昆明冶金高等专科学校',
						specialty: "工商企业管理（业余）",
						hierarchy: '成人教育-高升专',
						status: '在籍',
						start_year: '2019年12月',
						end_year: '2022年06月',
					},
					// bor_bom: false,
					// borderBottom:false,
					rules: {
						//rules中的属性名和form的属性名是一致的，同时给u-form-item的prop参数相同的属性名，prop此处参数绑定的属性名）不是变量。
						// name: [{
						// 	required: true,
						// 	message: '请输入姓名',
						// 	// 可以单个或者同时写两个触发验证方式 
						// 	trigger: ['change', 'blur'],
						// }],
						// intro: [{
						// 	min: 5,
						// 	message: '简介不能少于5个字',
						// 	trigger: 'change'
						// }]
					},
				}
			}
		},
		methods: {
			toSetPage(){
				
				uni.navigateTo({
					url:"../myset/my_set/index"
				})
			},
			toMyMessage(){
				console.log("%%%");
				uni.navigateTo({
					url:"../myset/myProfile/index"
				})
			},
			toSearchGrade(){
				uni.navigateTo({
					url:"../component/scoreInquiry"
				})
			},
			toMyMsg(){
				uni.navigateTo({
					url:"../myset/my_message/index"
				})
			},
			toMyBacklog(){
				console.log("$$$$");
				uni.navigateTo({
					url:"../myset/backlog"
				})
			},
			toServe(){
					uni.navigateTo({
					url:"../component/customerServe"
				})
			},
			toMySemester(){
				uni.navigateTo({
					url:"../myset/change_course"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		height: 100vh;
		background-color: #fafafa !important;
	}
	/deep/.uni-page-wrapper{
		// display: block;
		background-color: #ccc;  
		display: block;
		    height: 100%;
		    position: relative;
	}
	
	.nav {
		border: unset;
	}

	.code {
		width: 42rpx;
		height: 42rpx;
		margin-right: 24rpx;
	}

	.set {
		width: 42rpx;
		height: 42rpx;
		margin-right: 24rpx;
	}
	.infomation{
		background-color: #44B4AE;
		padding-top: 108rpx;
		padding-left: 32rpx;
		padding-right: 32rpx;
		padding-bottom: 88rpx;
		
		.info-main {
			display: flex;
			.info-content {
				display: flex;
				justify-content: space-between;
				.info_word {
					margin-left: 32rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					width: 480rpx;
				}
				
				.info-right-icon{
					color: #fff;
					font-size: 40rpx
				}
			}
		}

	}
	/* 头像 部分 */
	.info_bg {
		height: 300rpx;
		z-index: 999;
		padding: 24rpx 32rpx;
		margin-top: -72rpx;
		border-radius: 16rpx;
	
		.info {
			background-color: #FFFFFF;
			box-shadow: 0px 2rpx 16rpx 0px rgba(229, 227, 227, 0.49);
			border-radius: 12rpx;
			/* position: relative; */
			z-index: 999;
			display: flex;
			flex-direction: column;
			padding: 32rpx 24rpx;
			
			.my_find{
				line-height: 30rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #333333;
			}
			.three-icon {
				margin-top: 48rpx;
				display: flex;
				justify-content: space-around;
				
				.info_icon{
					width: 130rpx;
					height: 130rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
				}
			}
		}
	}
	.head_photo {
		width: 142rpx;
		height: 142rpx;
	}
	.name {
		height: 48rpx;
		font-size: 48rpx;
		line-height: 48rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
	}

	.school {
		height: 29rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		margin-top: 28rpx;
		opacity: 0.8;
	}
	.right_icon{
		position: absolute;
		top: 130rpx;
		right: 130rpx;
		color: #fff;
		font-size: 40rpx
	}
	/* 头像部分结尾 */
	.container {
		background-color: #FFFFFF;
		position: absolute;
		/* top: 189px; */
		margin-top: 360rpx; // 29px;
		margin-left: 60rpx;
		margin-right: 60rpx;
		margin-bottom: 74rpx;
	}
	.three_icon{
		width:72rpx ;
		height: 72rpx;
		
	}
	.school_info{
		background-color: #FFFFFF;
		margin: 32rpx;
		border-radius: 5rpx;
		padding: 64rpx 32rpx;
		border-radius: 16rpx;
	}
	.un_read {
		height: 142rpx;
		padding: 0 0 48rpx 32rpx;
		font-size: 30rpx;
		color: #333333;
		display: flex;
		align-items: center;
		
		.school_item {
			display: inline-block;
			height: 50rpx;
			font-size: 28rpx;
			color: #333333;
		}
		.item-right-icon{
			flex: 1;
			display: flex;
			justify-content: flex-end;
			color: #CCCCCC;
		}
	}
	.select_all {
		width: 464rpx;
	}
	.three_word{
		margin-top: 15rpx;
		margin-left: -6rpx;
	}
	.image_icon{
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		margin-right: 23rpx;
	}
	.right_icon{
		position: absolute;
		top: 50rpx;
		right: 30rpx;
		color: #CCCCCC;
	}
	.school_name{
		margin-bottom: 40rpx;
		line-height: 32rpx;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
	}
</style>
