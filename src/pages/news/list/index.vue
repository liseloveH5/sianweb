<template>
  <div class="common-page news-list">
    <global-header></global-header>
    <div class="img-wrap"><img src="@/assets/images/main/friends-bg.png"/></div>
    <div class="common-contain container">
      <b-row>
        <b-col cols="3">

          <b-list-group class="sticky-top">
            <b-list-group-item>资讯中心</b-list-group-item>
            <b-list-group-item to="" active>公司简讯</b-list-group-item>
            <b-list-group-item to="">行业简讯</b-list-group-item>
            <b-list-group-item to="">政策法规</b-list-group-item>
          </b-list-group>
        </b-col>

        <b-col cols="9">

          <div class="list-container">

            <list-item v-for="item in list"
                       :key="item.id"
                       :image="item.more"
                       :title="item.post_title"
                       :date="item.published_time"
                       :desc="item.post_excerpt"
                       :id="item.id"
            ></list-item>

          </div>

          <b-pagination-nav align="center" :number-of-pages="10" base-url="#" v-model="currentPage"/>
        </b-col>

      </b-row>


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
