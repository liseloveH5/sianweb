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


            <b-carousel-slide img-src="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/C4FC3jJGhd.jpg">
              <div class="text-wrap">
                <h3>为人类健康</h3>
                <h2>提供技术和服务</h2>
                <p>Provide Technology and Services For Hunman Health</p>
                <b-button variant="secondary">联系我们</b-button>
              </div>
            </b-carousel-slide>

            <b-carousel-slide img-src="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/C4FC3jJGhd.jpg">
              <div class="text-wrap">
                <h3>为人类健康</h3>
                <h2>提供技术和服务</h2>
                <p>Provide Technology and Services For Hunman Health</p>
                <b-button variant="secondary">联系我们</b-button>
              </div>
            </b-carousel-slide>

            <b-carousel-slide img-src="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/C4FC3jJGhd.jpg">
              <div class="text-wrap">
                <h3>为人类健康</h3>
                <h2>提供技术和服务</h2>
                <p>Provide Technology and Services For Hunman Health</p>
                <b-button variant="secondary">联系我们</b-button>
              </div>
            </b-carousel-slide>


          </b-carousel>
        </div>

      </div>

      <!--part2:关于思安-->
      <div class="pannel about-me" style="background: #fff;">
        <div class="pannel-wrap">
          <div class="pannel-title"><p>关于思安</p></div>
          <div class="about-me-desc">
            <p>武汉思安医疗技术有限公司成立于2015年，是一家致力于生物医药产品研发、临床应用的高新技术企业，公司由多位在美国肿瘤研究领域</p>
            <p>卓有建树的科学家和中国医药企业长期从事经营管理的专业人士共同创建。思安医疗拥有多项生物医药核心专利技术。目前，公司已经开展了</p>
            <p>CAT-T、TCR-T等系列肿瘤细胞治疗品种的研发，部分品种已进入临床研究阶段</p>
          </div>
          <div class="about-me-list row">
            <b-card title="公司荣誉"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col active">
              <div class="card-letter"><h3 class="img text-center">H</h3></div>
              <p class="text-center">Company honors</p>
            </b-card>
            <b-card title="公司发展"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <div class="card-letter"><h3 class="img text-center">D</h3></div>
              <p class="text-center">Company development</p>
            </b-card>
            <b-card title="公司文化"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <div class="card-letter"><h3 class="img text-center">C</h3></div>
              <p class="text-center">Company culture</p>
            </b-card>
            <b-card title="公司团队"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <div class="card-letter"><h3 class="img text-center">T</h3></div>
              <p class="text-center">Company team</p>
            </b-card>

          </div>

        </div>
      </div>
      <div class="pannel products tab-uniform">
        <div class="pannel-title"><p>产品中心</p></div>
        <b-card no-body>
          <span class="icon-arrow"></span>
          <b-tabs pills card>
            <b-tab title="CAR-T系列" active>
                Tab Contents 1
            </b-tab>
            <b-tab title="TCR-T系列">
                Tab Contents 2
            </b-tab>
            <b-tab title="CAR-NK系列">
                Tab Contents 3
            </b-tab>
            <b-tab title="其他产品">
                Tab Contents 4
            </b-tab>
          </b-tabs>
        </b-card>

      </div>

      <div class="pannel service">
        <div class="pannel-wrap">
          <div class="pannel-title"><p>客服中心</p></div>
          <div class="card-list row">
            <b-card title="服务理念"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <p class="text-center">Service idea</p>
            </b-card>
            <b-card title="服务网络"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <p class="text-center">Service network</p>
            </b-card>
            <b-card title="产品服务"
                    img-src="https://lorempixel.com/600/300/food/5/"
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

      <div class="pannel news tab-uniform">
        <div class="pannel-wrap">
          <div class="pannel-title"><p>资讯中心</p></div>
          <b-card no-body>
            <b-tabs pills card>
              <b-tab title="公司资讯" active>
                <div class="content-wrap">
                  <div class="news-list">
                    <div class="row">
                      <div class="news-item col row">
                        <div class="img-wrap col">
                          <img/>
                          <span class="arrow"></span>
                        </div>
                        <div class="text-wrap col">
                          <h5>华北制药集团</h5>
                          <p>9月14日，为期三天的2017第四飒沓vhjeeasjhsdjhdshdshmdsskcn凯撒活动开始届诺贝尔奖获得者医学峰会在贵阳国际生态会议中心隆重开幕。五位诺奖得主、十余位中美院士、2000余位权威专家以及国内外生物医药产业新锐领袖、资深投资机构齐聚“林城”贵阳，围绕“科学：事实与虚构的博弈（Science-Fact...</p>
                        </div>
                      </div>
                      <div class="news-item col row">
                        <div class="img-wrap col">
                          <img/>
                          <span class="arrow"></span>
                        </div>
                        <div class="text-wrap col">
                          <h5>华北制药集团</h5>
                          <p>########################</p>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="news-item col row">
                        <div class="text-wrap col">
                          <h5>华北制药集团</h5>
                          <p>########################</p>
                        </div>
                        <div class="img-wrap col">
                          <img/>
                          <span class="arrow"></span>
                        </div>
                      </div>
                      <div class="news-item col row">
                        <div class="text-wrap col">
                          <h5>华北制药集团</h5>
                          <p>########################</p>
                        </div>
                        <div class="img-wrap col">
                          <img/>
                          <span class="arrow"></span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </b-tab>
              <b-tab title="行业新闻">
                Tab Contents 2
              </b-tab>
              <b-tab title="政策法规">
                Tab Contents 3
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>


      <div class="pannel member">
        <div class="pannel-wrap">
          <div class="pannel-title"><p>合作伙伴</p></div>
          <p class="text-center">我们期待与您的真诚合作，共创美好前景。为人类健康提供技术和服务。</p>
          <div class="pic-wrap row">
            <img class="col"/>
            <img class="col"/>
            <img class="col"/>
            <img class="col"/>
            <img class="col"/>
            <img class="col"/>
          </div>

        </div>

      </div>
    </div>

    <div class="pannel co-info">
      <div class="co-qr-code"><img></div>
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
