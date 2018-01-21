<template>
  <b-navbar toggleable="md" type="dark" variant="primary" class="global-header flex-column" sticky >

    <div class="container">
      <b-navbar-brand  variant="faded" type="light">
        <img src="@/assets/images/global-header/logo.png" class="logo" alt="思安logo">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">首页</b-nav-item>

          <b-nav-item-dropdown text="走进思安">
            <span></span>
            <b-dropdown-item to="/introduce/member">企业概况</b-dropdown-item>
            <b-dropdown-item to="/introduce/member">领导致辞</b-dropdown-item>
            <b-dropdown-item to="/introduce/member">发展历程</b-dropdown-item>
            <b-dropdown-item to="/introduce/member">企业文化</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="新闻中心">
            <span></span>
            <b-dropdown-item to="/news/list">最新咨询</b-dropdown-item>
            <b-dropdown-item to="/news/list">公司资讯</b-dropdown-item>
            <b-dropdown-item to="/news/list">行业资讯</b-dropdown-item>
            <b-dropdown-item to="/news/list">公司声明</b-dropdown-item>
          </b-nav-item-dropdown>


          <b-nav-item-dropdown text="产品中心">
            <span></span>
            <b-dropdown-item href="#">CAR-T系列</b-dropdown-item>
            <b-dropdown-item href="#">TCR-T系列</b-dropdown-item>
            <b-dropdown-item href="#">CAR-NK系列</b-dropdown-item>
            <b-dropdown-item href="#">更多产品</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="科技创新">
            <span></span>
            <b-dropdown-item href="#">研发体系</b-dropdown-item>
            <b-dropdown-item href="#">研究动态</b-dropdown-item>
            <b-dropdown-item href="#">科技奖项</b-dropdown-item>
            <b-dropdown-item href="#">合作伙伴</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="销售网络">
            <span></span>
            <b-dropdown-item href="#">招贤纳士</b-dropdown-item>
            <b-dropdown-item to="/contact/message">在线留言</b-dropdown-item>
            <b-dropdown-item href="#">公司地址</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    </div>

    <b-nav class="second-header" v-show="showSecondMenu">
      <span></span>
      <b-nav-item>招贤纳士</b-nav-item>
      <b-nav-item>在线留言</b-nav-item>
      <b-nav-item>只能地图</b-nav-item>
    </b-nav>



  </b-navbar>
</template>

<script>
  import index from './index.js'
  export default index
</script>

<style lang="less">
  @import "./index.less";
</style>
