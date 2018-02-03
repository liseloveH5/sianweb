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
            <b-tabs card>
              <b-tab title="机构申请" active>
                <b-form @submit="onOrganSubmit" class="message-form">

                  <b-form-row>
                    <b-col sm="3">
                      <label v-if="lang==1" for="organForm-name" class="label-require">机构名称</label>
                      <label v-else for="organForm-name" class="label-require">Institution Name</label>
                    </b-col>
                    <b-col sm="4">
                      <b-form-input id="organForm-name"
                                    type="text"
                                    v-model="organForm.name"
                                    required
                                    placeholder="请输入机构名称">
                      </b-form-input>
                    </b-col>
                  </b-form-row>

                  <b-form-row>
                    <b-col sm="3">
                      <label v-if="lang==1" for="organForm-contactName" class="label-require">联系人</label>
                      <label v-else for="organForm-contactName" class="label-require">Contact</label>
                    </b-col>
                    <b-col sm="4">
                      <b-form-input id="organForm-contactName"
                                    type="text"
                                    v-model="organForm.contactName"
                                    required
                                    placeholder="请输入联系人姓名">
                      </b-form-input>
                    </b-col>
                  </b-form-row>

                  <b-form-row>
                    <b-col sm="3">
                      <label v-if="lang==1" for="organForm-contactPhone" class="label-require">联系电话</label>
                      <label v-else for="organForm-contactPhone" class="label-require">Phone Number</label>
                    </b-col>
                    <b-col sm="4">
                      <b-form-input id="organForm-contactPhone"
                                    type="tel"
                                    v-model="organForm.contactPhone"
                                    required
                                    placeholder="请输入联系人电话">
                      </b-form-input>
                    </b-col>
                  </b-form-row>


                  <b-form-row>
                    <b-col sm="3">
                      <label v-if="lang==1" for="organForm-applyProject" >申请项目</label>
                      <label v-else for="organForm-applyProject" >Application Type</label>
                    </b-col>
                    <b-col sm="4">
                      <b-form-select v-model="organForm.selected" :options="organForm.options" >
                      </b-form-select>
                    </b-col>
                  </b-form-row>

                  <b-row class="form-button-row">
                    <b-col offset-sm="2" sm="4" class="">
                      <b-button v-if="lang==1" type="submit" variant="primary">提交</b-button>
                      <b-button v-else type="submit" variant="primary">Submit</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-tab>


              <b-tab title="个人申请">
                <b-form @submit="onPersonSubmit" class="message-form">

                  <b-form-row>
                    <b-col sm="3">
                      <label v-if="lang==1" for="personForm-name" class="label-require">申请人</label>
                      <label v-else for="personForm-name" class="label-require">Applicant</label>
                    </b-col>
                    <b-col sm="4">
                      <b-form-input id="personForm-name"
                                    type="text"
                                    v-model="personForm.name"
                                    required
                                    placeholder="请输入申请人姓名">
                      </b-form-input>
                    </b-col>
                  </b-form-row>

                  <b-form-row>
                    <b-col sm="3">
                      <label v-if="lang==1" for="personForm-phone" class="label-require">联系电话</label>
                      <label v-else for="personForm-phone" class="label-require">Phone Number</label>
                    </b-col>
                    <b-col sm="4">
                      <b-form-input id="personForm-phone"
                                    type="tel"
                                    v-model="personForm.phone"
                                    required
                                    placeholder="请输入申请人电话">
                      </b-form-input>
                    </b-col>
                  </b-form-row>

                  <b-form-row>
                    <b-col sm="3">
                      <label v-if="lang==1" for="personForm-location" class="label-require">所在区域</label>
                      <label v-else for="personForm-location" class="label-require">Location</label>
                    </b-col>
                    <b-col sm="4">
                      <b-form-input id="personForm-location"
                                    type="text"
                                    v-model="personForm.location"
                                    required
                                    placeholder="请输入申请人所在区域">
                      </b-form-input>
                    </b-col>
                  </b-form-row>


                  <b-form-row>
                    <b-col sm="3">
                      <label v-if="lang==1" for="personForm-applyProject" >申请项目</label>
                      <label v-else for="personForm-applyProject" >Application Type</label>
                    </b-col>
                    <b-col sm="4">
                      <b-form-select v-model="personForm.selected" :options="personForm.options" >
                      </b-form-select>
                    </b-col>
                  </b-form-row>

                  <b-row class="form-button-row">
                    <b-col offset-sm="2" sm="4" class="">
                      <b-button v-if="lang==1" type="submit" variant="primary">提交</b-button>
                      <b-button v-else type="submit" variant="primary">Submit</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-tab>


            </b-tabs>
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
