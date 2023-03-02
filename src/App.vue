<template>
  <div id="app">
    <!-- 顶部 -->
    <top />
    <!-- 第一个轮播图 -->
    <lunbo />
    <!-- 第二个区域 -->
    <second />
    <title1 :infor="'新闻中心'"/>
    <lunbo2/>
    <title1 :infor="'联想公益'"/>
    <lunbo3/>
    <title1 :infor="'成功案例'"/>
    <lunbo4/>
    <title1 :infor="'热门推荐'"/>

    <!-- 最后一个3d轮播图 -->
    <hot />
  </div>
</template>

<script>
import lunbo from "@/pages/lunbo";
import hot from "@/pages/hot";
import top from "@/pages/top";
import second from "@/pages/second";
import lunbo2 from '@/pages/lunbo2';
import title1 from "@/pages/title1";
import lunbo3 from "@/pages/lunbo3"
import lunbo4 from "@/pages/lunbo4"
export default {
  name: "App",
  components: {
    hot,
    top,
    lunbo,
    second,
    lunbo2,
    title1,
    lunbo3,
    lunbo4
  },
};
</script>

<style lang="less" >
//
@keyframes left1 {
  from {
    left: 0;
  }
  to {
    left: -100vw;
  }
}
@keyframes left2 {
  from {
    left: 100vw;
  }
  to {
    left: 0;
  }
}
@keyframes right1 {
  from {
    left: -100vw;
  }
  to {
    left: 0;
  }
}
@keyframes right2 {
  from {
    left: 0;
  }
  to {
    left: 100vw;
  }
}
#app {
  overflow: hidden;
  h2 {
    height: 38px;
    font-size: 32px;
    color: #252525;
    font-weight: 400;
    float: left;
    font-weight: bold;
  }
}
// css禁止拖动
img {
  -webkit-user-drag: none;
}
/* 设计颜色主题 */
body {
  margin: 0;
}
* {
  margin: 0;
  padding: 0;
  /* css3盒子模型 */
  box-sizing: border-box;
}
/* em 和 i 斜体的文字不倾斜 */
em,
i {
  font-style: normal;
}
/* 去掉li 的小圆点 */
li {
  list-style: none;
}

img {
  /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
  border: 0;
  /* 取消图片底侧有空白缝隙的问题 */
  vertical-align: middle;
}

button {
  /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
  cursor: pointer;
}

a {
  text-decoration: none;
}

a:hover {
  color: #c81623;
}

button,
input {
  /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    "\5B8B\4F53", sans-serif;
  /* 默认有灰色边框我们需要手动去掉 */
  border: 0;
  outline: none;
}

body {
  /* CSS3 抗锯齿形 让文字显示的更加清晰 */
  -webkit-font-smoothing: antialiased;
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    "\5B8B\4F53", sans-serif;
  background-color: #f7f7f7;
}

.hide,
.none {
  display: none;
}
/* 清除浮动 */
.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}

.clearfix {
  *zoom: 1;
}
</style>
