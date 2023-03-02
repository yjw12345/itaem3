<template>
  <!-- 这里不得不嵌套一层标签，为了 -->
  <div class="top">
    <!-- 左边的 -->
    <div class="left">
      <img src="./images/logo.png" class="logo" alt="" />
      <div class="left1">
        <li v-for="(item, index) in topics" :key="index">
          {{ item }}
        </li>
      </div>
    </div>
    <div class="right">
      <div class="common">会员</div>
      <div class="common">社区</div>
      <div class="buy">购买</div>
      <div class="magnifier">
        <span style="line-height: 60px"></span>
        <img src="./images/fangda.png" alt="" />
      </div>
      <div class="login">
        <span>登陆</span>
        <span>注册</span>
      </div>
      <div class="shop">
        <img src="./images/shop.png" alt="" />
        <span>0</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: ["商城", "企业购", "政教及大企业", "服务", "品牌"],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
// 真正
.top {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 2.5%;
  height: 60px;
  background: #fff;
  z-index: 999;
  width: 100%;
  margin: 0 auto;
  display: flex;
  box-shadow: 0px 0px 8px 0px rgb(181 181 181 / 50%);
  justify-content: space-between;
  .left {
    display: flex;

    img {
      width: 173px;
      margin-top: 12px;
      height: 34px;
    }
    .left1 {
      padding-left: 36px;
      cursor: default;
      display: flex;
      li {
        margin-right: 30px;
        line-height: 60px;
        font-size: 16px;
        color: #252525;
        border-bottom: 4px solid transparent;
        &:hover {
          border-bottom: 4px solid #e12726;
        }
      }
    }
  }
  .right {
    display: flex;
    .common {
      margin-right: 30px;
      line-height: 60px;
      font-size: 16px;
      color: #252525;
    }
    .buy {
      margin-right: 30px;
      line-height: 60px;
      font-size: 16px;
      color: #252525;
    }
    .magnifier {
      margin-right: 30px;
      img {
        display: inline-block;
        width: 24px;
        height: 24px;
        vertical-align: middle;
      }
    }
    .login {
      margin-right: 15px;

      span {
        line-height: 60px;
        margin-right: 7px;
        font-size: 14px;
      }
      span:first-child::before {
        position: absolute;
        right: -3px;
        display: inline-block;
        margin: 0 5px;
        height: 16px;
        width: 2px;
        background-color: #ccc;
        vertical-align: middle;
      }
      span:hover {
        color: #000;
      }
    }
    .shop {
      display: flex;
      align-items: center;
      position: relative;
      img {
        height: 24px;
      }
      span {
        font-size: 12px;
        position: absolute;
        width: 19px;
        height: 19px;
        line-height: 18px;
        padding-left: 2px;
        top: 12px;
        text-align: center;
        background: red;
        border-radius: 50% 50% 50% 0;
        left: 22px;
        color: #fff;
      }
    }
  }
}
</style>