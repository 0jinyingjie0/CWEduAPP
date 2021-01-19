<template>
  <view class="box" style="width: 100%; overflow: hidden">
    <!-- <u-navbar
      title-color="#fff"
      back-icon-color="#ffffff"
      :is-fixed="isFixed"
      :is-back="isBack"
      :background="background"
      :back-text-style="{ color: '#fff' }"
      :title="title"
      :back-icon-name="backIconName"
      :back-text="backText"
    >
    </u-navbar> -->

    <view class="body">
      <img src="../Img/loginImg/back.png" alt="" />
      <div class="cardBox">
        <div class="card">
          <div class="cardTittle">XXX大学</div>
          <div class="userName">
            <img src="../Img/loginImg/yonghuming.png" alt="" />
            <u-input
              class=""
              v-model="userName"
              type="text"
              border
              placeholder="请输入账号/手机号"
            />
          </div>
          <div class="userPass">
            <img src="../Img/loginImg/mima.png" alt="" />
            <u-input
              v-model="password"
              type="text"
              border
              placeholder="请输入密码"
            />
          </div>
          <div class="userPass">
            <img src="../Img/loginImg/mima.png" alt="" />
            <u-input
              v-model="passwordAG"
              type="text"
              border
              placeholder="再次输入密码"
            />
          </div>

          <u-button class="login" @click="toLogin">注册</u-button>
          <div class="registerContainer">
            <u-checkbox-group>
              <u-checkbox v-model="rememberPassword" active-color="#43B4AE"
                >同意
                <span class="register" @click="toSearch"
                  >《隐私政策》</span
                ></u-checkbox
              >
            </u-checkbox-group>
          </div>
        </div>
      </div>
    </view>
    <u-loading
      mode="circle"
      :show="loading"
      color="ligntblue"
      size="100"
    ></u-loading>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      passwordAG: "",
      rememberPassword: "",
      loading: false,
    };
  },
  methods: {
    toLogin() {},
    toSearch() {
      uni.navigateTo({
        url: "../login/login",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  img {
    width: 750rpx;
  }
  .cardBox {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -169rpx;
    .card {
      width: 626rpx;
      height: 766rpx;
      background: #ffffff;
      box-shadow: 0px 11rpx 37rpx 3rpx rgba(67, 180, 174, 0.09);
      border-radius: 20rpx;
      box-sizing: border-box;
      .cardTittle {
        margin: 80rpx 251rpx 78rpx 251rpx;
        width: 125rpx;
        height: 28rpx;
        font-size: 30rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #26c2b5;
        line-height: 23rpx;
      }
      .userName,
      .userPass {
        width: 480rpx;
        height: 72rpx;
        margin: 0 auto;
        .u-input {
          padding-left: 102rpx !important;
          .uni-input-placeholder {
            width: 210rpx;
            height: 24rpx;
            font-size: 24rpx;
            font-family: PingFang SC;
            font-weight: 500;
            color: #999999;
            line-height: 24rpx;
          }
        }
      }
      .userName {
        position: relative;
        img {
          width: 30rpx;
          height: 35rpx;
          position: absolute;
          top: 17rpx;
          left: 30rpx;
        }
      }
      .userPass {
        margin-top: 46rpx;
        position: relative;
        img {
          width: 20rpx;
          height: 32rpx;
          position: absolute;
          top: 20rpx;
          left: 35rpx;
        }
      }

      .login {
        margin: 78rpx auto 21rpx;
        width: 480rpx;
        height: 72rpx;
        background: #43b4ae;
        border-radius: 10px;
      }
      .registerContainer {
        // width: 79.5px;
        width: 260rpx;
        height: 24rpx;
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 24rpx;
        margin: 0 auto;
        /deep/ .u-checkbox__icon-wrap--square[data-v-54acf820] {
          width: 20rpx !important;
          height: 20rpx !important;
          border-radius: 0px;
        }
        /deep/ .u-checkbox__label[data-v-54acf820] {
          //   width: 73.5px;
          width: 192rpx;
          height: 24rpx;
          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 24rpx;
        }
        .register {
          color: #43b4ae;
        }
      }
    }
  }
}
</style>
