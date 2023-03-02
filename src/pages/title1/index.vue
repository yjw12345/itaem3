<template>
  <div class="top">
    <h2>{{ infor }}</h2>
    <a>更多</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: ["infor"],
  methods: {},
};
</script>

<style lang="less" scoped>
.top {
  width: 1200px;
  margin: 38px auto;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 32px;
    color: #252525;
    font-weight: bold;
  }
  a {
    vertical-align: middle;
    display: inline-block;
    line-height: 46px;
    cursor: pointer;
    position: relative;
    font-size: 16px;
    color: #606060;
    vertical-align: middle;
  }
  a:after {
    content: "";
    width: 5px;
    height: 5px;
    position: absolute;
    top: 20px;
    right: -7px;
    border-top: 1px solid #606060;
    border-right: 1px solid #606060;
    transform: rotate(45deg);
  }
}
</style>