<template>
  <div class="customerServe">
    <!-- 客服页面 -->
    <div class="navTitle">{{ navTitle }}</div>
    <div class="imgAndMessage" v-for="(item,index) in messageDataList" :key="index">
      <div class="left" v-if="item.status=='left'">
        <div class="imgLeft">
          <img src="../Img/customer/kefu.png" alt="" />
        </div>
        <div class="messageLeft">
          请问有什么可以帮到您的请问有什么可以帮到您的请问有什么可以帮到您的请问有什么可以帮到您的
        </div>
      </div>

      <div class="right" v-if="item.status=='right'">
        <div class="imgRight">
          <img src="../Img/customer/kefu.png" alt="" />
        </div>
        <div class="messageRight">没事，就是随便问问</div>
      </div>
    </div>
    <div class="footer">
      <div class="search">
        <u-input v-model="footerSearch" type="text" placeholder="回答问题..." />
      </div>
      <div class="send">发送</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navTitle: "2020.12.22 10.32.00",
      footerSearch:"",
      messageDataList: [
        {
          status:"left"
        },
        {
          status:'right'
        }
        ], //消息信息数据集
    };
  },
};
</script>

<style lang="scss" scoped>
page {
  background-color: #fafafa !important;
}
.customerServe {
  .navTitle {
    width: 260rpx;
    height: 50rpx;
    line-height: 50rpx;
    text-align: center;
    margin: 30rpx auto;
    background: #e0e0e0;
    border-radius: 4rpx;
    font-size: 24rpx;
    font-family: Helvetica Neue LT Pro;
    font-weight: normal;
    color: #ffffff;
  }
  .imgAndMessage {
    width: 100%;
    margin-bottom: 36rpx;
    .left {
      min-height: 100rpx;
      overflow: hidden;
      .imgLeft {
        float: left;
        width: 100rpx;
        height: 100rpx;
        margin-left: 30rpx;
        img {
          width: 100%;
        }
      }
      .messageLeft {
        float: left;
        position: relative;
        width: 460rpx;
        min-height: 74rpx;
        margin-left: 25rpx;
        margin-top: 10rpx;
        border: 4rpx solid #e0e0e0;
        box-sizing: border-box;
        padding: 26rpx 24rpx;
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 37rpx;
        color: #333333;
        border-radius: 10rpx;
      }
      .messageLeft:before,
      .messageLeft:after {
        position: absolute;
        content: "";
        border: 20rpx solid;
      }
      .messageLeft:before {
        left: -40rpx;
        top: 20rpx;
        border-color: transparent #e0e0e0 transparent transparent;
      }
      .messageLeft:after {
        border-color: transparent #fff transparent transparent;
        left: -36rpx;
        top: 20rpx;
      }
    }
    .right {
      overflow: hidden;
      min-height: 100rpx;
      .imgRight {
        width: 100rpx;
        height: 100rpx;
        float: right;
        margin-right: 30rpx;
        img {
          width: 100%;
          
        }
      }
      .messageRight {
        float: right;
        position: relative;
        width: 460rpx;
        min-height: 74rpx;
        margin-right: 25rpx;
        margin-top: 10rpx;
        border: 4rpx solid #e0e0e0;
        box-sizing: border-box;
        padding: 26rpx 24rpx;
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 37rpx;
        color: #333333;
         border-radius: 10rpx;
      }
      .messageRight:before,
      .messageRight:after {
        position: absolute;
        content: "";
        border: 20rpx solid;
      }
      .messageRight:before {
        right: -40rpx;
        top: 20rpx;
        border-color: transparent transparent transparent #e0e0e0;
      }
      .messageRight:after {
        border-color: transparent transparent transparent #fff;
        right: -36rpx;
        top: 20rpx;
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 20rpx;
    display: flex;
    justify-content: left;
    width: 100%;
    height: 131rpx;
    // background-color: #e7e7e7;
    /deep/ .uni-input-wrapper {
      background-color: #fff;
    }
    /deep/ .u-input {
      padding: 0px !important;
      height: 100%;
      /deep/ .u-input__input[data-v-460c1d26] {
        height: 66rpx !important;
        min-height: 66rpx !important;
      }
      /deep/ .uni-input-wrapper {
        height: 66rpx;
        /deep/ .uni-input-placeholder {
          margin-left: 20rpx;
          font-size: 26rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #b9b9b9;
        }
      }
      /deep/ .uni-input-input {
        height: 66rpx;
        
      }
    }
    .search {
      border: 2rpx solid #ccc;
      border-radius: 3px;
      width: 560rpx;
      height: 66rpx;
      margin-top: 32rpx;
      margin-left: 32rpx;
    }
    .send {
      width: 120rpx;
      height: 66rpx;
      margin-top: 32rpx;
      margin-left: 10rpx;
      background: #43b4ae;
      line-height: 66rpx;
      text-align: center;
      color: #fff;
    }
  }
}
</style>