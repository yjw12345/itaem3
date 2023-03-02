<template>
  <div class="lunbo2">

    <div class="heart">
      <div class="leftshow">
        <div class="long" :style="move">
          <img
            :src="item"
            alt=""
            v-for="(item, index) in imgsrc"
            :key="index"
          />
        </div>
        <div class="button">
          <span
            v-for="(item, index) in imgsrc"
            :key="index"
            :class="judge(index + 1)"
          >
          </span>
        </div>
      </div>
      <div class="rightchoose">
        <div class="item" :class="panduan(1)" @mouseenter="touch(1)">
          <div class="left">01</div>
          <div class="right">
            <p class="title">营收破1200亿！联想集团第三财季再创新高</p>
            <p class="content">
              2022年2月23日——中国数字经济领导企业联想集团（HKSE：992）（ADR：LNVGY）公布截至2021年12月31日的2021/22财年第三财季业绩：营业额历史性突破200亿美元，同比增长16%至1287亿人民币；净利润40.9亿人民币，同比提升62%，亦创历史新高。
            </p>
            <p class="time">2022年2月23日</p>
          </div>
        </div>
        <div class="item" :class="panduan(2)" @mouseenter="touch(2)">
          <div class="left">01</div>
          <div class="right">
            <p class="title">营收破1200亿！联想集团第三财季再创新高</p>
            <p class="content">
              2022年2月23日——中国数字经济领导企业联想集团（HKSE：992）（ADR：LNVGY）公布截至2021年12月31日的2021/22财年第三财季业绩：营业额历史性突破200亿美元，同比增长16%至1287亿人民币；净利润40.9亿人民币，同比提升62%，亦创历史新高。
            </p>
            <p class="time">2022年2月23日</p>
          </div>
        </div>
        <div class="item" :class="panduan(3)" @mouseenter="touch(3)">
          <div class="left">01</div>
          <div class="right">
            <p class="title">营收破1200亿！联想集团第三财季再创新高</p>
            <p class="content">
              2022年2月23日——中国数字经济领导企业联想集团（HKSE：992）（ADR：LNVGY）公布截至2021年12月31日的2021/22财年第三财季业绩：营业额历史性突破200亿美元，同比增长16%至1287亿人民币；净利润40.9亿人民币，同比提升62%，亦创历史新高。
            </p>
            <p class="time">2022年2月23日</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgsrc: [
        require("./images/1.png"),
        require("./images/2.jpg"),
        require("./images/3.jpg"),
      ],
      location: 1,
    };
  },

  computed: {
    move(){
      return {transform:`translateX(${-(this.location-1)*739}px)`}
    }
  },

  methods: {
    judge(index) {
      return index == this.location ? "active" : "normal";
    },
    touch(index) {
      this.location = index;
    },
    panduan(index){
      console.log(123);
      return index == this.location ? "itemchange" : "";
    },
  },
};
</script>

<style lang="less" scoped>
.lunbo2 {
  width: 1200px;
  margin: 0 auto;

  .heart {
    display: flex;
    margin-top: 38px;
    .leftshow {
      width: 739px;
      height: 438px;
      overflow: hidden;
      position: relative;
      .long {
        display: flex;
        height: 438px;
        transition: transform 1s;
        img {
          height: 438px;
          width: 739px;
          flex-shrink: 0;
        }
      }
      .button {
        position: absolute;
        bottom: 10px;
        text-align: center;
        width: 100%;
        span {
          margin: 0 5px;
          display: inline-block;
        }
        .normal {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 100%;
          background: #000;
          opacity: 0.5;
          background-color: #fff;
        }
        .active {
          background-color: #fff;
          width: 35px;
          height: 10px;
          border-radius: 10px;
          opacity: 1 !important;
        }
      }
    }
    .rightchoose {
      margin-left: 10px;
      width: 450px;
      height: 438px;
      display: flex;
      flex-direction: column;
      .item {
        width: 450px;
        flex: 1;
        cursor: pointer;

        background: #f4f4f4;
        border-bottom: 2px solid #fff;
        .left {
          float: left;
          width: 89px;
          height: 100%;
          text-align: center;
          line-height: 103px;
          font-size: 46px;
          color: #c9c9c9;
          font-weight: bold;
        }
        .right {
          padding-top: 38px;
          width: 360px;
          height: 100%;
          float: left;
          position: relative;
          .title {
            width: 90%;
            font-size: 18px;
            line-height: 20px;
            color: #252525;
            font-weight: 600;
            margin-bottom: 8px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .content {
            width: 85%;
            font-size: 14px;
            color: #7b7b7b;
            font-weight: 400;
            margin-bottom: 16px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .time {
            font-size: 12px;
            color: #7b7b7b;
            font-weight: 400;
          }
        }
      }
      .itemchange {
        background: #fff;
        border-bottom: 2px solid #e12726;
        .left {
          color: #e12726;
        }
      }
    }
  }
}
</style>