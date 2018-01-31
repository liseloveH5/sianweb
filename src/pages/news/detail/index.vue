<template>
  <div class="common-page news-detail">
    <global-header></global-header>
    <div class="img-wrap"><img :src="picUrl" /></div>
    <div class="common-contain container">
      <b-row >
        <b-col cols="3">

          <b-list-group class="sticky-top">
            <b-list-group-item :to="`/news/list/${item.id}`" :active="item.id == navid" v-for="item in navList" :key="item.id">{{item.name}}</b-list-group-item>
          </b-list-group>
        </b-col>

        <b-col cols="9">

          <b-card :title="newsDetail.post_title"
                  class="detail-header">
            <div class="date">发布日期：{{newsDetail.published_time}}</div>
            <div class="desc">来源: {{newsDetail.post_source}}</div>
            <div class="detail-container" v-html="content">

            <!--  <img src="http://oyqbjwu6v.bkt.clouddn.com/blog/180116/h4kA8G7G0D.png" alt="">
              <img src="http://oyqbjwu6v.bkt.clouddn.com/blog/180116/GmEeHBlghD.png" alt="">-->
            </div>
          </b-card>

          <div class="detail-footer">
            <div class="row">
              <div class="col-5 text-left">
                <span>上一篇：</span>
                <b-link @click="getDetailData(around.prev.id)" :to="`/news/detail/${around.prev.id}/${navid}`">{{around.prev.post_title}}</b-link>
              </div>
              <div class="offset-2 col-5 text-right ">
                <b-link @click="getDetailData(around.next.id)" :to="`/news/detail/${around.next.id}/${navid}`">{{around.next.post_title}}</b-link>
                <span >：下一篇</span>
              </div>
            </div>
          </div>

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
