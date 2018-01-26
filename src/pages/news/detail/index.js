
const index = {
  name: 'news-detail',

  data() {
    return {
    }
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.getDetailData();
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    getDetailData(){
      // 发送请求
      var obj = {
        params:{
          id: this.$route.params.id
        }
      }
      this.$http.get('/News/info', obj).then(function (res) {
        console.log(222,res)
      })
        .catch(function (error) {
          util.reqFail(error)
        });

    }

  }

};

export default index;
