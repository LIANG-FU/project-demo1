<template>
  <div class="progress-item">
    <div v-bind:class="['progress-title' ,width==='half' ? 'half' : '']">{{already}}/{{all}}</div>
    <div class="progress-content">
      <div class="user-name">{{title}}</div>
      <div id="progressContenter" v-bind:class="['progress-contenter' ,width==='half' ? 'half' : '']">
        <div v-bind:style="{ width:percentage+'%' }" id="progress" class="progress"></div>
      </div>
      <div class="percentage">{{percentage}}%</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["width","title", "already", "all"],
  data(){
      return {
          percentage:0
      }
  },
  computed: {
    valueObj() {
      const { already, all } = this;
      return {
        already,
        all
      };
    }
  },
  watch: {
    valueObj: {
      handler: function(newVal) {
       this.percentage = (newVal.already/newVal.all).toFixed(2)*100
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
.progress-title {
font-size: 12px;
  float: right;
  color: white;
  margin-right: 40px;
  margin-top: 10px;
}
.progress-title.half{
    margin-right: 14%
}
.progress-content {
    font-size: 12px;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 10px;
  color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 7fr 40px;
}
.progress-contenter {
  position: relative;
  height: 10px;
  width: 100%;
  background-color: rgb(19, 55, 127);
}
.progress{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(29, 138, 254);
    border-radius: 0;
}
.percentage{
    padding:0 5px;
}
.half{
    width: 50%;
}
</style>