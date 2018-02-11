import { mapState } from 'vuex'

const index = {
  name: 'global-header',

  data() {
    return {

    }
  },

  props:{
    showSecondMenu: {
      type: Boolean,
      default: false
    },
  },



  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      let _this = this;
      setTimeout(_this.bindHoverEvent, 1000)
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    bindHoverEvent() {
      $('.common-header .nav-item').hover(function(){
          $('.common-header .navbar-nav .nav-item').removeClass('show')
          $('.common-header .navbar-nav .dropdown-menu-left').removeClass('show')
          $(this).find('.dropdown-menu-left').addClass('show')
          $(this).addClass('show');
      },function(){

      })

      $('.common-header .navbar-nav .dropdown-menu-left').mouseleave(function(){
        $('.common-header .navbar-nav .dropdown-menu-left').removeClass('show')
        $('.common-header .navbar-nav .nav-item').removeClass('show')
      })
    },


    chooseLang() {
      if(this.lang == 1){
        this.$store.dispatch('setLang',2);
        util.setCookie('lang', 2)
        axios.defaults.headers.common['WWW-Authorization'] = 2;
      } else {
        this.$store.dispatch('setLang',1);
        util.setCookie('lang', 1)
        axios.defaults.headers.common['WWW-Authorization'] = 1;
      }
      // location.reload();
      // this.$router.push('/')
      location.href = '/'
    },




  },

  computed: mapState({
    // 传字符串参数 'count' 等同于 `state => state.count`
    header: 'header',
    lang: 'lang',
  })

};

export default index;
