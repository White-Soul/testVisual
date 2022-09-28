<template>
  <div class="pie1" ref="pie1"></div>
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
  props: ["type"],
  methods: {
    init() {
      this.chart = markRaw(echarts.init(this.$refs.pie1));
      var option = {
        title: { text: "年龄分布" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} ({d}%)",
          // formatter: "{d}%",
        },
        legend: {
          left: 10,
          bottom: "0%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 12,
            color: "black",
          },
        },
        series: [
          {
            name: "人数比例",
            type: "pie",
            radius: ["40%", "60%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            // 文字标签是否显示
            label: {
              show: false,
              position: "center",
            },
            // 连接文字和图片的线是否显示
            labelLine: {
              show: false,
            },
            data: [
              { value: 10, name: "20岁以下" },
              { value: 40, name: "20-29岁" },
              { value: 20, name: "30-39岁" },
              { value: 20, name: "40-49岁" },
              { value: 10, name: "50岁以上" },
            ],
          },
        ],
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
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
.pie1 {
  height: 400px;
}
</style>