<template>
  <div class="chart" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
import { markRaw } from "vue";
export default {
  name: "chart",
  data() {
    return {
      chart: null,
    };
  },
  props: ["option"],
  methods: {
    init() {
      this.chart = markRaw(echarts.init(this.$refs.chart));
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

<style scoped>
.chart {
  height: 300px;
}
</style>