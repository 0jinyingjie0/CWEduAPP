<!-- 我的消息页面 -->
<template>
	<view class="body">
		<u-navbar :is-back="true" title="填写信息" title-color="#ffffff" title-size="36rpx" back-icon-color="#fff" :background="background">
		</u-navbar>
		<view class="container">
			<view class="un_read">
				<span v-if="is_show_red" class="small_red"></span>
				<span>{{unread}}</span>
				<span class="time">{{unread_time}}</span>
				<u-line class="line" color="#000000" style="opacity: 0.2"/>
			</view>
			<view class=" un_read read">
				<span v-if="is_show_red" class="small_red"></span>
				<span>{{unread}}</span>
				<span class="time">{{unread_time}}</span>
				<u-line class="line" color="#000000" style="opacity: 0.2"/>
			</view>
			<view class="un_read read">
				<span v-if="is_show_red" class="small_red"></span>
				<span>{{unread}}</span>
				<span class="time">{{unread_time}}</span>
				<u-line class="line" color="#000000" style="opacity: 0.2"/>
			</view>
			
			<!-- <div class="progress-body" v-for="(item, index) in progressList1" :key="index">
				<div class="progress-label fl">{{ item.label }}</div>
				<div class="progress-item fl">
					<Progress :percent="item.value" status="active" :stroke-width="20" :stroke-color="['#DA59FF', '#5807B1']">
						<Icon type="checkmark-circled"></Icon>
						<span>{{ item.value }}%</span>
					</Progress>
				</div>
			</div> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#44B4AE',
					// height: "44rpx",
					// color:'#ffffff',
					// title-color:'#ffffff'
				},
				unread: "今日待办消息未读消息",
				unread_time: '2020-11-11',
				is_show_red:true
			}
		},
		methods: {
			all_read() { //全部已读
				this.is_show_red = false
				
			}
		}
	}
</script>

<style scoped>
	.body {
		/* width: 750rpx; */
	}

	.navbar-right {
		margin-right: 30rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		opacity: 0.9;
	}

	.container {
		background-color: #FFFFFF;
		padding: 0 30rpx;
	}

	.un_read {
		/* width: 690rpx; */
		height: 120rpx;
		padding: 46rpx 0;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		position: relative;
	}

	.small_red {
		margin-right: 12rpx;
		width: 12rpx;
		height: 12rpx;
		color: #E60012;
		background-color: #E60012;
		border-radius: 50%;
		-moz-border-radius: 50%;
		-webkit-border-radius: 50%;
		display:inline-block;
	}
	.line{
		position: absolute;
		bottom: 0;
	}
	.time {
		font-size: 30rpx;
		font-family: Roboto;
		font-weight: 400;
		color: #999999;
		position: absolute;
		right: 0;
	}
	.read{
		color: #666666;
	}
</style>
