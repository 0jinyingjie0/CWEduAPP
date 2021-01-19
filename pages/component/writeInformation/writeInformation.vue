<template>
	<view class="content">
	        <view class="row b-b">
	            <text class="tit">姓名</text>
	            <input class="input" type="text" v-model="addressData.name" placeholder="请填写" placeholder-class="placeholder" style="padding:85px" />
	        </view>
	        <view class="row b-b">
	            <text class="tit">性别</text>
	            <input class="input" type="text" v-model="addressData.rank" placeholder="请填写" placeholder-class="placeholder" style="padding:85px"/>
	        </view>
	        <view class="row b-b">
	            <text class="tit">民族</text>
	            <input class="input" type="number" v-model="addressData.mobile" placeholder="请填写" placeholder-class="placeholder" style="padding:80px"/>
	        </view>
	        <view class="row b-b">
	            <text class="tit">手机号码</text>
	            <input class="input" type="text" v-model="addressData.room" placeholder="请填写" placeholder-class="placeholder" style="padding:70px"/>
	        </view>
			<view class="row b-b">
			    <text class="tit">身份证信息</text>
			    <input class="input" type="text" v-model="addressData.room" placeholder="请填写" placeholder-class="placeholder" style="padding:65px"/>
			</view>
			<view class="row b-b">
			    <text class="tit">联系地址</text>
			    <input class="input" type="text" v-model="addressData.room" placeholder="请选择>" placeholder-class="placeholder" style="padding:70px"/>
			</view>
			<view class="">
				<input type="text" value="" placeholder="请填写详细地址" style="padding:15px" />
				
			</view>
	
	        <button class="add-btn" @click="confirm">提交</button>
	    </view>
</template>

<script>
	export default {
		data() {
			return {
				 addressData: {
				                    name: '',
				                    mobile: '',
				                    rank: '',
				                    room: '',
				                }
				
			}
		},
		methods: {
			confirm() {
			                let data = this.addressData;
			                console.log(JSON.stringify(data))
			
			            },
			
		}
	}
</script>

<style lang="scss">
	  page {
	          padding-top: 16px;
	      }
	  
	      .row {
	          display: flex;
	          align-items: center;
	          position: relative;
	          padding: 0 30rpx;
	          height: 110rpx;
	          background: #fff;
	  
	          .tit {
	              flex-shrink: 0;
	              width: 120rpx;
	              font-size: 30rpx;
	  
	          }
	  
	          .input {
	              flex: 1;
	              font-size: 30rpx;
	  
	          }
	  
	          .icon-shouhuodizhi {
	              font-size: 36rpx;
	  
	          }
	      }
	  
	      .add-btn {
	          display: flex;
	          align-items: center;
	          justify-content: center;
	          width: 690rpx;
	          height: 80rpx;
	          margin: 60rpx auto;
	          background-color: rgb(28, 42, 134);
	          color: #fff;
	  
	          border-radius: 10rpx;
	          box-shadow: 1px 2px 5px rgba(28, 42, 134, 0.4);
	      }

</style>
