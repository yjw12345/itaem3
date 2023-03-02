<template>
  <div class="child" @mouseover="change">
    {{ shuju }}
    <!-- 当我碰到的时候颜色改变 -->
    <!-- 碰到的时候接收vuex -->
    <img :src="img" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("./images/arrow.png"),
    };

  },

  mounted() {},

  methods: {
      change(){
        this.$store.commit("change",this.index)
      }
  },
  props: ["shuju","index"],
};
</script>

<style lang="less" scoped>
.child {
  font-size: 16px;
  font-weight: 600;
  position: relative;
  display: block;
  font-size: 16px;
  color: #252525 ;
  margin-bottom: 26px;
  img {
    width: 12px;
    height: 12px;
    vertical-align: middle;
    vertical-align: top;
    margin-top: 5px;
    margin-left: 5px;
    display: none;
  }
  &:hover {
    color: #e1140a;
    img {
        display: inline-block;
    }
  }
}
</style>