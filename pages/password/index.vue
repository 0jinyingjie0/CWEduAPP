<!-- 修改密码页面 -->
<template>
	<view class="body">
		<u-navbar :is-back="true" title="修改密码" title-color="#ffffff" title-size="36rpx" back-icon-color="#fff" :background="background">
		</u-navbar>
		<view class="container">
			<u-form :model="form" ref="uForm" color="#333333" label-width="140rpx" align="left" style="width: 666rpx;"
			 :border-bottom="false">
				<u-form-item label="原密码" :border-bottom="true">
					<u-input class="select_value" placeholder="请输入原密码" input-align="left" v-model="form.phone_number" />
				</u-form-item>
				<u-form-item label="新密码" :border-bottom="false">
					<u-input class="select_value" placeholder="请输入6-18位新密码" input-align="left" v-model="form.code" />
				</u-form-item>
				<u-form-item label="新密码" :border-bottom="false">
					<u-input class="select_value" placeholder="请再次输入新密码" input-align="left" v-model="form.code" />
				</u-form-item>
			</u-form>
		</view>
		<view class="tips">密码应为6-18位小写字母、大写字母和数字的组合，不允许出现特殊符号和空格。</view>
		<view class="out_btn" @click="submit">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#44B4AE',
					// height: "44rpx",
				},
				form: {
					phone_number: "",
					code: ""
				},
				rules: {
					//rules中的属性名和form的属性名是一致的，同时给u-form-item的prop参数相同的属性名，prop此处参数绑定的属性名）不是变量。
					code: [{
						required: true,
						message: '请输入手机验证码',
						// max: 5,
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					phone_number: [{
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
		},
		methods: {
			submit() {
				console.log(this.form,"提交成功")
			},
		},
	}
</script>

<style scoped>
	.body {
		width: 750rpx;
		background-color: rgba(229, 227, 227, 0.16);
	}
	.container {
		background-color: #FFFFFF;
		padding: 0 30rpx;
	}
	.out_btn {
		width: 690rpx;
		height: 98rpx;
		line-height: 98rpx;
		text-align: center;
		background: #44B4AE;
		border-radius: 12rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		margin-left: 30rpx;
		margin-top: 120rpx;
	}
	.tips{
		height: 34rpx;		
		line-height: 34rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
		padding: 30rpx;
	}
</style>
