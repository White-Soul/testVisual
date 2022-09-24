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
      dataset: [
        "旅游行业",
        "教育培训",
        "游戏行业",
        "医疗行业",
        "电商行业",
        "社交行业",
        "金融行业",
      ],
      chart: null,
      option: {},
    };
  },
  props: ["type"],
  methods: {
    init() {
      this.chart = markRaw(echarts.init(this.$refs.chart));
      var option = {
        title: { text: "就业行业" },
        color: ["#2f89cf"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "0%",
          top: "50px",
          right: "0%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.dataset,
            axisTick: {
              alignWithLabel: true,
            },
            // 刻度标签样式
            axisLabel: {
              color: "black",
              fontSize: 12,
            },
            // x坐标轴样式
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // 刻度标签样式
            axisLabel: {
              color: "black",
              fontSize: 12,
            },
            // y坐标轴样式
            axisLine: {
              show: true,
              lineStyle: {
                color: "skyblue",
                width: 0.5,
              },
            },
            // y轴分割线
            splitLine: {
              lineStyle: {
                color: "skyblue",
                width: 0.5,
              },
            },
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "35%",
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              borderRadius: 5,
            },
          },
        ],
      };
      this.chart.setOption(option);
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