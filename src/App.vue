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
            <bar :option="bar1" />
            <bar :option="line1" />
            <bar :option="pie1" />
          </el-col>
          <el-col :span="10">
            <context />
            <Map :option="map" />
          </el-col>
          <el-col :span="7">
            <bar :option="bar2" />
            <bar :option="line2" />
            <pie :option="pie2" />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import bar from "./components/bar.vue";
import context from "./components/context.vue";
import pie from "./components/pie.vue";
import Map from "./components/map.vue";
import { bar1, bar2, line1, line2, pie1, pie2, map } from "./assets/option";
export default {
  components: { bar, context, pie, Map },
  name: "App",
  data() {
    return {
      bar1,
      bar2,
      line1,
      line2,
      pie1,
      pie2,
      map,
    };
  },
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
