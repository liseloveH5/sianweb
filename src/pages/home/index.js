

const index = {
  name: 'demo',

  data() {
    return {
      slide: 0,
      sliding: null,
      id: 1,

    }
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.getInfo ()
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    getInfo () {
      // 获取友情链接
      this.$http.get('/System/friend').then(function (res) {
        console.log(777, res)
      })
        .catch(function (error) {
          util.reqFail(error)
        });

      //获取swiper广告位
      var adObj={
        params:{
          key:'banner'
        }
      }
      this.$http.get('/Ad/list', adObj).then(function (res) {
        console.log(666, res)
      })
        .catch(function (error) {
          util.reqFail(error)
        });
    }
  }

};

export default index;
