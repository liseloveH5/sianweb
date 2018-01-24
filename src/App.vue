<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    //　全局初始化
    this.init();
  },
  methods: {
    init(){
      // 申明全局变量

    }
  }


}
</script>

<style>
</style>
