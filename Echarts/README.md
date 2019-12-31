```js
const lineChart = this.$echarts.init(document.getElementById(id));
const lineOption = {
    grid: {
        top: '30px',
        bottom: '30px',
        right: '0px' // 这个设置距离容器的边距，很重要
    },
    xAxis: {
        type: 'category',
        data: xData,
        boundaryGap: false, // 这个用来设置label是对准tick还是对准中间，重要
        splitLine: { // 这是竖着的整条线
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#eeeeee',
                width: 1,
                opacity: 1
            }
        },
        axisLabel: { // 坐标轴刻度标签的相关设置
            show: true,
            color: '#b4b4b4',
            rotate: 10
        },
        axisTick: { // 这是坐标轴的小小的尖
            show: false
        },
        axisLine: { // 这是坐标轴的那条轴
            show: true,
            lineStyle: {
                color: '#e2e2e2'
            }
        }
    },
    yAxis: {
        type: 'value',
        scale: true,
        axisLine: {
            show: false
        },
        axisLabel: { // 坐标轴刻度标签的相关设置
            show: true,
            color: '#b4b4b4'
        },
        splitLine: { // 这是横着的那条线
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#e2e2e2'
            }
        },
        axisTick: {
            show: false
        },
        splitArea: { // 指的是分区
            show: false
        },
        splitNumber: 4,
        interval: 3
    },
    series: [{
        data: yData,
        type: 'line',
        symbol: 'circle',
        showSymbol: false, // 折线上的点隐藏掉
        lineStyle: {
            color: '#ff5903'
        },
        // 显示数值 方式一
        // itemStyle: {normal: {label: {show: true}}}
        // 显示数值 方式二
        label: {
            show: true
        }
    }]
};
lineChart.setOption(lineOption);
```
