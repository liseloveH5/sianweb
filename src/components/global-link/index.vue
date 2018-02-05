<template>
  <div class="global-link">
    <div class="container">

     <!-- <b-nav class="justify-content-center nav">
        <b-nav-item to="/">首页</b-nav-item>
        <b-nav-item>走进思安</b-nav-item>
        <b-nav-item to="/news/list">新闻中心</b-nav-item>
        <b-nav-item>产品中心</b-nav-item>
        <b-nav-item>科技创新</b-nav-item>
        <b-nav-item to="/contact/message">联系我们</b-nav-item>
      </b-nav>
-->

      <div class="comp-info">
        <div class="row">
          <div class="col-4">
            <label v-if="lang==1">电话:</label>
            <label v-else>Tel:</label>
            <span>{{footer.tel}}</span>
          </div>
          <div class="col-4">
            <label v-if="lang==1">传真:</label>
            <label v-else>Fex:</label>
            <span>{{footer.fex}}</span>
          </div>
          <div class="col-4">
            <label v-if="lang==1">邮编:</label>
            <label v-else>Post:</label>
            <span>{{footer.postcode}}</span>
          </div>

        </div>
        <div class="row">
          <div class="col-4">
            <label v-if="lang==1">邮箱:</label>
            <label v-else>E-mail:</label>
            <span>{{footer.site_admin_email}}</span>
          </div>

          <div class="col-8">
            <label v-if="lang==1">地址:</label>
            <label v-else>Address:</label>
            <span>{{footer.address}}</span>
          </div>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
  import index from './index.js'

  export default index
</script>

<style lang="less">
  @import "./index.less";
</style>
