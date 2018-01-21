<template>
  <div class="global-link">
    <div class="container">

      <b-nav class="justify-content-center nav">
        <b-nav-item to="/">首页</b-nav-item>
        <b-nav-item>走进思安</b-nav-item>
        <b-nav-item to="/news/list">新闻中心</b-nav-item>
        <b-nav-item>产品中心</b-nav-item>
        <b-nav-item>科技创新</b-nav-item>
        <b-nav-item to="/contact/message">联系我们</b-nav-item>
      </b-nav>


      <div class="comp-info">
        <div class="row">
          <div class="col-4">
            <label>电话:</label>
            <span>(027)81785853</span>
          </div>
          <div class="col-4">
            <label>网址:</label>
            <span>www.sianmed.com</span>
          </div>
          <div class="col-4">
            <label>邮编:</label>
            <span>430207</span>
          </div>

        </div>
        <div class="row">
          <div class="col-4">
            <label>传真:</label>
            <span>(027)81785903</span>
          </div>

          <div class="col-8">
            <label>地址:</label>
            <span>湖北省武汉市东湖高新区高新大道818号医疗器械园B9栋D区3楼</span>
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
