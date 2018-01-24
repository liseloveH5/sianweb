const index = {
  name: 'science-application',

  data() {
    return {
      count:0,
      info:'',
      organForm: {
        name: '',
        contactName:'',
        contactPhone:'',
        applyProject:'',
        selected: 'car-t',
        options: [
          { value: 'car-t', text: 'CART-T系列' },
          { value: 'tcr-t', text: 'TCR-T系列' },
          { value: 'car-nk', text: 'CAR-NK系列' },
        ]
      },

      personForm: {
        name: '',
        phone:'',
        location:'',
        selected: 'car-t',
        options: [
          { value: 'car-t', text: 'CART-T系列' },
          { value: 'tcr-t', text: 'TCR-T系列' },
          { value: 'car-nk', text: 'CAR-NK系列' },
        ]
      },
    }
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
    countDownChanged (count) {
      this.count = count
    },
    onOrganSubmit (evt) {
      evt.preventDefault();
      // 表单验证
      if (!this.organForm.name || !this.organForm.contactName || !this.organForm.contactPhone) {
        this.count=3;
        this.info='带*的字段不能为空';
      }
      var r1 = /^1[3|4|5|7|8][0-9]{9}$/;
      var r2=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      if (!r1.test(this.organForm.contactPhone) && !r2.test(this.organForm.contactPhone)) {
        this.count=3;
        this.info='请输入正确的手机号码';
      }



    },

    onPersonSubmit (evt) {
      evt.preventDefault();
      // 表单验证
      if (!this.personForm.name || !this.personForm.phone || !this.personForm.location) {
        this.count=3;
        this.info='带*的字段不能为空';
      }
      var r1 = /^1[3|4|5|7|8][0-9]{9}$/;
      var r2=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      if (!r1.test(this.personForm.phone) && !r2.test(this.personForm.phone)) {
        this.count=3;
        this.info='请输入正确的手机号码';
      }
    }

  }

};

export default index;
