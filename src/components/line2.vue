<template>
  <div class="line1" ref="line1"></div>
</template>

<script>
import * as echarts from "echarts";
import { markRaw } from "vue";
export default {
  data() {
    return {
      chart: null,
    };
  },
  methods: {
    init() {
      this.chart = markRaw(echarts.init(this.$refs.line1));
      var option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads"],
          top: "0%",
          textStyle: {
            color: "black",
            fontSize: 12,
          },
        },
        grid: {
          left: "10",
          right: "10",
          top: "30",
          bottom: "10",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
            ],
            axisLabel: {
              color: "black",
              fontSize: 12,
            },
            axisLine: {
              lineStyle: {
                color: "black",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "black",
              fontSize: 12,
            },
            axisLine: {
              lineStyle: {
                color: "black",
              },
            },
            axisTick: { show: false },
            splitLine: {
              lineStyle: {
                color: "skyblue",
              },
            },
          },
        ],
        series: [
          {
            name: "Email",
            type: "line",
            smooth: true,
            areaStyle: {},
            itemStyle: {
              // color: "#0184d5",
              borderColor: "rgba(221,220,107,.1)",
              borderWidth: 12,
            },
            emphasis: {
              focus: "series",
            },
            data: [
              30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40,
              30, 40, 60, 20, 30, 40, 30, 40, 30, 40, 60, 20, 60, 30,
            ],
            // 单独修改样式
            lineStyle: {
              color: "#0184d5",
              width: 2,
            },
            // 设置拐点
            symbol: "circle",
            symbolSize: 12,
            showSymbol: false,
          },
          {
            name: "Union Ads",
            type: "line",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [
              130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40,
              130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20,
            ],
            // 设置拐点
            symbol: "circle",
            symbolSize: 12,
            showSymbol: false,
            itemStyle: {
              borderColor: "rgba(221,220,107,.1)",
              borderWidth: 12,
            },
          },
        ],
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "blue", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "skyblue", // 100% 处的颜色
            },
          ],
          global: false,
        },
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
.line1 {
  height: 300px;
}
</style>