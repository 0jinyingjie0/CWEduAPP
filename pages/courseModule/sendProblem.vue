<template>
  <div class="courseDiscussion">
    <!-- 发送问题页面 -->
    <u-navbar
      title-color="#333"
      back-icon-color="#333"
      :is-fixed="isFixed"
      :is-back="isBack"
      :title="title"
      :title-bold="true"
    >
      <div slot="right" class="slot-wrap" @click="submit">提交</div>
    </u-navbar>

    <div class="contentBox">
      <u-input
        v-model="value"
        type="textarea"
        height="142"
        placeholder="描述问题..."
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBack: true,
      title: "提问问题",
      isFixed: true,
      value:''
    };
  },
  methods: {
    submit() {
      console.log("提交");
    },
  },
};
</script>

<style scoped lang="scss" scoped>
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
    font-weight: 400;
    color: #666666;
  }
  .contentBox {
    width: 690rpx;
    height: 284rpx;
    background: #ffffff;
    // border: 1px solid #ccc;
    margin: 19rpx auto 0;
  }
  .uni-textarea-placeholder {
    margin-left: 20rpx;
    margin-top: 18rpx;
    font-size: 30rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #a8a8a8;
  }
}
</style>