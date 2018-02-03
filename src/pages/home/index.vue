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


            <b-carousel-slide v-for="item in dataBanner.list"
                              :key="item.id"
                              :img-src="item.image">
              <div class="text-wrap">
                <h3>{{item.content}}</h3>
                <h2>{{item.description}}</h2>
                <p><!--Provide Technology and Services For Hunman Health--></p>
                <b-button variant="secondary" :to="item.url">
                  <template v-if="lang==1">申请入口</template>
                  <template v-else>Application Entrance</template>
                </b-button>
              </div>
            </b-carousel-slide>


          </b-carousel>
        </div>

      </div>

      <!--part2:关于思安-->
      <div class="pannel about-me" style="background: #fff;">
        <div class="container">
          <div class="pannel-title">
            <p v-if="lang==1">关于思安</p>
            <p v-else>About SIAN</p>
          </div>
          <div class="about-me-desc">
            <p>{{compInfo.text}}</p>
          </div>
          <div class="about-me-list row">
            <b-card v-for="(item, index) in compInfo.list"
                    :key="item.id"
                    :title="item.title"
                    :img-src="item.image"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"

                    :class="id == index ? 'mb-2 col active' : 'mb-2 col '"
                    @click="handleAboutClick(item,index)">
              <div class="card-letter"><h3 class="img text-center">{{item.alias | firstLetter}}</h3></div>
              <p class="text-center">{{item.description}}</p>
            </b-card>

          </div>

        </div>
      </div>

     <!-- <div class="pannel products tab-uniform">
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

      </div>-->
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

<!--
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

-->

    <!--  <div class="pannel friends">
        <div class="container">
          <div class="pannel-title"><p>合作伙伴</p></div>
          <p class="text-center">我们期待与您的真诚合作，共创美好前景。为人类健康提供技术和服务。</p>
          <div class="pic-wrap">
            <div class="col" v-for="item in dateFlink" :key="item.id"><img :src="item.image"/></div>
          </div>

        </div>

      </div>-->
    </div>

    <div class="pannel co-info">
      <div class="co-qr-code"><img src="@/assets/images/main/qr-code.png"></div>
      <p class="text-center co-name">{{footer.company}}</p>
      <div class="row">
        <div class="col-8">
          <span class="col-4">
            <template v-if="lang==1">电话：</template>
            <template v-else>Tel:</template>
            {{footer.tel}}
          </span>
          <span class="col-4">
            <template v-if="lang==1">传真：</template>
            <template v-else>Fex:</template>
            {{footer.fex}}
          </span>
          <span class="col-4">
            <template v-if="lang==1">邮编：</template>
            <template v-else>Post:</template>
            {{footer.postcode}}
          </span>
        </div>
        <div class="col-4">
          <template v-if="lang==1">邮箱:</template>
          <template v-else>E-mail</template>
          {{footer.site_admin_email}}
        </div>
      </div>
      <p class="text-center co-addr">
        <template v-if="lang==1">地址：</template>
        <template v-else>Address:</template>
        {{footer.address}}
      </p>
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
