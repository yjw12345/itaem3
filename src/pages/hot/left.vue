<template>
  <div class="father">
      <left-item v-for="(item, index) in infor" :key="index" :shuju="item" :index="index+1">

      </left-item>
  </div>
</template>

<script>
import leftItem from './leftItem.vue';
export default {
  components: { leftItem },
  data() {
    return {
      infor: [
        "联想",
        "以思想进化时代",
        "线下门店查询",
        "联想拯救者集结",
        "联想企业购",
        "联想社区",
        "大,有作为",
        "IP周边",
        "windows11",
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.father {
  padding-top: 14px;
  float: left;
  width: 290px;
}
</style>