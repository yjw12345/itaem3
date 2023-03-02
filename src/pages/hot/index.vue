<template>
  <div class="hot">
    <left />
    <showimg />
    <button1 />
  </div>
</template>

<script>
import left from "./left.vue";
import showimg from "./showImg.vue";
import button1 from "./button.vue";
export default {
  data() {
    return {};
  },
  components: { left, showimg, button1 },
  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.hot {
  position: relative;
  width: 1200px;
  margin: 50px auto;
  overflow: hidden;
}
</style>