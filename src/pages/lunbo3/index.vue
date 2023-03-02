<template>
  <div class="lunbo3">
    <div class="long" :style="fatherarray" @mousedown="begin">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in imgary"
        :key="index"
        :style="childarray[index]"
      />
    </div>
    <div class="right" @click="bian(true)">
      <img src="./images/rightarrow.png" alt="" srcset="" />
    </div>
    <div class="left" @click="bian(false)">
      <img src="./images/leftarrow.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgsrc: [
        require("./images/1.jpg"),
        require("./images/2.jpg"),
        require("./images/3.webp"),
      ],
      childary: [],
      location: 4,
      flag: true,
    };
  },
  // 触发
  computed: {
    childarray() {
      let location = this.location;
      // 定义子数组
      let child = [];
      for (let i = 0; i < 9; i++) {
        // 定义图片距离中心图片的位置数
        let a = Math.abs(i - location);
        let xmove = 20 * (i - location);
        let zmove = -320 * a;
        let time;
        if (!this.flag) {
          time = "500ms";
        } else {
          time = "0ms";
        }
        child.push({
          transform: `translate3d(${xmove + "px"},0,${zmove + "px"})`,
          "transition-duration": time,
        });
      }

      return child;
    },
    imgary() {
      let ary = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < this.imgsrc.length; j++) {
          // 标记位置,创建图片路径，还有标记位置
          const el = this.imgsrc[j];
          //添加图片
          ary.push(el);
        }
      }
      return ary;
    },
    fatherarray() {
      let ary = {
        transform: `translate3d(${-(this.location * 900 - 150) + "px"},0,0)`,
      };
      if (!this.flag) {
        ary["transition-duration"] = "500ms";
      } else {
        ary["transition-duration"] = "0ms";
      }
      return ary;
    },

  },
  methods: {
    // 对于位移，已经没有问题了
    bian(value) {
      if (this.location <= 2 ||this.location>=6) {
        this.fuyuan();
      }
      setTimeout(() => {
        this.flag = false;
        this.$forceUpdate();
        if (value) {
          this.location++;
        } else {
          this.location--;
        }
        setTimeout(() => {
          this.flag = true;
        }, 500);
      }, 50);
    },
    begin(e) {
      // 由于this指向的问题,使用结构赋值
      let { position } = this;
      // 定义commit
      position = e.pageX;
      this.flag = true;
      if (this.location <= 2 ||this.location>=6) {
        this.fuyuan();
      }
      if (this.flag) {
        // 移动的api
        let move = function (e) {
          this.mouse(e.pageX - position);
          position = e.pageX;
        }.bind(this);
        document.addEventListener("mousemove", move);
        // 鼠标弹起来的api
        let up = function () {
          this.mouseup();
          document.removeEventListener("mousemove", move);
          document.removeEventListener("mouseup", up);
        }.bind(this);
        document.addEventListener("mouseup", up);
      }
    },
    mouseup() {
      this.location = Math.round(this.location);
      this.flag = false;
      setTimeout(() => {
        this.flag=true
      }, 500);
    },
    mouse(value) {
      let k = value / 900;
      this.location -= k;
    },
    // 这里进行imgsrc的排列,进行复原
    // 第一次调用，srcchange不应该动，new和old并没有改变
    // 路径改变的研究对象是中心图片路径,新值和旧值只能通过新旧来判断
    fuyuan() {
      this.flag = true;
      if (this.location<=2) {
        this.location += 3;
      }
      if (this.location>=6) {
        this.location -=3
      }
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="less" scoped>
.lunbo3 {
  width: 1200px;
  height: 510px;
  margin: 0 auto;
  position: relative;
  // overflow: hidden;
  perspective: 1200px;
  transform-style: preserve-3d;
  perspective-origin: center;
  div.long {
    z-index: -1;
    display: flex;
    height: 510px;
    // 透视
    transform-style: preserve-3d;
    position: absolute;
    img {
      display: block;
      flex-shrink: 0;
      height: 510px;
      width: 900px;
      transform-style: preserve-3d;
      -webkit-transform-style: preserve-3d;
      position: relative;
      z-index: 1;
    }
  }
  // 按钮的样式
  .left,
  .right {
    z-index: 3;
    width: 30px;
    height: 52px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
}
</style>