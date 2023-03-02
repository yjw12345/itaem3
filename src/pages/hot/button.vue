<template>
  <div class="father">
    <div class="left" @click="bian(false)"></div>
    <div class="right" @click="bian(true)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {
      bian(a){
          this.$store.commit("bian",a)
      }
  },
};
</script>

<style lang="less" scoped>
div.father {
  position: absolute;
  right: 37px;
  top: 7px;
  overflow: hidden;
  .left,
  .right {
    display: inline-block;
    width: 28px;
    height: 28px;
    vertical-align: middle;
    cursor: pointer;
    background-size: cover;
  }
  .left {
    margin-right: 8px;
    background-image: url(./images/leftarrow.png);
    &:hover {
      background-image: url(./images/redleft.png);
    }
  }

  .right {
    background-image: url(./images/rightarrow.png);
    &:hover {
      background-image: url(./images/redright.png);
    }
  }
}
</style>