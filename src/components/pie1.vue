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
        tooltip: {
          trigger: "item",
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
            name: "Access From",
            type: "pie",
            radius: ["40%", "60%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
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
.pie1 {
  height: 400px;
}
</style>