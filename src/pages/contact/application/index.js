import { mapState } from 'vuex'
const index = {
  name: 'science-application',

  data() {
    return {
      count:0,
      info:'',
      tip:'',
      organForm: {
        name: '',
        contactName:'',
        contactPhone:'',
        applyProject:'',
        selected: '1',
        options: []
      },

      personForm: {
        name: '',
        phone:'',
        location:'',
        selected: '1',
        options: []
      },
      navList:[],
      picUrl:'',
      applyTitle:[
        {
          institution:'机构申请',
          person:'个人申请',
          phName:'请输入名称',
          phPhoneNumber:'请输入联系人电话',
          phLocation:'请输入申请人所在地区',
        },
        {
          institution:'Institution Application',
          person:'Personal Application',
          phName:'Please Enter the Name',
          phPhoneNumber:'Please Enter the Phone Number',
          phLocation:'Please Enter the Address',
        }
      ]
    }
  },

  computed: {
    ...mapState({
      lang: 'lang',
    }),
    titleName: function () {
      if (this.lang==1){
        return this.applyTitle[0]
      }else{
        return this.applyTitle[1]
      }
    },
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.getProjectsList ()
      this.getNav()
    })
  },

   /*watch: {
     lang(val){
       if(val==1){
         this.applyTitle.institution
       }

     }

   },*/

  methods: {
    getNav(){
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
      })
        .catch(function (error) {
          util.reqFail(error)
        });
    },

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
        this.tip='warning';
        this.info='请输入正确的手机号码';
        return;
      }
      let _this = this;
      let obj = {
        person: this.organForm.contactName,
        phone : this.organForm.contactPhone,
        addres: this.organForm.name,
        type  : 2,
        project: this.organForm.selected
      }

      this.$http.post('/Form/submit', obj).then(function (response) {
        _this.count=3;
        _this.info='提交成功！';
        _this.tip='success'
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
        this.tip='warning';
        this.info='请输入正确的手机号码';
      }

      let _this = this;
      let obj = {
        person: this.personForm.name,
        phone : this.personForm.phone,
        addres: this.personForm.location,
        type  : 1,
        project: this.personForm.selected
      }

      this.$http.post('/Form/submit', obj).then(function (response) {
        _this.count=3;
        _this.info='提交成功！';
        _this.tip='success'
      })
        .catch(function (error) {
          util.reqFail(error)
        });
    }

  }

};

export default index;
