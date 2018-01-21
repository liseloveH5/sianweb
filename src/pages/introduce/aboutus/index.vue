<template>
  <div class="common-page contact-message">
    <global-header></global-header>
    <div class="common-contain">
      <div class="container">
        <b-card title="公司发展"
                img-src="https://lorempixel.com/600/300/food/5/"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 col">
          <p class="text-center">Company development</p>
        </b-card>
      </div>
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
