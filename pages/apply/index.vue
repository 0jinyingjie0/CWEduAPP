<!-- 报名页面 -->
<template>
	<view class="body">
		<view class="container">
			<u-form :model="form" ref="uForm" color="#333333" label-width="200rpx" align="left" style="width: 313px;"
			 :border-bottom="false">
				<u-form-item label="性名" :border-bottom="false">
					<u-input class="select_value" input-align="right" v-model="form.info.name" />
				</u-form-item>
				<u-form-item label="性别" :border-bottom="false">
					<u-select @confirm="confirm" class="select_all" v-model="sex_show" :list="sex"></u-select>
					<u-icon @click="sex_show = true" name="arrow-right" color="#999999" size="28"></u-icon>
					<!-- <u-input style="color: #44B4AE;" class="select_value" input-align="right" v-model="form.info.sex" /> -->
					<!-- <u-icon name="arrow-right" color="#999999" size="28"></u-icon> -->
				</u-form-item>
				<u-form-item label="联系方式" :border-bottom="false">
					<u-input input-align="right" v-model="form.info.number" />
				</u-form-item>
				<u-form-item label="选择学校" :border-bottom="false">
					<u-select @confirm="confirm" class="select_all" v-model="school_show" :list="school"></u-select>
					<u-icon @click="school_show = true" name="arrow-right" color="#999999" size="28"></u-icon>
				</u-form-item>
				<u-form-item label="选择科目" :border-bottom="false">
					<u-select @confirm="confirm" class="select_all" v-model="subjects_show" :list="subjects"></u-select>
					<u-icon @click="subjects_show = true" name="arrow-right" color="#999999" size="28"></u-icon>
				</u-form-item>
				<u-form-item label="选择站点" :border-bottom="false">
					<u-select @confirm="confirm" class="select_all" v-model="site_show" :list="site"></u-select>
					<u-icon @click="site_show = true" name="arrow-right" color="#999999" size="28"></u-icon>
				</u-form-item>
				<u-form-item label="是否培训" :border-bottom="false">
					<u-select @confirm="confirm" class="select_all" v-model="cultivate_show" :list="cultivate"></u-select>
					<u-icon @click="cultivate_show = true" name="arrow-right" color="#999999" size="28"></u-icon>
				</u-form-item>
				<u-form-item label="选择培训方式" :border-bottom="false">
					<u-select @confirm="confirm" class="select_all" v-model="way_show" :list="way"></u-select>
					<u-icon @click="way_show = true" name="arrow-right" color="#999999" size="28"></u-icon>
				</u-form-item>
			</u-form>
		</view>
		<view class="out_btn">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#ffff',
					height: "100rpx",
					backIconColor: '#fff'
				},
				show: false,
				sex_show: false,
				school_show: false,
				subjects_show: false,
				site_show: false,
				way_show: false,
				cultivate_show: false,
				sex: [{
						value: "1",
						label: '男'
					},
					{
						value: "2",
						label: '女'
					},
				],
				school: [{
						value: "1",
						label: '昆明冶金高等专科学校',
					},
					{
						value: "2",
						label: '昆明冶金高等专科学校1',
					},
				],
				subjects: [{
						value: "1",
						label: '高等数学',
					},
					{
						value: "2",
						label: '高等语文',
					},
				],
				site: [{
						value: "1",
						label: '站点培训',
					},
					{
						value: "2",
						label: '站点',
					},
				],
				way: [{
						value: "1",
						label: '面授',
					},
					{
						value: "2",
						label: '线上网课',
					},
				],
				cultivate: [{
						value: "1",
						label: '是',
					},
					{
						value: "2",
						label: '否',
					},
				],
				form: {
					info: {
						name: '张丽娜',
						number: '13666666666',
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
						name: [{
							required: true,
							message: '请输入姓名',
							// max: 5,
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change', 'blur'],
						}],
						number: [{
								required: true,
								message: '请输入手机号',
								trigger: ['change', 'blur'],
							},
							{
								// 自定义验证函数，见上说明
								validator: (rule, value, callback) => {
									// 上面有说，返回true表示校验通过，返回false表示不通过
									// this.$u.test.mobile()就是返回true或者false的
									return this.$u.test.mobile(value);
								},
								message: '手机号码不正确',
								// 触发器可以同时用blur和change
								trigger: ['change', 'blur'],
							}
						]
					},
				}
			}
		},
		methods: {
			confirm(e) {
				console.log(e, "22");
			}
		}
	}
</script>

<style scoped>
	.body {
		/* width: 100%; */
		background-color: rgba(229, 227, 227, 0.16);
		/* margin-top: 10px; */
	}
	.container {
		/* width: 690rpx; */
		background-color: #FFFFFF;
		/* height: 478px; */
		margin: -50rpx 30rpx 112rpx 30rpx;
		background: #FFFFFF;
		box-shadow: 2rpx 2rpx 2rpx 2rpx rgba(229, 227, 227, 0.49);
		border-radius: 12rpx;
		padding: 20rpx 0px 20rpx 20rpx;
		color: #44B4AE;
	}

	.select_value {
		color: #44B4AE;
	}
	.select_all {
		width: 400rpx;
	}
	.out_btn {
		/* width: 690rpx; */
		height: 98rpx;
		line-height: 98rpx;
		text-align: center;
		background: #44B4AE;
		border-radius: 12rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		margin-right: 30px;
		margin-left: 30rpx;
	}
</style>
