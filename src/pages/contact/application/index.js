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
          { value: '', text: '' }
        ]
      },

      personForm: {
        name: '',
        phone:'',
        location:'',
        selected: 'car-t',
        options: [
          { value: '', text: '' }
        ]
      },
    }
  },


  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.getProjectsList ()
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    // 获取表单提交列表
    getProjectsList () {
      var _this = this
      this.$http.post('/form/projects').then(function (res) {
        let cacheList = []
        for (var i = 0; i < res.length; i++) {
          let obj = {
            value:'',
            text:''
          }
          obj.value = res[i].id
          obj.text = res[i].name
          cacheList.push(obj)
        }
        _this.organForm.options = cacheList
        _this.personForm.options = cacheList
      }).catch(function (error) {
          util.reqFail(error)
        });
    },
    // alert验证提示弹窗倒计时
    countDownChanged (count) {
      this.count = count
    },
    // 提交机构表单
    onOrganSubmit (evt) {
      evt.preventDefault();
      // 表单验证
      if (!this.organForm.name || !this.organForm.contactName || !this.organForm.contactPhone) {
        this.count=3;
        this.info='带*的字段不能为空';
        return;
      }
      let r1 = /^1[3|4|5|7|8][0-9]{9}$/;
      let r2=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      if (!r1.test(this.organForm.contactPhone) && !r2.test(this.organForm.contactPhone)) {
        this.count=3;
        this.info='请输入正确的手机号码';
        return;
      }
      let obj = {
        person: this.organForm.contactName,
        phone : this.organForm.contactPhone,
        addres: this.organForm.name,
        type  : 2,
        project: this.organForm.selected
      }

      this.$http.post('/Form/submit', obj).then(function (response) {
        alert(11)
      })
        .catch(function (error) {
          util.reqFail(error)
        });





    },

    onPersonSubmit (evt) {
      evt.preventDefault();
      // 表单验证
      if (!this.personForm.name || !this.personForm.phone || !this.personForm.location) {
        this.count=3;
        this.info='带*的字段不能为空';
      }
      let r1 = /^1[3|4|5|7|8][0-9]{9}$/;
      let r2=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      if (!r1.test(this.personForm.phone) && !r2.test(this.personForm.phone)) {
        this.count=3;
        this.info='请输入正确的手机号码';
      }
    }

  }

};

export default index;
