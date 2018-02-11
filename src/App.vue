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


  created(){
    var isPc = util.isPC();
    if(!isPc){
      location.href = 'http://www.sianmed.com/mobile';
    }
  },

  methods: {
    init(){
      let _this = this;
      // 初始化cookies
      var lang = util.getCookie('lang');
      if (!lang){
        util.setCookie('lang', 1)
        _this.$store.dispatch('setLang',1);
      }else{
        _this.$store.dispatch('setLang',lang);
      }
      axios.defaults.headers.common['WWW-Authorization'] = lang || 1;


      // 获取网页是否正常
      // 初始化获取底部网站信息
      this.$http.get('/system/webon').then(function (res) {
         // res 1为正常  2为关闭
        if(res == 1){
          // do nothing
        } else if(res == 2){
          _this.$router.replace('/error');
        }
      })
      .catch(function (error) {
        util.reqFail(error)
      });


      // test 多语言应用
      let language='zh-cn';
      let instance = axios.create();
      instance.defaults.baseURL = '/';
      instance.get('static/lang/'+ language +'.json').then(function(res){
       /* if (Object.keys(res.data).length === 0) {
          console.log('Language Package Error!!')
        } else {
          Vue.locale(lang,res.data)
        }*/
      }).then(function(err){
        console.log('Server Connect Error!!');
      })

      // 初始化获取菜单
      this.$http.post('/System/nav').then(function (data) {
        _this.$store.dispatch('setHeader',data);
      })
      .catch(function (error) {
        util.reqFail(error)
      });
      // 初始化获取底部网站信息
      this.$http.get('/System/seo').then(function (res) {
        _this.$store.dispatch('setFooter',res);
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
