import ListItem from "./compoment/list-item.vue";

const index = {
  name: 'news-list',
  components: {ListItem},

  data() {
    return {
      totalRow:null,
      pageSize:1,
      list:[],
      currentPage: 1,
      navList:[],
      picUrl:[],
      navId:''
    }
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.initData();
      this.navId = this.$route.params.id
    })
  },

   watch: {
     // 如果路由有变化，会再次执行该方法
     //*'$route': 'routerChange'
     '$route': 'initData',
     currentPage: function(){
       this.getNavData();
       // this.getListData();
     }
   },

  methods: {

    initData(){
      this.getNavData();
      // this.getListData();
    },

    getListData(id) {
      let _this = this
      // 发送请求
      var obj = {
        params: {
          id: id,
          key: '',
          page: _this.currentPage,
          size: _this.pageSize,
        }
      }
      this.$http.get('/News/newslist', obj).then(function (res) {
        _this.list = res.data
        _this.totalRow = res.count;
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
      this.$http.get('/System/navson', obj).then(function (res) {
        _this.navList = res.list
        _this.picUrl = res.father.icon
        _this.getListData(res.info.href)

      })
        .catch(function (error) {
          util.reqFail(error)
        });
    }

  },


};

export default index;
