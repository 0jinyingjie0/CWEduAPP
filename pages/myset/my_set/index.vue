<!-- 我的设置页面 -->
<template>
	<view class="body">
		<u-navbar :is-back="true" title="我的设置" title-color="#ffffff" title-size="18rpx" back-icon-color="#fff" :background="background">
			<!-- <view class="navbar-right" slot="right" @click="all_read"> 全标已读</view> -->
		</u-navbar>
		<view class="container">
			<u-form :model="form" ref="uForm" label-width="660rpx"  >
				<u-form-item label="选择省份" :border-bottom="false">					
					<u-select @confirm="confirm" class="select_all" v-model="form.location" :list="location_list"></u-select>
					<u-icon @click="form.location = true" name="arrow-right" color="#999999" size="28"></u-icon>
				</u-form-item>
				<u-line class="line" color="#000000" style="opacity: 0.2"/>
				<u-form-item label="清理缓存" :border-bottom="false">
					<u-input input-align="left" style="margin-left:-60rpx" @click="open"  v-model="form.clear_cache"  />
				</u-form-item>
				<u-line class="line" color="#000000" style="opacity: 0.2"/>
				<u-form-item label="关于" :border-bottom="false">
					<u-select @confirm="confirm" class="select_all" v-model="form.versions" :list="versions_list"></u-select>
					<u-icon @click="form.versions = true" name="arrow-right" color="#999999" size="28"></u-icon>
				</u-form-item>
				<u-line class="line" color="#000000" style="opacity: 0.2"/>
			</u-form>
		</view>
		<u-modal v-model="show" @confirm="confirm_btn" show-cancel-button :cancel-style="cancel_style"  confirm-color="#44B4AE" width="70%" :content="content"></u-modal>
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
				show: false,
				content: '你确定要清除所有缓存吗?',
				cancel_style: {
					border:'1rpx',
					borderBottom:"#000000"
					// borderRight: 1rpx solid '#000000',					
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

<style scoped>
	.body {
		/* width: 375rpx; */
	}

	.navbar-right {
		margin-right: 15rpx;
		font-size: 15rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		opacity: 0.9;
	}
	.container {
		background-color: #FFFFFF;
		padding: 0 15rpx;
	}
	.un_read {
		/* width: 345rpx; */
		height: 60rpx;
		padding: 23rpx 0;
		font-size: 15rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		position: relative;
	}
	.select_all {
		/* width: 232rpx; */
	}
</style>
