<template>
  <div :style="move">
    <img :src="imgpath" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed:{
    move() {
      return {
        "transform": `translate3d(${this.$store.getters.sonmove[this.index].xmove+ "px" },0
        ,${this.$store.getters.sonmove[this.index].zmove+"px"})`,
      };
    },
  },
  mounted() {},

  methods: {},
  props: ["imgpath", "index"],
};
</script>

<style lang="less" scoped>
div {
  width: 600px;
  height: 490px;
  transition: all 0.5s;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  position: relative;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>