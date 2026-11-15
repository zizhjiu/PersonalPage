<script>


import Main from './components/Main.vue'


export default {
  components: {

    Main,

  }
}

</script>

<template>
  <el-container>
    <el-main><Main/></el-main>
  </el-container>
</template>

<style>

h2 {
  font-family: "MyFont", Verdana, sans-serif;
  letter-spacing: 2px;
}

/* 链接颜色装饰 */
a {
  color: #3273dc;
  text-decoration: none;
}

/* 鼠标焦点悬浮在链接上的颜色装饰 */
a:hover {
  color: #848484;
  border-bottom: dotted;
}

</style>
