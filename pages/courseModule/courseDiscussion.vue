<template>
  <div class="courseDiscussion">
    <!-- 课程讨论页面 -->
    <u-navbar
      title-color="#333"
      back-icon-color="#333"
      :is-fixed="isFixed"
      :is-back="isBack"
      :title="title"
    >
      <div slot="right" class="slot-wrap" @click="submit">
        <img src="../Img/courseImg/xiaoxi.png" alt="" />
      </div>
    </u-navbar>

    <div class="contentBox">
      <div class="messageBox" v-for="(item,index) in contentList" :key="index">
        <div class="imgAndTitle">
          <div class="img">
            <img src="../Img/courseImg/touxiang.png" alt="" />
          </div>
          <div class="title">
            大家对第二章第一节怎么理解的大家对第二章第一节怎么理解的大家对第二章第一节怎么理解的
          </div>
        </div>
        <div class="nameAndTime">
          <div class="name">赵明明</div>
          <div class="time">2020.12.17</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBack: true,
      title: "课程讨论",
      isFixed: true,
      contentList:[
        {},{}
      ]
    };
  },
  methods: {
    submit() {
      console.log("提交");
    },
  },
};
</script>

<style scoped lang="scss" >
page {
  background-color: #fafafa !important;
}
.courseDiscussion {
  .slot-wrap {
    display: flex;
    align-items: center;
    padding-right: 30rpx;
    font-size: 28rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #666666;
    img {
      width: 48rpx;
      height: 40rpx;
    }
  }
  .contentBox {
    .messageBox {
      width: 100%;
      height: 180rpx;
      // border-bottom: 1px solid #000;
      background-color: #fff;
      margin-bottom: 2px;
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
        .title {
          width: 560rpx;
          margin-left: 21rpx;
          margin-top: 27rpx;
          margin-right: 56rpx;
          box-sizing: border-box;
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
      .nameAndTime {
        width: 100%;
        margin-top: 12rpx;
        .name {
          float: left;
          margin-left: 30rpx;
          font-size: 28rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #999999;
        }
        .time {
          float: right;
          margin-right: 30rpx;
          font-size: 28rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #999999;
        }
      }
    }
  }
}
</style>