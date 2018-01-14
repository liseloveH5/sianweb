<template>
  <div class="common-page contact-message">
    <global-header ></global-header>
    <div class="common-contain">
       <div class="container">
         <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="message-form">


           <b-form-row>
             <b-col sm="1">
               <label :for="textarea1">Type :</label>
             </b-col>
             <b-col sm="9">
               <b-form-textarea id="textarea1"
                                v-model="text"
                                placeholder="Enter something"
                                :rows="3"
                                :max-rows="6">
               </b-form-textarea>
             </b-col>
           </b-form-row>




           <b-form-group id="exampleInputGroup2"
                         label="Your Name:"
                         label-for="exampleInput2">
             <b-form-input id="exampleInput2"
                           type="text"
                           v-model="form.name"
                           required
                           placeholder="Enter name">
             </b-form-input>
           </b-form-group>
           <b-form-group id="exampleInputGroup3"
                         label="Food:"
                         label-for="exampleInput3">
             <b-form-select id="exampleInput3"
                            :options="foods"
                            required
                            v-model="form.food">
             </b-form-select>
           </b-form-group>
           <b-form-group id="exampleGroup4">
             <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
               <b-form-checkbox value="me">Check me out</b-form-checkbox>
               <b-form-checkbox value="that">Check that out</b-form-checkbox>
             </b-form-checkbox-group>
           </b-form-group>
           <b-button type="submit" variant="primary">Submit</b-button>
           <b-button type="reset" variant="danger">Reset</b-button>
         </b-form>
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
