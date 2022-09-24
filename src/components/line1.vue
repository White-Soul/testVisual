<template>
  <div class="line" ref="line"></div>
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
      this.chart = markRaw(echarts.init(this.$refs.line));
      var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          //   修改图例文字样式
          textStyle: {
            color: "black",
          },
          right: "10%",
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          show: true,
          borderColor: "skyblue",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "black",
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "black",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: "skyblue",
            },
          },
        },
        series: [
          {
            name: "新增粉丝",
            type: "line",
            // 以圆滑曲线显示
            smooth: "true",
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          },
          {
            name: "新增游客",
            type: "line",
            // 以圆滑曲线显示
            smooth: "true",
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
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
.line {
  height: 300px;
}
</style>