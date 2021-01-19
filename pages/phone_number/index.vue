<!-- 修改手机号码页面 -->
<template>
	<view class="body">
		<u-navbar :is-back="true" title="修改手机号码" title-color="#ffffff" title-size="36rpx" back-icon-color="#fff" :background="background">
		</u-navbar>
		<view class="container">
			<u-form :model="form" ref="uForm" color="#333333" label-width="140rpx" align="left" style="width: 666rpx;"
			 :border-bottom="false">
				<u-form-item label="手机号" :border-bottom="true">
					<u-input class="select_value" placeholder="请输入手机号" input-align="left" v-model="form.phone_number" />
				</u-form-item>
				<u-form-item label="验证码" :border-bottom="false">
					<u-input class="select_value" placeholder="请输入手机验证码" input-align="left" v-model="form.code" />
					<span @click="sex_show" class="code_btn">点击获取验证码</span>
				</u-form-item>
				<!-- <view class="lia">
					　　<input @input="shuma" v-model="yanzhengnum" :class="shumatext ? 'shuruhou' : 'shuruqian'" type="number"
					 placeholder="请输入您收到的验证码" />
					　　<view :class="disabled ? 'huoquzhong' : 'huoqu'" @click="get_code">{{ time }}{{ text }}</view>
				</view> -->
			</u-form>
		</view>
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
				// shumatext: false,
				// yanzhengnum: '',
				// text: '获取验证码',
				// time: '',
				// disabled: false

			}
		},
		methods: {
			// sex_show() {
			// 	console.log("021")
			// },
			submit() {
				console.log(this.form,"提交成功")
			},
			//获取验证码
			async get_code() {
				var pphone = /^1[3456789]\d{9}$/;
				var pkong = /^[\s\S]*.*[^\s][\s\S]*$/;
				if (this.disabled) {
					return;
				}
				// if(!pkong.test(this.phonenum) || !pphone.test(this.phonenum)){
				//   Eapp.ui.toast.text("请输入正确的手机号");
				//   return false
				// }

				this.disabled = true;
				this.setInterValFunc();
			},
			setInterValFunc() {
				this.time = 60;
				this.text = '秒';
				this.setTime = setInterval(() => {
					if (this.time - 1 == 0) {
						this.time = '';
						this.text = '重新获取';
						this.code = '';
						this.disabled = false;
						clearInterval(this.setTime);
					} else {
						this.time--;
					}
				}, 1000);
			},
			// 验证码输入框
			shuma(e) {
				if (e.detail.value) {
					this.shumatext = true;
				} else {
					this.shumatext = false;
				}
			}
		},
	}
</script>

<style scoped>
	.body {
		/* width: 750rpx; */
		background-color: rgba(229, 227, 227, 0.16);
	}

	.container {
		background-color: #FFFFFF;
		padding: 0 30rpx;
		margin-bottom: 120rpx;
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
		margin-left: 30rpx;
	}

	.select_value {
		color: #44B4AE;
	}

	.code_btn {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #E92222;
	}
	.lia {
	    /* width: 690rpx; */
	    height: 210rpx;
	    margin: 0 auto;
	    border-bottom: 2rpx solid #f1f1f1;
	    display: flex;
	    flex-direction: row;
	    flex-wrap: nowrap;
	    align-items: center;
	    justify-content: space-between;
	}
	.shuruqian {
	    height: 100rpx;
	    width: 60%;
	    font-size: 64rpx;
	    font-family: PingFangSC-Regular, PingFang SC;
	    font-weight: 400;
	}
	.shuruhou {
	    height: 100rpx;
	    width: 60%;
	    font-size: 72rpx;
	    font-family: PingFangSC-Regular, PingFang SC;
	    font-weight: 400;
	    color: #333333;
	}
	.huoqu {
	    font-size: 64rpx;
	    font-family: PingFangSC-Regular, PingFang SC;
	    font-weight: 400;
	    color: #2d8bff;
	}
	.huoquzhong {
	    font-size: 64rpx;
	    font-family: PingFangSC-Regular, PingFang SC;
	    font-weight: 400;
	    color: #999999;
	}
</style>
