<template>
  <div class="header">
    <div class="business-des">
      <div class="logo"></div>
      <div class="name">
        <div class="system-name">恒久可视化管理系统</div>
        <div class="business-name">杭州爱牙义齿工厂</div>
      </div>
    </div>
    <div class="title">数字模板设计排版</div>
    <div class="setting">
      <div>
        <i class="fa fa-wifi fa-lg"></i>
      </div>
      <div>
        <i class="fa fa-cog fa-lg"></i>
      </div>
      <div>6-20°C</div>
      <div>2019年10月30日</div>
      <div>星期二</div>
      <div>14:48</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>

.header {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  background: red;
  height: 80px;
  width: 100%;
  position: relative;
  padding-top: 10px;
  font-size: 36px;
  color: white;
  /* text-align: center; */
  background: url(../assets/bg.png) top center no-repeat;
}

.header .business-des {
  display: grid;
  grid-template-columns: 100px 1fr;
  font-size: 25px;
  height: 100px;
  margin-left: 30px;
  justify-self: start;
}
.header .business-des .logo {
  width: 100px;
  height: 80px;
  background: url(../assets/logo.png) top center no-repeat;
  background-size: contain;
}
.header .business-des .name {
  margin-left: 15px;
  font-size: 14px;
}
.header .business-des .system-name {
  color: rgba(18, 114, 179);
}
.header .title {
  display: inline-block;
  width: 100%;
  font-size: 36px;
  text-align: center;
}
.header .setting {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 5fr 4fr 4fr;
  margin: 15px 20px 0 70px;
  font-size: 15px;
}
</style>