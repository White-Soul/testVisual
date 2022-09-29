<template>
  <div class="map" ref="map"></div>
</template>

<script>
import * as echarts from "echarts";
// 标记一个对象，使其永远不会再成为响应式对象。
import { markRaw } from "vue";
import china from "../assets/china.json";
export default {
  data() {
    return {
      chart: null,
    };
  },
  props: ["option"],
  methods: {
    init() {
      echarts.registerMap("china", china);
      this.chart = markRaw(echarts.init(this.$refs.map));
      this.chart.setOption(this.option);
    },
    resize() {
      this.chart.resize();
    },
  },
  mounted() {
    this.init();
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style>
.map {
  height: 600px;
}
</style>