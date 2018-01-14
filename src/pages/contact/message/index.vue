<template>
  <div class="common-page contact-message">
    <global-header ></global-header>
    <div class="common-contain">
       <div class="container">
         <b-form @submit="onSubmit"  v-if="show" class="message-form">

           <b-form-group id="exampleInputGroup1"
                         label="Email address:"
                         label-for="exampleInput1"
                         description="We'll never share your email with anyone else.">
             <b-form-input id="exampleInput1"
                           type="email"
                           v-model="form.email"
                           required
                           placeholder="Enter email">
             </b-form-input>
           </b-form-group>


           <b-form-row>
             <b-col sm="1">
             <label :for="form-email">邮箱</label>
             </b-col>
           <b-col sm="4">
           <b-form-input id="form-email"
           type="text"
           v-model="form.email"
           placeholder="请输入邮箱">
           </b-form-input>
           </b-col>
           </b-form-row>

           <!--<b-form-row>-->
           <!--<b-col sm="1">-->
             <!--<label :for="form-message">留言内容</label>-->
           <!--</b-col>-->
           <!--<b-col sm="11">-->
             <!--<b-form-textarea id="form-message"-->
                              <!--v-model="form.message"-->
                              <!--placeholder="Enter something"-->
                              <!--:rows="3"-->
                              <!--:max-rows="6">-->
             <!--</b-form-textarea>-->
           <!--</b-col>-->
         <!--</b-form-row>-->

           <!--<span>{{form.message}}</span>-->

           <!--<b-form-row>-->
             <!--<b-col sm="1">-->
               <!--<label :for="form-name">姓名</label>-->
             <!--</b-col>-->
             <!--<b-col sm="4">-->
               <!--<b-form-input id="form-name"-->
                             <!--type="text"-->
                             <!--v-model="form.name"-->
                             <!--placeholder="请输入姓名">-->
               <!--</b-form-input>-->
             <!--</b-col>-->
           <!--</b-form-row>-->

           <!--<b-form-row>-->
             <!--<b-col sm="1">-->
               <!--<label :for="form-phone">手机</label>-->
             <!--</b-col>-->
             <!--<b-col sm="4">-->
               <!--<b-form-input id="form-phone"-->
                             <!--type="text"-->
                             <!--v-model="form.phone"-->
                             <!--placeholder="请输入手机号码">-->
               <!--</b-form-input>-->
             <!--</b-col>-->
           <!--</b-form-row>-->

           <!--<b-form-row>-->
             <!--<b-col sm="1">-->
               <!--<label :for="form-tel">电话</label>-->
             <!--</b-col>-->
             <!--<b-col sm="4">-->
               <!--<b-form-input id="form-tel"-->
                             <!--type="text"-->
                             <!--v-model="form.tel"-->
                             <!--placeholder="请输入电话号码">-->
               <!--</b-form-input>-->
             <!--</b-col>-->
           <!--</b-form-row>-->

           <!--<b-form-row>-->
             <!--<b-col sm="1">-->
               <!--<label :for="form-email">邮箱</label>-->
             <!--</b-col>-->
             <!--<b-col sm="4">-->
               <!--<b-form-input id="form-email"-->
                             <!--type="text"-->
                             <!--v-model="form.email"-->
                             <!--placeholder="请输入邮箱">-->
               <!--</b-form-input>-->
             <!--</b-col>-->
           <!--</b-form-row>-->

           <b-button type="submit" variant="primary">提交</b-button>
         </b-form>
       </div>
    </div>
    <global-footer ></global-footer>
  </div>
</template>

<script>
  import index from './index.js'
  export default index
</script>

<style lang="less">
  @import "./index.less";
</style>
