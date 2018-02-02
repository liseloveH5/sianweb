import { mapState } from 'vuex'

const index = {
  name: 'demo',

  data() {
    return {
      slide: 0,
      sliding: null,
      id: 0,
      dateFlink:[],
      content:'',
      list:'',
      dataBanner:'',
      compInfo:{
        text:'',
        list:[]
      },
      webInfo:''
    }

  },
  computed:{
    ...mapState({
      // 传字符串参数 'count' 等同于 `state => state.count`
      header: 'header',
      footer: 'footer',
      lang: 'lang'
      // enterpriseCatalog:state => state.header[1].son,
      // productCatalog:state => state.header[2].son,
      // newsCatalog:state => state.header[4].son,
    }),
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.getInfo()
    /*  this.getNews(this.newsCatalog[0].id)
      this.getProduct(this.productCatalog[0].id)*/
    })
  },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },

    handleAboutClick(item,index){
      this.id = index;
      this.$router.push(item.url);
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
      })
        .catch(function (error) {
          util.reqFail(error)
        });
      // 获取企业文化
      var compObj={
        params:{
          key:'about'
        }
      }
      this.$http.get('/Ad/slide', compObj).then(function (res) {
        _this.compInfo.text=res.info.remark
        _this.compInfo.list=res.list
      })
        .catch(function (error) {
          util.reqFail(error)
        });
      // 获取友情链接
      this.$http.get('/System/friend').then(function (res) {
        _this.dateFlink = res;
      })
        .catch(function (error) {
          util.reqFail(error)
        });
      // 获取联系方式
      this.$http.get('/System/seo').then(function (res) {
        _this.webInfo = res;
      })
        .catch(function (error) {
          util.reqFail(error)
        });

    },

    // 获取产品页面参数
 /*   getProduct:function(id){
      var _this=this;
      // 发送请求
      var obj = {
        params:{
          id: id
        }
      }
      this.$http.get('/News/info', obj).then(function (res) {
        _this.content = util.htmlDecode(res.post_content)
      })
        .catch(function (error) {
          util.reqFail(error)
        });

    },
    // 获取新闻列表
    getNews:function(id){
      var _this=this
      var obj = {
        params: {
          id: id,
          key: '',
          page: 1,
          size: 4,
        }
      }
      this.$http.get('/News/newslist', obj).then(function (res) {
        _this.list = res.data
      })
        .catch(function (error) {
          util.reqFail(error)
        });

    }*/



  }

};

export default index;
