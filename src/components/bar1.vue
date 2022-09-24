<template>
  <div class="bar1" ref="bar1"></div>
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
      this.chart = markRaw(echarts.init(this.$refs.bar1));
      var option = {
        title: { text: "就业行业" },
        grid: {
          left: "22%",
          top: "10%",
          bottom: "10%",
          //   containLabel: true,
        },
        xAxis: {
          // 不显示x轴
          show: false,
        },
        yAxis: [
          {
            type: "category",
            data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            //   不显示y轴线
            axisLine: {
              show: false,
            },
            //   不显示刻度
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "black",
            },
            inverse: true,
          },
          {
            show: true,
            data: [720, 350, 610, 793, 664],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              fontSize: 12,
              color: "black",
            },
            inverse: true,
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            data: [70, 30, 60, 78, 69],
            // 修改第一组柱子圆角
            itemStyle: {
              borderRadius: 20,
            },
            // 柱子间距
            barCategoryGap: 50,
            // 宽度
            barWidth: 10,
            // 设置图形上的文本标签
            label: {
              show: true,
              position: "inside",
              // 自动解析为数据
              formatter: "{c}%",
            },
            yAxisIndex: 0,
            // 调色盘
            color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
            colorBy: "data",
          },
          {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 15,
            data: [100, 100, 100, 100, 100],
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              borderRadius: 15,
            },
            yAxisIndex: 1,
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

<style>
.bar1 {
  height: 300px;
}
</style>