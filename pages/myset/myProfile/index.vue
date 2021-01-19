<!-- 我的资料页面 -->
<template>
	<view class="body">
		<u-navbar class="nav" :is-back="true" title="" back-icon-color="#fff" :background="background">
		</u-navbar>
		<view class="info_bg">
			<view class="info">
				<u-avatar class="head_photo" size="70" src="/static/touxiang.png"></u-avatar>
				<view class="info_word">
					<view class="name">赵丽娜</view>
					<view class="school">昆明冶金高等专科学校</view>
				</view>
			</view>
		</view>
		<view class="container">
			<view class="essential_information_title">基本信息</view>
			<u-form :model="form" ref="uForm"  color="#333333" label-width="200rpx"  align="left" style="width: 626rpx;" :border-bottom="false">
				<u-form-item label="民族"   :border-bottom="false">
					<u-input input-align="right"  :disabled="true" v-model="form.info.nation" />
				</u-form-item>
				<u-form-item label="性别" :border-bottom="false">
					<u-input input-align="right"  :disabled="true" v-model="form.info.sex" />
				</u-form-item>
				<u-form-item label="身份证信息" :border-bottom="false">
					<u-input input-align="right"  :disabled="true" v-model="form.info.identity_card" />
				</u-form-item>
				<u-form-item label="手机号码" :border-bottom="false" >
					<u-input input-align="right"  :disabled="true" v-model="form.info.number"  />
					<u-icon name="arrow-right" color="#999999" size="28"  @click="toFixPhoneNo"></u-icon>
				</u-form-item>
				<u-form-item label="联系地址" :border-bottom="false" >
					<u-input input-align="right"  :disabled="true" v-model="form.info.location"   />
					<u-icon name="arrow-right" color="#999999" size="28"></u-icon>
				</u-form-item>
				<u-form-item label="账号密码修改" :border-bottom="false">
					<u-input  input-align="right"  :disabled="true" v-model="form.info.number_password" /> 
					<!-- <u-select confirm=""  v-model="show" :list="list"></u-select> -->
					<!-- <u-icon  @click="show = true" name="arrow-right" color="#999999" size="28"></u-icon> -->
					<u-icon  name="arrow-right" color="#999999" size="28" @click="toFixPassword"></u-icon>
				</u-form-item>
				<u-form-item label="我的二维码"  >
					<u-input input-align="right"  :disabled="true" v-model="form.info.code"  />
					<u-icon name="arrow-right" color="#999999" size="28"></u-icon>
				</u-form-item>
			</u-form>
			<view class="essential_information_title">学校信息</view>
			<u-form :model="form" ref="uForm" label-width="200rpx" style="width: 626rpx;">
				<u-form-item label="学号" :border-bottom="false">
					<u-input input-align="right"  :disabled="true" v-model="form.school.student_number" />
				</u-form-item>
				<u-form-item label="报考学校" :border-bottom="false">
					<u-input input-align="right"  :disabled="true" v-model="form.school.targeted_school" />
				</u-form-item>
				<u-form-item label="我的专业" :border-bottom="false">
					<u-input input-align="right"  :disabled="true" v-model="form.school.specialty"  />
				</u-form-item>
				<u-form-item label="学习层次" :border-bottom="false">
					<u-input input-align="right"  :disabled="true" v-model="form.school.hierarchy"  />
				</u-form-item>
				<u-form-item label="学籍状态" :border-bottom="false">
					<u-input input-align="right"  :disabled="true" v-model="form.school.status"  />
				</u-form-item>
				<u-form-item label="入学年份" :border-bottom="false">
					<u-input input-align="right"  :disabled="true" v-model="form.school.start_year"  />
				</u-form-item>
				<u-form-item label="预计毕业时间" >
					<u-input input-align="right"  :disabled="true" v-model="form.school.end_year"  />
				</u-form-item>
			</u-form>
			<view class="essential_information_title">缴费信息</view>
			<view class="essential_information_two_title">欠费信息</view>
			<view class="line" style="color: #E92222;">
				<span class="vertical_icon">I</span>
				<span class="">第三学期学费2000元</span>
				<span class="pay_btn">去缴费</span>
			</view>
			<view class="line" style="color: #E92222;">
				<span class="vertical_icon">I</span>
				<span class="">第三学期学费2000元</span>
				<span class="pay_btn">去缴费</span>
			</view>
			<view class="essential_information_two_title">已缴费信息</view>
			<view class="line">
				<span class="vertical_icon">I</span>
				<span >第三学期学费2000元</span>
			</view>
			<view class="line">
				<span class="vertical_icon">I</span>
				<span class="">第三学期学费2000元</span>
			</view>
			<view class="essential_information_two_title">今后缴费计划</view>
			<view class="line">
				<span class="vertical_icon">I</span>
				<span class="">第三学期学费2000元</span>
			</view>
			<view class="line" style="margin-bottom: 74rpx;">
				<span class="vertical_icon">I</span>
				<span class="">第三学期学费2000元</span>
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
					height: "264rpx",
					backIconColor: '#fff'
				},
				show: false,
					list: [
						{
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
						targeted_school:'昆明冶金高等专科学校',
						specialty:"工商企业管理（业余）",
						hierarchy:'成人教育-高升专',
						status:'在籍',
						start_year:'2019年12月',
						end_year:'2022年06月'	,
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
			toFixPhoneNo(){
				uni.navigateTo({
					url:"../../phone_number/index"
				})
			},
			toFixPassword(){
				console.log("#####");
				uni.navigateTo({
					url:"../../password/index"
				})
			}
		}
	}
</script>

<style scoped>
	.body {
		width: 750rpx;
	}

	/* 头像 部分 */
	.info_bg {
		height: 182rpx;
		width: 750rpx;
		position: relative;
		position: fixed;
		z-index: 999;
	}

	.info {
		width: 690rpx;
		height: 280rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 2rpx 16rpx 0rpx rgba(229, 227, 227, 0.49);
		border-radius: 12rpx;
		position: absolute;
		top: 67rpx;
		left: 30rpx;
		/* position: relative; */
		z-index: 999;
	}

	.head_photo {
		width: 140rpx;
		height: 140rpx;
		position: absolute;
		left: 276rpx;
		top: -39rpx;
	}

	.info_word {
		position: absolute;
		top: 92rpx;
	}

	.name {
		width: 690rpx;
		height: 34rpx;
		line-height: 34rpx;
		text-align: center;
		margin: 28rpx 0 29rpx 0;
		color: #333333;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: bold;
	}

	.school {
		width: 690rpx;
		height: 26rpx;
		line-height: 26rpx;
		text-align: center;
		color: #333333;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
	}

	/* 头像部分结尾 */
	.container {
		width: 750rpx;
		background-color: #FFFFFF;
		position: absolute;
		/* top: 189rpx; */
		margin-top: 360rpx; 
		margin-left: 60rpx;
		margin-right: 60rpx;
		margin-bottom: 74rpx;
	}

	.essential_information_title {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		margin-top: 56rpx;
	}
	.essential_information_two_title{
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		margin-top: 80rpx;
	}
	.line{
		width: 750rpx;
		height: 27rpx;
		font-size: 28rpx;
		margin-top: 30rpx;
		
	}
	.vertical_icon{
		width: 4rpx;
		height: 16rpx;
		color: #44B4AE;
		background: #44B4AE;
		border-radius: 4rpx;
		margin-right: 9rpx;
	}
	.pay_btn{
		font-size: 18rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		width: 94rpx;
		height: 30rpx;
		line-height: 30rpx;
		background: #44B4AE;
		border-radius: 4rpx;
		padding: 6rpx 20rpx;
		margin-left: 240rpx ;
	}
</style>
