<template>
  <div class="coursePlay">
    <!-- 课程点播页面 -->
    <div class="demo">
        <video id='video1' class="video" :src="src" autoplay="false" duration="" controls="true" direction="-90"
            show-mute-btn="true" @play="onstart" @pause="onpause" @ended="onfinish" @error="onfail" @waiting="waiting"
            @timeupdate="timeupdate" @fullscreenchange="fullscreenchange"></video>
      <!-- <div @click="onon">播放</div>
      <div @click="down">暂停</div> -->
    </div>
    <div class="centerBox">
      <div class="navBox">
        <div class="left">
          <div class="section">章节</div>
          <div class="bottomLine"></div>
        </div>
        <div class="mid">完成学习倒计时363秒</div>
      </div>

      <div class="detaileBox">
        <u-collapse :accordion="false">
          <u-collapse-item title="课程案例">
            <div class="imgAndText">
              <div class="imgAndTittle">
                <div class="img">
                  <img src="../Img/courseImg/shipin.png" alt="" />
                </div>
                <div class="title">案例一：中国的财政政策</div>
              </div>
              <div class="text">需学习10分0秒，已学习5分30秒</div>
            </div>

             <div class="imgAndText">
              <div class="imgAndTittle">
                <div class="img">
                  <img src="../Img/courseImg/shipin.png" alt="" />
                </div>
                <div class="title">案例二：灯塔的故事</div>
              </div>
              <div class="text">需学习10分0秒，已学习5分30秒</div>
            </div>

             <div class="imgAndText">
              <div class="imgAndTittle">
                <div class="img">
                  <img src="../Img/courseImg/shipin.png" alt="" />
                </div>
                <div class="title">案例三：世界各国治理通货膨胀的良策</div>
              </div>
              <div class="text">需学习10分0秒，已学习5分30秒</div>
            </div>
          </u-collapse-item>

            <u-collapse-item title="习题讲解">
            <div class="imgAndText">
              <div class="imgAndTittle">
                <div class="img">
                  <img src="../Img/courseImg/shipin.png" alt="" />
                </div>
                <div class="title">习题讲解一</div>
              </div>
              <div class="text">需学习10分0秒，已学习5分30秒</div>
            </div>

             <div class="imgAndText">
              <div class="imgAndTittle">
                <div class="img">
                  <img src="../Img/courseImg/shipin.png" alt="" />
                </div>
                <div class="title">习题讲解二</div>
              </div>
              <div class="text">需学习10分0秒，已学习5分30秒</div>
            </div>

             <div class="imgAndText">
              <div class="imgAndTittle">
                <div class="img">
                  <img src="../Img/courseImg/shipin.png" alt="" />
                </div>
                <div class="title">习题讲解三</div>
              </div>
              <div class="text">需学习10分0秒，已学习5分30秒</div>
            </div>
          </u-collapse-item>
        </u-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v",
		};
	},
	onReady() {
		this.context = uni.createVideoContext("video1", this);
	},
	mounted() {},
	methods: {
		onstart(e) {
			console.log("onstart:" + JSON.stringify(e));
		},
		onpause(e) {
			console.log("onpause:" + JSON.stringify(e));
		},
		onfinish(e) {
			console.log("onfinish:" + JSON.stringify(e));
		},
		onfail(e) {
			console.log("onfail:" + JSON.stringify(e));
		},
		fullscreenchange(e) {
			console.log("fullscreenchange:" + JSON.stringify(e));
		},
		waiting(e) {
			console.log("waiting:" + JSON.stringify(e));
		},
		timeupdate(e) {
			console.log("timeupdate:" + JSON.stringify(e));
		},
		play() {
			this.context.play();
		},
		pause() {
			this.context.pause();
		},
		seek() {
			this.context.seek(20);
		},
		stop() {
			this.context.stop();
		},
		fullScreen() {
			this.context.requestFullScreen({
				direction: 90
			});
		},
		exitFullScreen() {
			this.context.exitFullScreen();
		},
		sendDanmu() {
			this.context.sendDanmu({
				text: '要显示的弹幕文本',
				color: '#FF0000'
			});
		},
		playbackRate() {
			this.context.playbackRate(2);
		}
	},
};
</script>

<style lang="scss" scoped>
    .video {
        width: 750rpx;
		/* #ifdef H5 */
		width: 100%;
		/* #endif */
        height: 400rpx;
        background-color: #808080;
    }

    .btn {
        margin-top: 5px;
        margin-bottom: 5px;
    }
	
	.centerBox {
		padding: 32rpx;
	}
	
    .navBox {
		margin-left: 0;
		margin-right: 0;
		border-bottom: 2rpx solid rgba($color: #000000, $alpha: 0.1);
		display: flex;
		justify-content: space-between;
    }
	
	.left {
		display: flex;
		flex-direction: column;
	}
	.section {
	  height: 32rpx;
	  font-size: 32rpx;
	  font-weight: bold;
	  color: #333333;
	}
	.bottomLine {
	  width: 64rpx;
	  height: 6rpx;
	  background: #43b4ae;
	  margin: 20rpx 10rpx 0 0rpx;
	  
	  .mid {
	    height: 82rpx;
	    line-height: 82rpx;
	    line-break: 82rpx;
	    float: right;
	    font-size: 24rpx;
	    font-family: PingFang SC;
	    font-weight: 400;
	    color: #999999;
	    margin-right: 20rpx;
	  }
	  .right {
	    float: right;
	    width: 122rpx;
	    height: 39rpx;
	    border: 2rpx solid #43b4ae;
	    border-radius: 10rpx;
	    text-align: center;
	    font-size: 32rpx;
	    font-family: PingFang SC;
	    font-weight: 400;
	    color: #43b4ae;
	    line-height: 38rpx;
	    margin-top: 22rpx;
	  }
	}
	.detaileBox {
	  /deep/ .u-collapse-head {
	    height: 84rpx;
	  }
	  /deep/ .u-collapse-title {
	    margin-left: 30rpx;
	    font-size: 32rpx;
	    font-family: PingFang SC;
	    font-weight: 500;
	    color: #333333;
	    // line-height: 42px;
	  }
	  /deep/ .u-collapse-body {
	    background-color: #fafafa;
	  }
	  .imgAndText {
	    width: 690rpx;
	    height: 126rpx;
	    margin: 0 auto;
	    padding-top: 25rpx;
	    box-sizing: border-box;
	    border-bottom: 2rpx solid rgba($color: #000000, $alpha: 0.1);
	    .imgAndTittle {
	      height: 34rpx;
	      // margin-top: 17px;
	      .img {
	        float: left;
	        width: 30rpx;
	        height: 34rpx;
	        margin: 0 auto;
	        margin-left: 30rpx;
	        img {
	          width: 100%;
	        }
	      }
	      .title {
	        float: left;
	        margin-left: 24rpx;
	        height: 34rpx;
	        line-height: 34rpx;
	        font-size: 32rpx;
	        font-family: PingFang SC;
	        font-weight: 500;
	        color: #333333;
	      }
	    }
		.text {
			margin-top: 16rpx;
			margin-left: 84rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #999999;
		}
	  }
	}
</style>