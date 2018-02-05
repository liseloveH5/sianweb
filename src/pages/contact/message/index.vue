<template>
  <div class="common-page science-application">
    <global-header></global-header>
    <div class="img-wrap"><img :src="picUrl" /></div>
    <div class="common-contain container">
      <b-alert :show="count"
               @dismissed="count=0"
               @dismiss-count-down="countDownChanged"
               :variant="tip">{{info}}
      </b-alert>
      <b-row >
        <b-col cols="3">

          <b-list-group class="sticky-top">
            <b-list-group-item :to="(item.type+ '/' + item.id) | pageType" v-for="item in navList" :key="item.id">{{item.name}}</b-list-group-item>
          </b-list-group>
        </b-col>

        <b-col cols="9">

          <b-card no-body>

          </b-card>


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
  @import "index.less";
</style>
