<template>
  <div class="common-page news-list">
    <global-header></global-header>
    <div class="img-wrap"><img src="@/assets/images/main/friends-bg.png"/></div>
    <div class="common-contain container">
      <b-row>
        <b-col cols="3">

          <b-list-group class="sticky-top">
            <b-list-group-item :to="(item.type+ '/' + item.id) | pageType" v-for="item in navList" :key="item.id">{{item.name}}</b-list-group-item>
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
                       :navid="navId"
            ></list-item>

          </div>

          {{currentPage}}


          <b-pagination v-if="totalRow" align="center" :total-rows="totalRow" :per-page="pageSize" v-model="currentPage"/>
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
