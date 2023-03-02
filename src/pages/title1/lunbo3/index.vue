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
        require("./images/4.jpg"),
      ],
      imgary:[],

      location:6
    };
  },
  created(){
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < this.imgsrc.length; j++) {
        // 标记位置,创建图片路径，还有标记位置
        const el = this.imgsrc[j];
        //添加图片
        imgary.push(el)

      }
    }
  },
  computed:{
    childary(){

    },
    fatherary(){
      
    }
  },
  methods:{

  }
  // 触发
};
</script>

<style lang="less" scoped>
.lunbo3 {
  width: 1200px;
  height: 510px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
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