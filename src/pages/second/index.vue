<template>
  <div>
    <div class="top">
      <p>个人及家庭产品</p>
      <p>中小企业产品</p>
      <p>政教及大企业产品</p>
    </div>
    <div class="second">
      <div>
        <img src="./images/1.png" alt="" class="kind1" />
        <img src="./images/2.png" alt="" class="kind2" />
        <span> Lenovo台式机 </span>
      </div>
      <div>
        <img src="./images/1.png" alt="" class="kind1" />
        <img src="./images/2.png" alt="" class="kind2" />
        <span> Lenovo台式机 </span>
      </div>
      <div>
        <img src="./images/1.png" alt="" class="kind1" />
        <img src="./images/2.png" alt="" class="kind2" />
        <span> Lenovo台式机 </span>
      </div>
      <div>
        <img src="./images/1.png" alt="" class="kind1" />
        <img src="./images/2.png" alt="" class="kind2" />
        <span> Lenovo台式机 </span>
      </div>
      <div>
        <img src="./images/1.png" alt="" class="kind1" />
        <img src="./images/2.png" alt="" class="kind2" />
        <span> Lenovo台式机 </span>
      </div>
      <div>
        <img src="./images/1.png" alt="" class="kind1" />
        <img src="./images/2.png" alt="" class="kind2" />
        <span> Lenovo台式机 </span>
      </div>
      <div>
        <img src="./images/1.png" alt="" class="kind1" />
        <img src="./images/2.png" alt="" class="kind2" />
        <span> Lenovo台式机 </span>
      </div>
      <div>
        <img src="./images/1.png" alt="" class="kind1" />
        <img src="./images/2.png" alt="" class="kind2" />
        <span> Lenovo台式机 </span>
      </div>
    </div>
    <div class="show">
      <div class="item">
        <img src="./images/maozi.jpg" alt="" />
        <p>超级至尊绿帽</p>
        <span class="infor"> 此帽子一下，帅翻全场 </span>
        <div class="price">
          <span class="fuhao">￥</span>
          <span class="number">8848</span>
        </div>
      </div>
      <div class="item">
        <img src="./images/maozi.jpg" alt="" />
        <p>超级至尊绿帽</p>
        <span class="infor"> 此帽子一下，帅翻全场 </span>
        <div class="price">
          <span class="fuhao">￥</span>
          <span class="number">8848</span>
        </div>
      </div>
      <div class="item">
        <img src="./images/maozi.jpg" alt="" />
        <p>超级至尊绿帽</p>
        <span class="infor"> 此帽子一下，帅翻全场 </span>
        <div class="price">
          <span class="fuhao">￥</span>
          <span class="number">8848</span>
        </div>
      </div>
      <div class="item">
        <img src="./images/maozi.jpg" alt="" />
        <p>超级至尊绿帽</p>
        <span class="infor"> 此帽子一下，帅翻全场 </span>
        <div class="price">
          <span class="fuhao">￥</span>
          <span class="number">8848</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.top {
  background-color: #fff;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  p {
    flex: 1;
    text-align: center;
    line-height: 72px;
    box-sizing: border-box;
    height: 72px;
    font-size: 20px;
    color: #454545;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    &:hover {
      border-bottom: 4px solid #e12726;
    }
  }
}
.second {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 140px;
  div {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 44px;
      height: 44px;
      margin-top: 32px;
      display: none;
      &:first-child {
        display: inline-block;
      }
      &:nth-child(2) {
        display: none;
      }
    }
    span {
      margin-top: 5px;
      color: #707070;
    }
    &:hover {
      img {
        &:first-child {
          display: none;
        }
        &:nth-child(2) {
          display: inline-block;
        }
      }
      span {
        color: #000;
      }
    }
  }
}
.show {
    width: 100%;
    display: flex;
    justify-content: center;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 296px;
    height: 392px;
    margin-right: 5px;
    background-color: #fff;
    img {
      width: 190px;
      height: 190px;
      margin-top: 30px;
    }
    p {
      height: 29px;
      font-size: 20px;
      padding: 0 20px;
      color: #252525;
      text-align: center;
      font-weight: bold;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      text-align: center;
      margin-top: 30px;
    }
    span.infor {
      height: 36px;
      opacity: 0.6;
      font-size: 12px;
      color: #5f5f5f;
      text-align: center;
      line-height: 18px;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin: 13px auto 13px;
      padding: 0 49px;
    }
    div.price {
      span.fuhao {
        height: 18px;
        font-size: 20px;
        color: #252525;
        text-align: center;
        line-height: 18px;
        font-weight: 400;
        font-size: 12px;
      }
      span.number {
        height: 18px;
        font-size: 20px;
        color: #252525;
        text-align: center;
        line-height: 18px;
        font-weight: 400;
      }
    }
  }
}
</style>