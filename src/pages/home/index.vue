<template>
  <div class="common-page home">
    1111111111111111
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
              <div>为人类健康</div>
              <div>提供技术和服务</div>
              <p>Provide Technology and Services For Hunman Health</p>
              <button>联系我们</button>
            </b-carousel-slide>

            <b-carousel-slide img-src="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/C4FC3jJGhd.jpg">
              <div>为人类健康</div>
              <div>提供技术和服务</div>
              <p>Provide Technology and Services For Hunman Health</p>
              <button>联系我们</button>
            </b-carousel-slide>

            <b-carousel-slide img-src="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/C4FC3jJGhd.jpg">
              <div>为人类健康</div>
              <div>提供技术和服务</div>
              <p>Provide Technology and Services For Hunman Health</p>
              <button>联系我们</button>
            </b-carousel-slide>


          </b-carousel>
        </div>

      </div>

      <!--part2:关于思安-->
      <div class="pannel about-me">
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
                    class="mb-2 col">
              <div class="card-letter"></div>
              <p class="text-center">Company honors</p>
            </b-card>
            <b-card title="公司发展"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <div class="card-letter"></div>
              <p class="text-center">Company development</p>
            </b-card>
            <b-card title="公司文化"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <div class="card-letter"></div>
              <p class="text-center">Company culture</p>
            </b-card>
            <b-card title="公司团队"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <div class="card-letter"></div>
              <p class="text-center">Company team</p>
            </b-card>

          </div>

        </div>
      </div>
      <div class="pannel">
        <div class="pannel-wrap">
          <div class="pannel-title"><p>产品中心</p></div>
          <b-card no-body>
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
        </div>

      <div>
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
              <div class="card-letter"></div>
              <p class="text-center">Service idea</p>
            </b-card>
            <b-card title="服务网络"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <div class="card-letter"></div>
              <p class="text-center">Service network</p>
            </b-card>
            <b-card title="产品服务"
                    img-src="https://lorempixel.com/600/300/food/5/"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 col">
              <div class="card-letter"></div>
              <p class="text-center">Product service</p>
            </b-card>
          </div>
        </div>
      </div>

      <div class="pannel">
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
                          <p>########################</p>
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
                        <div class="text-wrap">
                          <h5>华北制药集团</h5>
                          <p>########################</p>
                        </div>
                        <div class="img-wrap">
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


      <div class="pannel connect-us">
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
