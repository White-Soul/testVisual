<template>
  <div class="pie1" ref="pie1"></div>
</template>

<script>
import * as echarts from "echarts";
import { markRaw } from "vue";
// 定义一个对象app，后面用
let app = { currentIndex: -1 };
export default {
  name: "chart",
  data() {
    return {
      chart: null,
      a: 0,
      datas: [
        { value: 20, name: "云南" },
        { value: 26, name: "北京" },
        { value: 24, name: "山东" },
        { value: 25, name: "河北" },
        { value: 20, name: "江苏" },
        { value: 25, name: "浙江" },
        { value: 30, name: "四川" },
        { value: 42, name: "湖北" },
      ],
    };
  },
  props: ["type"],
  methods: {
    init() {
      this.chart = markRaw(echarts.init(this.$refs.pie1));
      var option = {
        title: { text: "地区分布" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          bottom: "0",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 12,
          },
        },
        series: [
          {
            name: "地区分布",
            type: "pie",
            radius: ["10%", "70%"],
            center: ["50%", "50%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 5,
            },
            data: this.datas,
            label: {
              fontSize: 10,
            },
            labelLine: {
              length: 6,
              length2: 8,
            },
          },
        ],
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#32c5e9",
          "#9fe6b8",
          "#1d9dff",
        ],
      };
      this.chart.setOption(option);
    },
    resize() {
      this.chart.resize();
    },
    timer() {
      var datalen = this.datas.length;
      // 取消之前高亮的图形
      this.chart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: app.currentIndex,
      });
      app.currentIndex = (app.currentIndex + 1) % datalen;
      // 高亮当前图形
      this.chart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: app.currentIndex,
      });
      // 显示 tooltip
      this.chart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: app.currentIndex,
      });
    },
  },
  mounted() {
    this.init();
    window.addEventListener("resize", this.resize);
    // 设置定时器
    this.a = setInterval(this.timer, 1000);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
    clearInterval(this.a);
  },
};
</script>

<style scoped>
.pie1 {
  height: 400px;
}
</style>