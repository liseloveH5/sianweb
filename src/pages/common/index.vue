<template>
  <div class="common-page common">
    <global-header></global-header>
    <div class="img-wrap"><img :src="picUrl" /></div>
    <div class="common-contain container">
        <b-row >
          <b-col cols="3">

            <b-list-group class="sticky-top">
              <b-list-group-item :to="item.id" v-for="item in navList" :key="item.id">{{item.name}}</b-list-group-item>
            </b-list-group>
          </b-col>

          <b-col cols="9">
            <div  v-html="content"></div>
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
