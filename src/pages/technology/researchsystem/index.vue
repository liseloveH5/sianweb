<template>
  <div class="common-page contact-message">
    <global-header></global-header>
    <div class="common-contain">
      <div class="container">
        <b-form @submit="onSubmit" v-if="show" class="message-form">

          <b-form-row>
            <b-col sm="2">
              <label for="form-message" class="label-require">留言内容</label>
            </b-col>
            <b-col sm="6">
              <b-form-textarea id="form-message"
                               v-model="form.message"
                               placeholder="请输入留言内容"
                               :rows="3"
                               required
                               :max-rows="6">

              </b-form-textarea>
            </b-col>
          </b-form-row>


          <b-form-row>
            <b-col sm="2">
              <label for="form-name">姓名</label>
            </b-col>
            <b-col sm="4">
              <b-form-input id="form-name"
                            type="text"
                            v-model="form.name"
                            placeholder="请输入姓名">
              </b-form-input>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col sm="2">
              <label for="form-phone">手机</label>
            </b-col>
            <b-col sm="4">
              <b-form-input id="form-phone"
                            type="text"
                            v-model="form.phone"
                            placeholder="请输入手机号码">
              </b-form-input>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col sm="2">
              <label for="form-tel">电话</label>
            </b-col>
            <b-col sm="4">
              <b-form-input id="form-tel"
                            type="text"
                            v-model="form.tel"
                            placeholder="请输入电话号码">
              </b-form-input>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col sm="2">
              <label for="form-email">邮箱</label>
            </b-col>
            <b-col sm="4">
              <b-form-input id="form-email"
                            type="text"
                            v-model="form.email"
                            placeholder="请输入邮箱">
              </b-form-input>
            </b-col>
          </b-form-row>

          <b-row class="form-button-row">
            <b-col offset-sm="2" sm="4" class="">
              <b-button type="submit" >提交</b-button>
            </b-col>

          </b-row>


        </b-form>
      </div>
    </div>

    <global-link></global-link>
    <global-footer></global-footer>
  </div>
</template>

<script>
  import index from './index.js'

  export default index
</script>

<style lang="less">
  @import "./index.less";
</style>
