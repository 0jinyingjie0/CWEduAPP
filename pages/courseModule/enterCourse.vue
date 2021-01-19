<template>
  <view class="enterCourse">
    <!-- 进入课程页面 -->
    <view class="gradeBox">
      <view class="number">
        <view>
          <van-circle
            v-model="currentRate1"
            :rate="70"
            :color="gradientColor"
            layer-color="#ebedf0"
            :stroke-width="120"
            stroke-linecap="round"
            :text="text"
          />
        </view>
        <view>
          <van-circle
            v-model="currentRate2"
            :rate="0"
            :color="gradientColor"
            layer-color="#ebedf0"
            :stroke-width="120"
            stroke-linecap="round"
            text="0分"
          />
        </view>
        <view>
          <van-circle
            v-model="currentRate3"
            :rate="70"
            :color="gradientColor"
            layer-color="#ebedf0"
            :stroke-width="120"
            stroke-linecap="round"
            size="70px"
            :text="text"
          />
          <!-- <u-circle-progress active-color="#2979ff" :percent="30">
            <view class="u-progress-content">
              <view class="u-progress-dot"></view>
              <text class="u-progress-info">30分</text>
            </view>
          </u-circle-progress> -->
        </view>
      </view>
      <view class="title">
        <view>在线成绩</view>
        <view>考试成绩</view>
        <view class="last">总评成绩</view>
      </view>
    </view>
    <view class="contentBox">
      <view class="detaileBox">
        <view class="topBox" @click="toCoursePlay">
          <view class="icon">
            <img src="../Img/enterCourse/dianbo.png" alt="" />
          </view>
          <view class="title">课程点播</view>

          <view class="right">
            <img src="../Img/enterCourse/xiayibu.png" alt="" />
          </view>
          <view class="message">20/50分</view>
        </view>
        <view class="progress">
          <u-line-progress
            active-color="#2979ff"
            :percent="70"
            :show-percent="false"
          ></u-line-progress>
        </view>
        <view class="footerMessage">
          每个视频学习满10分钟即可获取相应的分数，满分50分。
        </view>
        <view class="foot"></view>
      </view>

      <view class="detaileBox">
        <view class="topBox" @click="toCourseWork">
          <view class="icon">
            <img src="../Img/enterCourse/zuoye.png" alt="" />
          </view>
          <view class="title">课程作业</view>

          <view class="right">
            <img src="../Img/enterCourse/xiayibu.png" alt="" />
          </view>
          <view class="message color">暂未完成</view>
        </view>
        <view class="progress">
          <u-line-progress
            active-color="#2979ff"
            :percent="70"
            :show-percent="false"
          ></u-line-progress>
        </view>
        <view class="footerMessage">每份作业均作答完毕即可获得完成学习。</view>
        <view class="foot"></view>
      </view>

      <view class="detaileBox">
        <view class="topBox" @click="toCourseDis">
          <view class="icon">
            <img src="../Img/enterCourse/taolun.png" alt="" />
          </view>
          <view class="title">课程讨论</view>

          <view class="right">
            <img src="../Img/enterCourse/xiayibu.png" alt="" />
          </view>
          <view class="message color"></view>
        </view>
        <view class="progress">
          <u-line-progress
            active-color="#2979ff"
            :percent="70"
            :show-percent="false"
          ></u-line-progress>
        </view>
        <view class="footerMessage">参与讨论获得分数。</view>
        <view class="foot"></view>
      </view>

      <view class="detaileBox">
        <view class="topBox" @click="toFaceAnswer">
          <view class="icon">
            <img src="../Img/enterCourse/dayi.png" alt="" />
          </view>
          <view class="title">面授答疑</view>

          <view class="right">
            <img src="../Img/enterCourse/xiayibu.png" alt="" />
          </view>
          <view class="message color"></view>
        </view>
        <view class="progress">
          <u-line-progress
            active-color="#2979ff"
            :percent="70"
            :show-percent="false"
          ></u-line-progress>
        </view>
        <view class="footerMessage">与老师进行在线互动，解答疑惑。</view>
        <view class="foot"></view>
      </view>

      <view class="detaileBox">
        <view class="topBox" @click="toMaterial">
          <view class="icon">
            <img src="../Img/enterCourse/ziliao.png" alt="" />
          </view>
          <view class="title">课程资料</view>

          <view class="right">
            <img src="../Img/enterCourse/xiayibu.png" alt="" />
          </view>
          <view class="message color">暂未查询</view>
        </view>
        <view class="progress">
          <u-line-progress
            active-color="#2979ff"
            :percent="70"
            :show-percent="false"
          ></u-line-progress>
        </view>
        <view class="footerMessage">查看资料，强化并拓展课程知识。</view>
        <view class="foot"></view>
      </view>

      <view class="detaileBox">
        <view class="topBox" @click="toInfo">
          <view class="icon">
            <img src="../Img/enterCourse/lianxi.png" alt="" />
          </view>
          <view class="title">题库练习</view>

          <view class="right">
            <img src="../Img/enterCourse/xiayibu.png" alt="" />
          </view>
          <view class="message color">非考试，仅为练习</view>
        </view>
        <view class="progress">
          <u-line-progress
            active-color="#2979ff"
            :percent="70"
            :show-percent="false"
          ></u-line-progress>
        </view>
        <view class="footerMessage">查看资料，强化并拓展课程知识。</view>
        <view class="foot"></view>
      </view>

      <view class="detaileBox">
        <view class="topBox" @click="toExam">
          <view class="icon">
            <img src="../Img/enterCourse/kaoshi.png" alt="" />
          </view>
          <view class="title">课程考试</view>

          <view class="right">
            <img src="../Img/enterCourse/xiayibu.png" alt="" />
          </view>
          <view class="message color"></view>
        </view>
        <!-- <view class="progress">
          <u-line-progress
            active-color="#2979ff"
            :percent="70"
            :show-percent="false"
          ></u-line-progress>
        </view> -->
        <view class="footerMessage margin">暂无考试</view>
        <view class="foot"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentRate1: 0,
      currentRate2: 0,
      currentRate3: 0,
      rate: 30,
      text: "70分",
      // gradientColor: {
      //   "0%": "#91efe8",
      //   "100%": "#ccc",
      // },
      gradientColor: {
        "0%": "#91FEF8",
        "100%": "#3CBCFF",
      },
    };
  },
  mounted() {},
  methods: {
    toDetaile() {},
    toCoursePlay(){
      uni.navigateTo({
        url:"../courseModule/coursePlay"
      })
    },
    toCourseWork(){
      uni.navigateTo({
        url:"../courseModule/coursework"
      })
    },
    toCourseDis(){
      uni.navigateTo({
        url:"../courseModule/courseDiscussion"
      })
    },
    toFaceAnswer(){
      uni.navigateTo({
        url:"../component/faceAnswer/faceAnswer"
      })
    },
    toMaterial(){
      uni.navigateTo({
        url:"../courseModule/course_material"
      })
    },
    toInfo(){
       uni.navigateTo({
        url:"../component/info/info"
      })
    },
    toExam(){
      uni.navigateTo({
        url:"../component/courseExam/courseExam"
      })
    }
  },
};
</script>

<style lang="scss" scoped>
page {
  background-color: #fafafa !important;
}

.enterCourse {
  background-color: #fff;
  width: 710rpx;
  margin: 20rpx auto;
  .gradeBox {
    width: 100%;
    height: 350rpx;
    // border: 1px solid pink;
    padding-top: 56rpx;
    .number {
      width: 100%;
      height: 140rpx;
      // background-color: #ccc;
      // margin-top: 28px;
      display: flex;
      justify-content: space-around;
      view {
        width: 140rpx;
        height: 140rpx;
        line-height: 140rpx;
        text-align: center;
        border-radius: 50%;
        // background-color: rgb(17, 174, 236);
        position: relative;
        /deep/ .van-circle__hover {
          fill: #fff;
        }
        /deep/ .van-circle__text {
          width: 64rpx;
          position: absolute;
          left: 38rpx;
          top: 0px;
          font-size: 28rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #666666;
        }
      
      }
    }
    .title {
      width: 100%;
      height: 100rpx;
      background: #43b4ae;
      border-radius: 10rpx;
      margin-top: 54rpx;
      display: flex;
      justify-content: space-around;
      view {
        width: 33.3%;
        text-align: center;
        height: 50rpx;
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 500;
        margin-top: 25rpx;
        color: #ffffff;
        line-height: 50rpx;
        border-right: 4rpx solid rgba($color: #fff, $alpha: 0.6);
      }
      .last {
        border-right: none;
      }
    }
  }
  .contentBox {
    width: 100%;
    height: 198rpx;
    margin-top: 20rpx;
    // border: 1px solid pink;
    .detaileBox {
      width: 100%;
      .topBox {
        width: 100%;
        height: 34rpx;
        margin-top: 40rpx;
        .icon {
          width: 30rpx;
          height: 34rpx;
          float: left;
          margin-left: 32rpx;
          img {
            width: 100%;
          }
        }
        .title {
          float: left;
          height: 34rpx;
          margin-left: 14rpx;
          font-size: 26rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 34rpx;
        }
        .message {
          height: 34rpx;
          float: right;
          font-size: 26rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #e92222;
          line-height: 34rpx;
          margin-right: 24rpx;
        }
        .color {
          color: #999 !important;
        }
        .right {
          float: right;
          width: 13rpx;
          height: 24rpx;
          margin-right: 30rpx;
          img {
            width: 100%;
          }
        }
      }
      .progress {
        width: 100%;
        height: 10rpx;
        margin-top: 30rpx;
        margin-bottom: 30rpx;
        // padding: 0 15px;
        box-sizing: border-box;
        position: relative;
        /deep/ .u-progress[data-v-0fa21744] {
          position: absolute;
          width: 92%;
          margin-left: 30rpx;
          height: 10rpx !important;
          /deep/ .u-active[data-v-0fa21744] {
            background: #44b4ae !important;
          }
        }
      }
      .footerMessage {
        margin: 0 30rpx;
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #999999;
      }
      .margin {
        margin-top: 30rpx !important;
      }
      .foot {
        width: 690rpx;
        height: 2rpx;
        margin: 22rpx auto 0px;
        background-color: rgba($color: #000, $alpha: 0.1);
      }
    }
  }
}
</style>