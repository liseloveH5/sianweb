<template>
  <div class="common-page contact-message">
    <global-header ></global-header>
    <div class="common-contain">
       <div class="container">
         <b-form-group label="Radios using <code>options</code>">
           <b-form-radio-group id="radios1" v-model="selected" :options="options" name="radioOpenions">
           </b-form-radio-group>
         </b-form-group>

         <b-form-group label="Radios using sub-components">
           <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
             <b-form-radio value="first">Toggle this custom radio</b-form-radio>
             <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>
             <b-form-radio value="third" disabled>This one is Disabled</b-form-radio>
             <b-form-radio :value="{fourth: 4}">This is the 4th radio</b-form-radio>
           </b-form-radio-group>
         </b-form-group>
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
  @import "./index.less";
</style>
