<template>
  <div class="app">
    <el-container>
      <el-header height="70px">
        <el-row>
          <el-col :push="9" :span="6">
            <h1>数据可视化-ECharts</h1>
          </el-col>
          <el-col :push="10" :span="5">
            <p style="float: right">{{ date }}</p>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row :gutter="15">
          <el-col :span="7">
            <bar />
            <line-1 />
            <pie-1 />
          </el-col>
          <el-col :span="10">
            <context />
            <Map />
          </el-col>
          <el-col :span="7">
            <bar-1 />
            <line-2 />
            <pie-2 />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Map from "./components/map.vue";
import bar from "./components/bar.vue";
import Bar1 from "./components/bar1.vue";
import Line1 from "./components/line1.vue";
import Line2 from "./components/line2.vue";
import Pie1 from "./components/pie1.vue";
import Pie2 from "./components/pie2.vue";
import context from "./components/context.vue";
export default {
  components: { bar, Map, Bar1, Line1, Line2, Pie1, Pie2, context },
  name: "App",
  computed: {
    date() {
      return new Date().toLocaleDateString();
    },
  },
};
</script>

<style>
html,
body,
#app,
.el-container,
.app {
  margin: 0;
  padding: 0;
  height: 100%;
}
/* .el-row {
  border: 1px solid skyblue;
} */
/* .el-header {
  margin: 0;
  padding: 0;
  border: 1px solid black;
} */
/* .el-main {
  border: 1px solid black;
} */
/* .text {
  height: 100px;
  margin: 20px 0;
  border: 1px solid black; 
} */
.el-container {
  text-align: center;
}
</style>
