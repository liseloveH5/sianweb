import ListItem from "./compoment/list-item.vue";

const index = {
  name: 'news-list',
  components: {ListItem},

  data() {
    return {
      currentPage: 1,
    }
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.initData();
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    initData(){

      this.$http.get('http://47.96.153.197/Sian/backend/getIndexPics').then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }

  }

};

export default index;
