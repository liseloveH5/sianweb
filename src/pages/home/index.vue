<template>
  <div class="common-page home">
    <global-header ></global-header>
    <div class="common-contain">
      <!--part1:swiper首图-->
      <div class="pannel">
        <div class="swiper-wrap">
          <b-carousel id="carousel1"
                      style="text-shadow: 1px 1px 2px #333;"
                      controls
                      indicators
                      background="#ababab"
                      :interval="4000"
                      img-width="1024"
                      img-height="480"
                      v-model="slide"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
          >


            <b-carousel-slide v-for="item in dataBanner"
                              :key="item.id"
                              :img-src="item.image">
              <div class="text-wrap">
                <h3>{{item.content}}</h3>
                <h2>{{item.description}}</h2>
                <p><!--Provide Technology and Services For Hunman Health--></p>
                <b-button variant="secondary" :to="item.url">申请入口</b-button>
              </div>
            </b-carousel-slide>


          </b-carousel>
        </div>

      </div>

      <!--part2:关于思安-->
      <div class="pannel about-me" style="background: #fff;">
        <div class="container">
          <div class="pannel-title"><p>关于思安</p></div>
          <div class="about-me-desc">
            <p>武汉思安医疗技术有限公司成立于2015年，是一家致力于生物医药产品研发、临床应用的高新技术企业，公司由多位在美国肿瘤研究领域</p>
            <p>卓有建树的科学家和中国医药企业长期从事经营管理的专业人士共同创建。思安医疗拥有多项生物医药核心专利技术。目前，公司已经开展了</p>
            <p>CAT-T、TCR-T等系列肿瘤细胞治疗品种的研发，部分品种已进入临床研究阶段</p>
          </div>
          <div class="about-me-list row">
            <b-card v-for="(item, index) in enterpriseCatalog"
                    :key="item.id"
                    :title="item.name"
                    img-src="http://oyqbjwu6v.bkt.clouddn.com/blog/180121/FcH7J2ChA5.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    :class="id == index ? 'mb-2 col active' : 'mb-2 col '"
                    @click="id = index">
              <div class="card-letter"><h3 class="img text-center">H</h3></div>
              <p class="text-center">Company honors</p>
            </b-card>

          </div>

        </div>
      </div>

      <div class="pannel products tab-uniform">
        <div class="pannel-title"><p>产品中心</p></div>
        <b-card no-body>
          <span class="icon-arrow"></span>
          <b-tabs pills card>
            <b-tab v-for="item in productCatalog"
                   :key="item.id"
                   :title="item.name"
                   @click="getProduct(item.id)">
                <div v-html="content"></div>
            </b-tab>
          </b-tabs>
        </b-card>

      </div>
<!--

      <div class="pannel service">
        <div class="container">
          <div class="pannel-title"><p>客服中心</p></div>
          <div class="card-list row">
            <b-card title="服务理念"
                    img-src="http://oyqbjwu6v.bkt.clouddn.com/blog/180121/kI2eAE92mf.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <p class="text-center">Service idea</p>
            </b-card>
            <b-card title="服务网络"
                    img-src="http://oyqbjwu6v.bkt.clouddn.com/blog/180121/h4em3DGBjC.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <p class="text-center">Service network</p>
            </b-card>
            <b-card title="产品服务"
                    img-src="http://oyqbjwu6v.bkt.clouddn.com/blog/180121/lFigCbehbE.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <p class="text-center">Product service</p>
            </b-card>
          </div>
        </div>
      </div>
-->

      <div class="pannel news tab-uniform">
        <div class="container">
          <div class="pannel-title"><p>资讯中心</p></div>
          <b-card no-body>
            <b-tabs pills card>
              <b-tab v-for="item in newsCatalog"
                     :title="item.name"
                     :key="item.id"
                     @click="getNews(item.id)">
                <div class="content-wrap">
                  <div class="news-list">
                      <div :class="'news-item row direction-' + index" v-for="(childItem, index) in list" :key="childItem.id">
                        <div class="img-wrap col">
                          <img :src="childItem.more"/>
                        </div>
                        <div class="text-wrap col">
                          <span :class="'arrow-' + index"></span>
                          <h5>{{childItem.post_title}}</h5>
                          <p>{{childItem.post_excerpt}}</p>
                        </div>
                    </div>

                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>


      <div class="pannel friends">
        <div class="container">
          <div class="pannel-title"><p>合作伙伴</p></div>
          <p class="text-center">我们期待与您的真诚合作，共创美好前景。为人类健康提供技术和服务。</p>
          <div class="pic-wrap">
            <div class="col" v-for="item in dateFlink" :key="item.id"><img :src="item.image"/></div>
          </div>

        </div>

      </div>
    </div>

    <div class="pannel co-info">
      <div class="co-qr-code"><img src="@/assets/images/main/qr-code.png"></div>
      <p class="text-center co-name">武汉思安医疗技术有限公司</p>
      <div class="row">
        <span class="col">电话：（027）81785853</span>
        <span class="col">传真：（027）81785903</span>
        <span class="col">网址：www.11111.com</span>
        <span class="col">邮编：430207</span>
      </div>
      <p class="text-center co-addr">地址：湖北省武汉市东湖高新区高新大道818号医疗器械园B9栋D区3楼</p>
    </div>

    <global-footer ></global-footer>

  </div>
</template>

<script>
  import index from './index.js'
  export default index
</script>

<style lang="less">
  @import "index.less";
</style>
