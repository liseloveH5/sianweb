const index = {
  name: 'contact-message',

  data() {
    return {
      navList:[],
      content:'',
      picUrl:''
    }
  },


  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      // this.getDetailData()
      this.initData();
    })
  },

   watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'initData'
   },

  methods: {
    initData(){
      this.getNav();
    },

    getNav(){
      var _this= this
      // 发送请求
      var obj = {
        params:{
          id: this.$route.params.id
        }
      }
      this.$http.get('/System/navson', obj).then(function (res) {
        _this.navList = res.list
        _this.picUrl = res.father.icon
        _this.getDetailData(res.info.href);
      })
        .catch(function (error) {
          util.reqFail(error)
        });
    },
    getDetailData(id){
      var _this= this
      // 发送请求
      var obj = {
        params:{
          id: id
        }
      }
      this.$http.get('/News/page', obj).then(function (res) {
        _this.picUrl = res.thumbnail
        _this.content = util.htmlDecode(res.post_content)
      })
        .catch(function (error) {
          util.reqFail(error)
        });

    }

  }

};

export default index;
