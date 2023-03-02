<template>
  <div class="lunbo3">
    <div class="long" :style="move">
      <img alt="" v-for="(item, index) in imgsrc" :key="index" :src="item" />
    </div>
    <div class="choose">
      <div class="father">
        <div class="son">
          <div
            class="item"
            :class="active(index)"
            :style="{ 'background-image': `url(${item})` }"
            v-for="(item, index) in choosesrc"
            :key="index"
            @mouseenter="bianhua(index)"
          >
            <div class="heart">
              <p class="title">智慧交通</p>
              <p class="content">如何改善交通管理，构建更智慧的交通体系？</p>
            </div>
          </div>
        </div>
      </div>
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
        require("./images/3.jpg"),
        require("./images/4.jpg"),
      ],
      choosesrc: [
        require("./images/blue.png"),
        require("./images/red.png"),
        require("./images/purple.png"),
        require("./images/orange.png"),
      ],
      location: 0,
    };
  },
  computed:{
      move(){
          return {transform:`translateX(${this.location*-100+"vw"})`}
      }
  },
  mounted() {},

  methods: {
    active(index) {
      return index == this.location ? "active" : "";
    },
    bian(flag) {
      if (flag) {
        this.location++;
      } else {
        this.location--;
      }
      if (this.location>3) {
          this.location-=4
      }
      if (this.location<0) {
          this.location+=4
      }
    },
    bianhua(index){
        this.location=index
    }
  },
};
</script>

<style lang="less" scoped>
div.lunbo3 {
  width: 100%;
  height: 590px;
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
  .long {
    height: 510px;
    display: flex;
    position: absolute;
    transition: transform 0.6s;
    img {
      width: 100vw;
      height: 510px;
      flex-shrink: 0;
    }
  }
  .left,
  .right {
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
  .choose {
    position: absolute;
    bottom: 0px;
    width: 100%;
    .father {
      width: 1200px;
      margin: 0 auto;
      height: 210px;
      div.son {
        float: right;
        display: flex;
        align-items: flex-end;
        height: 210px;
        .item {
          display: inline-block;
          margin-left: 10px;
          height: 130px;
          width: 210px;
          //   过渡时间
          transition: all 0.5s;
          background-size: cover;
          background-position: center;
          .heart {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title {
              padding: 0 32px;
              font-size: 20px;
              color: #fff;
              margin-bottom: 14px;
              text-align: left;
            }
            .content {
              padding: 0 32px;
              font-size: 12px;
              color: #fff;
              text-align: left;
              line-height: 24px;
            }
          }
        }
                .active {
          height: 210px;
        }
      }
    }
  }
}
</style>