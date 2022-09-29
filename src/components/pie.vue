<template>
  <div class="pie" ref="pie"></div>
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
  props: ["option"],
  methods: {
    init() {
      this.chart = markRaw(echarts.init(this.$refs.pie));
      this.option.series[0].data = this.datas;
      this.chart.setOption(this.option);
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
.pie {
  height: 400px;
}
</style>;
