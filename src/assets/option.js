export const pie1 = {
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
}

export const pie2 = {
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
            data: null,
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
}

export const bar1 = {
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
            // data: this.dataset,
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
            // data: [],
            itemStyle: {
                borderRadius: 5,
            },
        },
    ],
    dataset: {
        source: [
            ["旅游行业", 200],
            ["教育培训", 300],
            ["游戏行业", 300],
            ["医疗行业", 900],
            ["电商行业", 1500],
            ["社交行业", 1200],
            ["金融行业", 600],
        ],
    },
}

export const bar2 = {
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
}

export const line1 = {
    title: { text: "人员变化" },
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
            name: "新增人员",
            type: "line",
            // 以圆滑曲线显示
            smooth: "true",
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        },
        {
            name: "需求人员",
            type: "line",
            // 以圆滑曲线显示
            smooth: "true",
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        },
    ],
}

export const line2 = {
    title: { text: "需求量" },
    tooltip: {
        trigger: "axis",
    },
    legend: {
        top: "0%",
        textStyle: {
            color: "black",
            fontSize: 12,
        },
    },
    grid: {
        left: "10",
        right: "10",
        top: "40",
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
            name: "前端",
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
            name: "后端",
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
}

export const map = {
    title: { text: "世界地图" },
    series: {
        name: "地图",
        map: "china",
        type: "map",
        itemStyle: {
            borderWidth: 1,
            borderColor: "skyblue",
        },
    },
}