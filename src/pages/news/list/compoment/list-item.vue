<template>
  <b-card class="news-list-item">
    <b-media>
      <!--<b-img slot="aside" :src="image" width="200" height="160" alt="placeholder" />-->

      <router-link v-bind:to="{path:`/news/detail/${id}/${navid}`}">
        <h5 class="mt-0 title">{{title}}</h5>
      </router-link>

      <span class="data-time">{{date | dateFormat}}</span>
      <!--<p class="desc">-->
        <!--{{desc}}-->
      <!--</p>-->
      <!--<div>-->
        <!--<b-btn class="float-right" variant="primary" :to="{path:`/news/detail/${id}/${navid}`}">-->
          <!--<template v-if="lang == 1">查看详情</template>-->
          <!--<template v-else>more</template>-->
        <!--</b-btn>-->
      <!--</div>-->
    </b-media>
  </b-card>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'list-items',
    data() {
      return {

      }
    },
    props:{
      image:String,
      title:String,
      date:Number,
      desc:String,
      id:String,
      navid:String
    },
    // 挂载之后 相当于原来的ready
    mounted: function () {
      this.$nextTick(function () {
        // 保证 this.$el 已经插入文档
      })
    },
    computed: mapState({
      // 传字符串参数 'count' 等同于 `state => state.count`
      lang: 'lang'
    }),
  };
</script>

<style lang="less">
  @import "~@/assets/style/base/_fn";

  .news-list-item{
    line-height: 24px;
    .title{
      float: left;
      width: 530px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color:@color3;
      margin-bottom:5px;
    }
    .data-time{
      float: right;
      color:#81899e;
      font-size:14px;
    }
    .desc{
      font-size:14px;
      line-height:25px;
      margin-top:10px;
      .ellipsisLn(2);
    }
  }

</style>
