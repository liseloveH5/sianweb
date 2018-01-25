import ListItem from "./compoment/list-item.vue";

const index = {
  name: 'news-list',
  components: {ListItem},

  data() {
    return {
      list:[],
      currentPage: 1,
    }
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.getListData();
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    getListData() {
      let _this = this
      // 发送请求
      var obj = {
        params: {
          id: 17,
          key: '',
          page: 1,
          size: 8,
        }
      }
      this.$http.get('/News/newslist', obj).then(function (res) {
        _this.list = res
      })
        .catch(function (error) {
          util.reqFail(error)
        });

    }

  },


};

export default index;
