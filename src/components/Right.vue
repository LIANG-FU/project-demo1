<template>
  <Cart title="排版数据">
    <div class="carts">
      <MiniCart title="待设计的订单数量" content="12" />
      <MiniCart title="待设计的订单数量" content="40" />
    </div>
    <div class="main-warn">
      预计需瓷块数量：
      <strong>250</strong>
    </div>
    <div class="main-title">按产品打雷归类的待设计订单/产品</div>
    <div ref="Doughnut" id="Doughnut" class="Doughnut"></div>
    <div class="main-title">各员工的待排版订单/产品状况</div>
    <Progress title="李易峰" all="2000" already="2000" />
    <Progress title="张吉利" all="2000" already="100" />
    <Progress title="爱丽" all="2000" already="1800" />
    <Progress width="half" title="钱佳" all="2000" already="900" />
    <div class="footer">
      <div>
        <Progress title="钱佳" all="2000" already="2000" />
        <Progress title="钱佳" all="2000" already="100" />
        <Progress title="钱佳" all="2000" already="1800" />
        <Progress title="钱佳" all="2000" already="900" />
      </div>
      <div class="footer-table">
        <table border="1" >
          <tbody>
            <tr>
              <th colspan="3">特排版的产品统计</th>
            </tr>
            <tr>
              <th>金属</th>
              <th>全瓷</th>
              <th>蜡形</th>
            </tr>
            <tr>
              <th>25</th>
              <th>35</th>
              <th>40</th>
            </tr>
            <tr>
              <th>25</th>
              <th>35</th>
              <th>40</th>
            </tr>
            <tr>
              <th>25</th>
              <th>35</th>
              <th>40</th>
            </tr>
            <tr>
              <th>25</th>
              <th>35</th>
              <th>40</th>
            </tr>
            <tr>
              <th>25</th>
              <th>35</th>
              <th>40</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Cart>
</template>

<script>
import Cart from "../components/Cart.vue";
import MiniCart from "../components/MiniCart.vue";
import Progress from "../components/Progress.vue";

export default {
  components: {
    Cart,
    MiniCart,
    Progress
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      //var bar_dv = document.getElementById('bar_dv');
      var bar_dv = this.$refs.Doughnut;
      if (bar_dv) {
        console.log("bar_dv不为空");
        let barChart = this.$echarts.init(bar_dv);
        // 绘制图表 '火炉省会城市极端高温对比'
        barChart.setOption({
          grid: {
            x: 25,
            y: 45,
            x2: 5,
            y2: 20,
            borderWidth: 1
          },

          tooltip: {
            //提示框，可以在全局也可以在
            trigger: "item", //提示框的样式
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            color: "#000", //提示框的背景色
            textStyle: {
              //提示的字体样式
              color: "white"
            }
          },
          legend: {
            //图例
            orient: "vertical", //图例的布局，竖直    horizontal为水平
            x: "right", //图例显示在右边
            data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
            textStyle: {
              //图例文字的样式
              color: "white", //文字颜色
              fontSize: 12 //文字大小
            }
          },
          series: [
            {
              name: "访问来源",
              type: "pie", //环形图的type和饼图相同
              radius: ["20%", "35%"], //饼图的半径，第一个为内半径，第二个为外半径
              avoidLabelOverlap: false,
              color: ["#D1FBEF", "#F9D858", "#4CD0DD", "#DF86F0", "#F5A7C1"],
              label: {
                normal: {
                  //正常的样式
                  show: true,
                  position: "left"
                },
                emphasis: {
                  //选中时候的样式
                  show: true,
                  textStyle: {
                    fontSize: "20",
                    fontWeight: "bold"
                  }
                }
              }, //提示文字
              labelLine: {
                normal: {
                  show: true
                }
              },
              data: [
                { value: 335, name: "直接访问" },
                { value: 310, name: "邮件营销" },
                { value: 234, name: "联盟广告" },
                { value: 135, name: "视频广告" },
                { value: 1548, name: "搜索引擎" }
              ]
            }
          ]
        });
      }
      var bar_dv2 = this.$refs.bar2;
      if (bar_dv2) {
        console.log("bar_dv不为空");
        let barChart = this.$echarts.init(bar_dv2);
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
                  color: "rgba(3, 99, 149)",
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

<style lang="less" scoped>
.Doughnut {
  color: white;
  width: 100%;
  box-sizing: border-box;
  padding-right: 50px;
  height: 150px;
}
.carts {
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
}
.main-title {
  margin: 10px;
  padding: 8px;
  font-size: 15px;
  color: white;
  text-align: center;
  background: rgba(13, 35, 83);
}
.main-warn {
  margin: 10px;
  padding: 8px;
  font-size: 22px;
  color: rgba(24, 154, 249);
  text-align: center;
  background: rgba(13, 35, 83);
}
.footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
}
.footer-table{
    width: 100%;
}
.footer-table table{
    margin: 10px 0;
    font-size: 12px;
    color: rgb(29, 138, 254);
    width: 100%;
    border-color: rgb(29, 138, 254);
    border-collapse:collapse;
}
.footer-table table tr:nth-child(1){
    background: rgb(19, 55, 127);
}
.footer-table table tr:nth-child(2){
    background: rgb(19, 55, 127);
}
</style>