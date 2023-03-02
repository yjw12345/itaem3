<template>
  <div class="lunbo" @mouseenter="clear" @mouseleave="time">
    <!-- 不普通的轮播图 -->
    <!-- 长盒子有六个图片，然后会转移 -->
    <div class="father">
      <!-- 就在这里写轮播图好了 -->
      <div
        class="child"
        v-for="(item, index) in childarray"
        :key="index"
        :style="item.css"
      >
        <img :src="item.path" alt="" srcset="" />
      </div>
    </div>
    <div class="right" @click="right">
      <img src="./images/rightarrow.png" alt="" srcset="" />
    </div>
    <div class="left" @click="left">
      <img src="./images/leftarrow.png" alt="" />
    </div>
    <div class="buttonall">
      <li
        v-for="item in childarray"
        :key="item.index"
        @mouseenter="bian(item.index)"
      >
        <i :class="zbc(item.index)"></i>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: 1,
      imgary: [
        require("./images/1.jpg"),
        require("./images/2.jpg"),
        require("./images/3.jpg"),
        require("./images/4.jpg"),
        require("./images/5.jpg"),
        require("./images/6.jpg"),
        require("./images/7.jpg"),
        require("./images/8.jpg"),
      ],
      childarray: [],
    };
  },
  created() {
    //   初始化数组
    for (let index = 0; index < this.imgary.length; index++) {
      const el = this.imgary[index];
      this.childarray.push({
        index: index + 1,
        path: el,
        css: {
          visibility: "hidden",
        },
      });
    }
    this.childarray[0].css.visibility = "visible";
  },
  computed: {},
  mounted() {
    this.time1 = setInterval(() => {
      this.right();
    }, 2000);
  },
  methods: {
    left() {
      // 有八个location位置
      if (this.location <= 1) {
        this.change(8, 1, true);
        this.location = 8;
      } else {
        this.change(this.location - 1, this.location, true);
        this.location--;
      }
    },
    right() {
      if (this.location >= 8) {
        this.change(1, 8, false);
        this.location = 1;
      } else {
        this.change(this.location + 1, this.location, false);
        this.location++;
      }
    },
    bian(index) {
      let flag = index > this.location ? false : true;
      this.change(index, this.location, flag);
      this.location = index;
    },
    change(nw, old, condition) {
      // 直接做一个左转右转的指示变量,condition,为true时，向左，为false，向右
      // 选择直接截胡
      // 这里判断
      if (nw==old) {
        return
      }
      if (!condition) {
        this.childarray.forEach((el) => {
          if (el.index == nw) {
            el.css.visibility = "visible";
            el.css["animation-name"] = "left2";
          } else if (el.index == old) {
            el.css.visibility = "visible";
            el.css["animation-name"] = "left1";
          } else {
            el.css.visibility = "hidden";
            el.css["animation-name"] = "";
          }
        });
        this.$forceUpdate();
      } else {
        this.childarray.forEach((el) => {
          if (el.index == nw) {
            el.css.visibility = "visible";
            el.css["animation-name"] = "right1";
          } else if (el.index == old) {
            el.css.visibility = "visible";
            el.css["animation-name"] = "right2";
          } else {
            el.css.visibility = "hidden";
            el.css["animation-name"] = "";
          }
        });
        this.$forceUpdate();
      }
    },
    zbc(index) {
      // 使用三元运算符好吧
      return index == this.location ? "active" : "normal";
    },
    time() {
      clearInterval(this.time1)
      this.time1 = setInterval(() => {
        this.right();
      }, 2000);
    },
    clear(){
      clearInterval(this.time1)
    }
  },
};
</script>

<style lang="less" scoped>
.lunbo {
  width: 100vw;
  height: 490px;
  position: relative;
  margin-top: 60px;
  .father {
    position: relative;
    div {
      width: 100vw;
      height: 490px;
      position: absolute;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      img {
        width: 100vw;
        height: 490px;
      }
    }
  }
  &:hover {
    .left,
    .right {
      opacity: 1;
    }
  }
  .left,
  .right {
    width: 30px;
    height: 52px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.2s;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .left {
    left: 32px;
  }
  .right {
    right: 32px;
  }
  .buttonall {
    width: 100%;
    justify-content: center;
    display: flex;
    position: absolute;
    bottom: 24px;
    li {
      margin: 0 7px;
      width: 24px;
      height: 24px;
      text-align: center;
      vertical-align: middle;
      i.normal {
        display: inline-block;
        width: 2px;
        height: 8px;
        vertical-align: middle;
        background: #fff;
      }
      i.active {
        display: inline-block;
        border-radius: 20px;
        width: 20px;
        height: 20px;
        border: 2px solid #fff;
        vertical-align: middle;
        background: transparent;
      }
    }
  }
}
</style>