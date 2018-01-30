
const index = {
  name: 'news-detail',

  data() {
    return {
      navList:[],
      newsDetail:'',
      content:'',
      around:{
        next:{
          id:'',
          post_title:''
        },
        prev:{
          id:'',
          post_title:''
        }
      }
    }
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.getDetailData(this.$route.params.id);
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    getDetailData(id){
      var _this= this
      // 发送请求
      var obj = {
        params:{
          id: id
        }
      }
      this.$http.get('/News/info', obj).then(function (res) {
        _this.navList = res.category
        _this.newsDetail = res
        _this.content = util.htmlDecode(res.post_content)
      })
        .catch(function (error) {
          util.reqFail(error)
        });
      // 获取上下文
      this.$http.get('/News/around', obj).then(function (res) {
        _this.around = res
      })
        .catch(function (error) {
          util.reqFail(error)
        });

    }

  }

};

export default index;
