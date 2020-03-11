<template>
  <div class="home">
    <Header />
    <div class="main">
      <Left />
      <Middle />
      <Right />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Left from "../components/Left.vue";
import Middle from "../components/Middle.vue";
import Right from "../components/Right.vue";
export default {
  name: "Home",
  components: {
    Header,
    Left,
    Middle,
    Right
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      console.log(this.$refs.bar);
    }
  }
};
</script>
<style lang="less">
.main {
  padding: 0 30px 30px;
  position: relative;
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
  grid-column-gap: 20px;
}
</style>
