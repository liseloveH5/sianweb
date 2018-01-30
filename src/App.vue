<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$nextTick(function () {
      //　全局初始化
      this.init();
    })
  },
  methods: {
    init(){
      let _this = this;
      // 初始化cookies
      util.setCookie('lang', 0)
      // 初始化获取菜单
      this.$http.post('/System/nav').then(function (data) {
        _this.$store.dispatch('setHeader',data);
      })
      .catch(function (error) {
        util.reqFail(error)
      });
    }
  }


}
</script>

<style>
</style>
