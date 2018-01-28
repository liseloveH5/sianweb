import { mapState } from 'vuex'

const index = {
  name: 'demo',

  data() {
    return {
      slide: 0,
      sliding: null,
      id: 1,
      enterpriseCatalog:'',
      productCatalog:''
    }
  },
  computed: mapState({
    // 传字符串参数 'count' 等同于 `state => state.count`
    header: 'header',
  }),

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
     /* this.enterpriseCatalog = this.header[1].son
      var cacheObj={}
      for (var i = 0; i<4; i++){
        cacheObj.push(this.enterpriseCatalog[i])
      }
      this.enterpriseCatalog = cacheObj*/

      this.productCatalog = this.header[3].son
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
      var _this=this;
      //获取swiper广告位
      var adObj={
        params:{
          key:'banner'
        }
      }
      this.$http.get('/Ad/slide', adObj).then(function (res) {
        _this.dataBanner = res;
        console.log(1111, res)
      })
        .catch(function (error) {
          util.reqFail(error)
        });
      // 获取友情链接
      this.$http.get('/System/friend').then(function (res) {
        _this.dateFlink = res;
        console.log(222, res)
      })
        .catch(function (error) {
          util.reqFail(error)
        });
    }

    // 产品页面



  }

};

export default index;
