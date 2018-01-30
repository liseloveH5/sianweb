<template>
  <b-navbar toggleable="md" type="dark" variant="primary" class="global-header flex-column" sticky >

    <div class="container">
      <b-navbar-brand  variant="faded" type="light">
        <img src="@/assets/images/global-header/logo.png" class="logo" alt="思安logo">
      </b-navbar-brand>


      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>

          <template v-for="item in header">
            <!-- 如果没有子节点 一级菜单-->
            <template v-if="item.son.length == 0">
              <b-nav-item :to="item.href">{{item.name}}</b-nav-item>
            </template>

            <!-- 如有有子节点 二级菜单-->
            <template v-if="item.son.length > 0">
              <b-nav-item-dropdown :text="item.name">
                <span></span>
                <b-dropdown-item v-for="son in item.son" :key="son.id" :to="(son.type+ '/' + son.href) | pageType">
                  {{son.name}}
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </template>
          </template>




          <!--<b-nav-item-dropdown text="走进思安">-->
            <!--<span></span>-->
            <!--<b-dropdown-item to="/common">企业概况</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">领导寄语</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">发展历程</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">企业文化</b-dropdown-item>-->
          <!--</b-nav-item-dropdown>-->

          <!--<b-nav-item-dropdown text="新闻中心">-->
            <!--<span></span>-->
            <!--<b-dropdown-item to="/news/list">最新资讯</b-dropdown-item>-->
            <!--<b-dropdown-item to="/news/list">公司资讯</b-dropdown-item>-->
            <!--<b-dropdown-item to="/news/list">行业资讯</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">公司申明</b-dropdown-item>-->
          <!--</b-nav-item-dropdown>-->


          <!--<b-nav-item-dropdown text="产品中心">-->
            <!--<span></span>-->
            <!--<b-dropdown-item to="/common">CAR-T系列</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">TCR-T系列</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">CAR-NK系列</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">更多产品</b-dropdown-item>-->
          <!--</b-nav-item-dropdown>-->

          <!--<b-nav-item-dropdown text="科技创新">-->
            <!--<span></span>-->
            <!--<b-dropdown-item to="/common">研发体系</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">科研动态</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">科技奖项</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">合作伙伴</b-dropdown-item>-->
          <!--</b-nav-item-dropdown>-->

          <!--<b-nav-item-dropdown text="联系我们">-->
            <!--<span></span>-->
            <!--<b-dropdown-item to="/common">销售网络</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">招纳贤士</b-dropdown-item>-->
            <!--<b-dropdown-item to="/contact/application">科研申请</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">智能地图</b-dropdown-item>-->
            <!--<b-dropdown-item to="/common">{{header}}</b-dropdown-item>-->
          <!--</b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </div>

    <b-button variant="outline-secondary" size='sm' @click="chooseLang" style="position:absolute; right:25px;margin-top:18px; border-radius: 5px; min-width: 70px; padding:.2rem 0;">English</b-button>



  </b-navbar>
</template>

<script>
  import index from './index.js'
  export default index
</script>

<style lang="less">
  @import "./index.less";
</style>
