<template>
      <div class="number-cart">
        <div class="cart-title">{{title}}</div>
        <div class="cart-title">{{content}}</div>
      </div>
      
</template>

<script>
    export default {
        props:[
            'title','content'
        ]
    }
</script>

<style lang="less" scoped>

.number-cart {
  background: linear-gradient(to bottom, #2470fe, #199afe);
  border-radius: 5px;
  padding: 10px;
}
</style>