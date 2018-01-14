<template>
  <b-navbar toggleable="md" type="dark" variant="primary" class="global-header" sticky>

    <div class="container">
      <b-navbar-brand  variant="faded" type="light">
        <img src="@/assets/images/global-header/logo.png" class="logo" alt="思安logo">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">首页</b-nav-item>
          <b-nav-item-dropdown text="关于思安">
            <b-dropdown-item href="#">公司简介</b-dropdown-item>
            <b-dropdown-item href="#">公司团队</b-dropdown-item>
            <b-dropdown-item href="#">公司文化</b-dropdown-item>
            <b-dropdown-item href="#">公司目标</b-dropdown-item>
            <b-dropdown-item href="#">公司使命</b-dropdown-item>
            <b-dropdown-item href="#">公司发展</b-dropdown-item>
            <b-dropdown-item href="#">公司荣耀</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="产品中心">
            <b-dropdown-item href="#">CAR-T系列</b-dropdown-item>
            <b-dropdown-item href="#">TCR-T系列</b-dropdown-item>
            <b-dropdown-item href="#">CAR-NK系列</b-dropdown-item>
            <b-dropdown-item href="#">其他系列</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#">客服中心</b-nav-item>

          <b-nav-item-dropdown text="资讯中心">
            <b-dropdown-item href="#">公司资讯</b-dropdown-item>
            <b-dropdown-item href="#">行业资讯</b-dropdown-item>
            <b-dropdown-item href="#">政策法规</b-dropdown-item>
          </b-nav-item-dropdown>


          <b-nav-item href="#">合作伙伴</b-nav-item>
          <b-nav-item-dropdown text="联系我们">
            <b-dropdown-item href="#">招贤纳士</b-dropdown-item>
            <b-dropdown-item href="#">在线留言</b-dropdown-item>
            <b-dropdown-item href="#">智能地图</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    </div>


  </b-navbar>
</template>

<script>
  import index from './index.js'
  export default index
</script>

<style lang="less">
  @import "./index.less";
</style>
