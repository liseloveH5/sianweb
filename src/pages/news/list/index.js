import ListItem from "./compoment/list-item.vue";

const index = {
  name: 'news-list',
  components: {ListItem},

  data() {
    return {
      totalpage:null,
      pageSize:10,
      list:[],
      currentPage: 1,
      navList:[],
      picUrl:[]
    }
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.getListData();
    })
  },

   watch: {
     // 如果路由有变化，会再次执行该方法
     //*'$route': 'routerChange'
     currentPage: function(){
       this.getNavData();
       this.getListData();
     }

   },

  methods: {
    getListData() {
      let _this = this
      // 发送请求
      var obj = {
        params: {
          id: 17,
          key: '',
          page: _this.currentPage,
          size: _this.pageSize,
        }
      }
      this.$http.get('/News/newslist', obj).then(function (res) {
        _this.list = res.data
        _this.totalpage = Math.ceil(res.count / obj.params.size)
      })
        .catch(function (error) {
          util.reqFail(error)
        });

    },
    getNavData() {
      var _this= this
      // 发送请求
      var obj = {
        params:{
          id: this.$route.params.id
        }
      }
      this.$http.get('/News/lists', obj).then(function (res) {
        _this.navList = res.lists
        _this.picUrl = res.info.more
      })
        .catch(function (error) {
          util.reqFail(error)
        });
    }

  },


};

export default index;
