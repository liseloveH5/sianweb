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
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {

  },

  computed: mapState({
    // 传字符串参数 'count' 等同于 `state => state.count`
    header: 'header',
  })

};

export default index;
