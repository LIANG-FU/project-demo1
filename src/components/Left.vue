<template>
  <Cart title="CAD设计数据">
      <div class="carts">
    <MiniCart title="待设计的订单数量" content="36" />
    <MiniCart title="待设计的订单数量" content="36" />
</div>
    <div class="main-title">按产品打雷归类的待设计订单/产品</div>
    <!-- 图表 -->
    <div ref="bar" id="bar" class="bar"></div>
    <!-- 表格 -->
    <table class="table table-kingdargen">
      <thead>
        <tr>
          <th>产品大类</th>
          <th>产品数量</th>
          <th>订单数量</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>大类A</td>
          <td>268</td>
          <td>212</td>
        </tr>
        <tr>
          <td>大类</td>
          <td>268</td>
          <td>212</td>
        </tr>
        <tr>
          <td>大类</td>
          <td>268</td>
          <td>212</td>
        </tr>
        <tr>
          <td>大类</td>
          <td>268</td>
          <td>212</td>
        </tr>
        <tr>
          <td>大类</td>
          <td>268</td>
          <td>212</td>
        </tr>
        <tr>
          <td>大类</td>
          <td>268</td>
          <td>212</td>
        </tr>
        <tr>
          <td>大类</td>
          <td>268</td>
          <td>212</td>
        </tr>
        <tr>
          <td>大类</td>
          <td>268</td>
          <td>212</td>
        </tr>
      </tbody>
    </table>
    <span class="top-left border-span"></span>
    <span class="top-right border-span"></span>
    <span class="bottom-left border-span"></span>
    <span class="bottom-right border-span"></span>
  </Cart>
</template>

<script>
import Cart from "../components/Cart.vue";
import MiniCart from "../components/MiniCart.vue";

export default {
  components: {
    Cart,
    MiniCart
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      //var bar_dv = document.getElementById('bar_dv');
      var bar_dv = this.$refs.bar;
      if (bar_dv) {
        console.log("bar_dv不为空");
        let barChart = this.$echarts.init(bar_dv);
        // 绘制图表 '火炉省会城市极端高温对比'
        barChart.setOption({
          textStyle: {
            color: "rgba(3, 99, 149)"
          },
          title: {
            text: "单位：份",
            textStyle: {
              color: "rgba(3, 99, 149)"
            }
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            },
            // 鼠标移入条形图提示层文字的自定义
            formatter(params) {
              let relVal = params[0].name;
              for (var i = 0, l = params.length; i < l; i++) {
                // console.log(params)
                let circle = `<i class="iconfont icon-yuan" style="margin-right:4px;font-size:14px;color:${params[i].color}"></i>`;
                params[i].value = Math.abs(params[i].value);
                relVal +=
                  "<br/>" +
                  circle +
                  params[i].seriesName +
                  " : " +
                  params[i].value;
              }
              return relVal;
            }
          },
          legend: {
            data: ["数字化订单", "石膏模型订单"],
            textStyle: {
              color: "rgba(3, 99, 149)"
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              type: "value",
              // 设置x轴线的属性
              axisLine: {
                lineStyle: {
                  color: "rgba(3, 99, 149)"
                }
              },
              axisLabel: {
                formatter(value) {
                  return Math.abs(value); // 负数取绝对值变正数（x轴本来数据是正负才能分开两边展示的，所以我们只是把负数处理为正数在视觉上显示）
                }
              }
            }
          ],
          yAxis: [
            {
              type: "category",
              axisTick: { show: false },
              // 设置y轴线的属性
              axisLine: {
                lineStyle: {
                  color: "rgba(3, 99, 149)"
                }
              },
              data: [
                "大类G",
                "大类F",
                "大类E",
                "大类D",
                "大类C",
                "大类B",
                "大类A"
              ] // y轴下到上
            }
          ],
          color: ["#98d87d", "#49a9ee"],
          series: [
            {
              name: "数字化订单",
              type: "bar",
              stack: "总量",
              barMaxWidth: "22",
              textStyle: {
                color: "rgba(3, 99, 149)"
              },
              // barGap: '-100%',
              // barCategoryGap: '10',
              label: {
                normal: {
                  show: true,
                  color: "rgba(3, 99, 149)",
                  align: "left"
                }
              },
              data: [100, 200, 300, 400, 500, 600, 700] // 数据给升序
            },
            {
              name: "石膏模型订单",
              color: "rgba(3, 99, 149)",
              type: "bar",
              stack: "总量", // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
              barMaxWidth: "22",
              label: {
                normal: {
                  show: true,
                  color: "rgba(245, 245, 245)",
                  align: "right",
                  formatter(params) {
                    let htmlStr = Math.abs(params.value);
                    return htmlStr;
                  }
                }
              },
              data: [-100, -200, -300, -400, -500, -600, -700] // 数据给升序
            }
          ]
        });
      }
    }
  }
};
</script>
<style scoped src="G:\vue\面试\demo1\node_modules\bootstrap\dist\css\bootstrap.css"></style>
<style lang="less" scoped>
.carts {
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
}
.bar {
  color: white;
  width: 100%;
  height: 400px;
}
.main-title {
  margin: 10px;
  padding: 8px;
  color: white;
  text-align: center;
  background: rgba(13, 35, 83);
}

.table-kingdargen {
  margin-top: 6px;
  text-align: center;
  margin-bottom: 0;
}
.table-kingdargen > thead > tr > th {
  border-bottom: 1px solid #0f4075;
  padding: 2px 8px;
  text-align: center;
  color: #419aff;
  font-size: 12px;
  font-weight: normal;
  border-top: 1px solid #0f4075 !important;
}
.table-kingdargen tbody tr td {
  padding: 1px 8px;
  font-size: 12px;
  border: none;
  color: #fff;
}
.table-kingdargen tbody tr:nth-child(2n) {
  background: #1d2a42;
}
.table-kingdargen tbody tr:hover {
  background: #1d2a42;
}
.table-kingdargen tbody tr td:nth-child(2) {
  color: #e9aa00;
}
.table-kingdargen tbody tr td:nth-child(3) {
  color: #53bf18;
}
.table-kingdargen tbody tr td:nth-child(4) {
  color: #f9504a;
}
.table-kingdargen tbody tr td:nth-child(5) {
  color: #12f0e9;
}
</style>