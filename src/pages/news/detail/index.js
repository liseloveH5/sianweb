
const index = {
  name: 'news-detail',

  data() {
    return {
      navid:'',
      navList:[],
      picUrl:'',
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
      this.navid= this.$route.params.navid
      this.routerChange()
    })
  },

   watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },

  methods: {
    routerChange(){
      this.getDetailData();
    },

    getDetailData(){
      var _this= this
      // 发送请求
      var obj = {
        params:{
          id: this.$route.params.id
        }
      }
      this.$http.get('/News/info', obj).then(function (res) {
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
      //获取侧边栏导航
      var navobj = {
        params:{
          id: this.$route.params.navid
        }
      }
      this.$http.get('/System/navson', navobj).then(function (res) {
        _this.navList = res.list
        _this.picUrl = res.father.icon
      })
        .catch(function (error) {
          util.reqFail(error)
        });

    }

  }

};

export default index;
