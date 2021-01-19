<template>
  <div class="detailAnswer">
    <!-- 课程讨论详细回答页面 -->
    <div class="contentBox">
      <div class="messageBox">
        <div class="imgAndTitle">
          <div class="img">
            <img src="../Img/courseImg/touxiang.png" alt="" />
          </div>

          <div class="nameAndTime">
            <div class="name">赵明明</div>
            <div class="time">2020.12.17</div>
          </div>
        </div>

        <div class="title">大家对第二章第一节怎么理解的</div>
      </div>
    </div>

    <div class="messageNo">{{ messageNo }}条回复</div>

    <div
      class="detaileAnswer"
      v-for="(item, index) in detaileAnswerList"
      :key="index"
    >
      <div class="img">
        <!-- <img :src="item.src" alt="" /> -->
        <img src="../Img/courseImg/touxiang.png" alt="" />
      </div>
      <div class="nameAndTimeAndMessage">
        <div class="name">{{ item.name }}</div>
        <div class="time">{{ item.time }}</div>
        <div class="message">{{ item.message }}</div>
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
      messageNo: 2,
      footerSearch: "",
      detaileAnswerList: [
        {
          // src:'../Img/courseImg/touxiang.png',
          name: "赵明明",
          time: "2020.12.21",
          message: "大家对第二章第一节怎么理解的",
        },
        {
          // src:'../Img/courseImg/touxiang.png',
          name: "赵明明",
          time: "2020.12.21",
          message: "大家对第二章第一节怎么理解的",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
page {
  background-color: #fafafa !important;
  
}
uni-page-wrapper {
  position: relative;
}
.detailAnswer {
  .contentBox {
    // border: 1px solid pink;
    .messageBox {
      width: 100%;
      height: 180rpx;
      // border-bottom: 1px solid #000;
      background-color: #fff;
      margin-bottom: 2rpx;
      .imgAndTitle {
        margin-top: 20rpx;
        height: 97rpx;
        display: flex;
        justify-content: left;
        .img {
          width: 80rpx;
          height: 97rpx;
          margin-left: 32rpx;
          img {
            width: 100%;
          }
        }
        .nameAndTime {
          margin-left: 24rpx;
          div {
            font-size: 26rpx;
            font-family: PingFang SC;
            font-weight: 500;
            color: #999999;
            line-height: 26rpx;
            margin-bottom: 14rpx;
          }
        }
      }
      .title {
        margin: 0 28rpx;
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #999999;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .messageNo {
    margin: 19rpx 0px 22rpx 30rpx;
    font-size: 26rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #666666;
  }
  .detaileAnswer {
    width: 100%;
    height: 180rpx;
    background-color: #fff;
    margin-bottom: 2rpx;
    .img,
    .nameAndTimeAndMessage {
      float: left;
    }
    .img {
      width: 80rpx;
      height: 97rpx;
      margin-top: 20rpx;
      margin-left: 32rpx;
      img {
        width: 100%;
      }
    }
    .nameAndTimeAndMessage {
      margin-left: 15px;
      .name,
      .time,
      .message {
        font-family: PingFang SC;
        font-weight: 500;
        color: #999999;
      }
      .name {
        // margin-top: 14px;
        margin-top: 20rpx;
        margin-left: 6rpx;
        font-size: 26rpx;
      }
      .time {
        margin-top: 15rpx;
        margin-left: 4rpx;
        font-size: 26rpx;
      }
      .message {
        margin-top: 29rpx;
        font-size: 28rpx;
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
    background-color: #e7e7e7;
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