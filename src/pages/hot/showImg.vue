<template>
  <div class="showimg">
    <div class="father" :style="xmove" @mousedown="begin">
      <imgitem
        v-for="(item, index) in imgsrc"
        :key="index"
        :imgpath="item"
        :index="index"
      >
      </imgitem>
    </div>
  </div>
</template>

<script>
import imgitem from "./imgitem.vue";
export default {
  computed: {
    xmove() {
      return {
        transform: `translate3d(${this.$store.getters.fathermove + "px"} ,0,0)`,
      };
    },
  },
  data() {
    return {
      imgsrc: [
        require("./images/9.jpg"),
        require("./images/1.jpg"),
        require("./images/2.jpg"),
        require("./images/3.jpg"),
        require("./images/4.jpg"),
        require("./images/5.jpg"),
        require("./images/6.jpg"),
        require("./images/7.jpg"),
        require("./images/8.jpg"),
        require("./images/9.jpg"),
        require("./images/1.jpg"),
      ],
      position: "",
      flag: false,
    };
  },
  components: { imgitem },
  methods: {
    begin(e) {
      // 由于this指向的问题,使用结构赋值
      let {position,flag}=this
      // 定义commit
      position=e.pageX
      let commit=this.$store.commit
      flag=true
      if (flag) {
        // 移动的api
        let move=function (e) {
          commit("mouse", e.pageX - position);
          position = e.pageX;
        };
        document.addEventListener("mousemove", move);
        // 鼠标弹起来的api
        let up=function () {
          flag = false;
          commit(commit);
          document.removeEventListener("mousemove", move);
          document.removeEventListener("mouseup", up);
        };
        document.addEventListener("mouseup", up);
      }
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
div.showimg {
  float: right;
  width: 900px;
  height: 490px;
  overflow: hidden;
  position: relative;
  // overflowhidden的解决方案是使用positon而已
  transform-style: preserve-3d;
  perspective: 1200px;
  perspective-origin: center;
  &:hover {
    cursor: pointer;
  }
  .father {
    position: absolute;
    display: flex;
    transform-style: preserve-3d;
    transition: all 0.5s;
    transform: translate3d(45px, 0, 0);
  }
}
</style>