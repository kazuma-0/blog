<template>
  <div class="min-vh-100 h-full ovf ofv-2">
      <nav class="navbar px-3 color-white">
          <div class="navbar-brand ">
              <i class="fa fa-home" aria-hidden="true"></i>
          </div>

          <div class="d-flex">
              <div class="nav-item fw-bold pe" @click="showSave = true">
                  Save
              </div>
          </div>
      </nav>
      <div class="container-fluid h-100">
          <div class="row h-80">
              <div class="col-lg-6 col-12 h-100 p-2">
                  <textarea spellcheck="false" name="text" class="color-white hide-scroll h-100 w-100 p-3 text-area rounded shadow bg-textarea" v-model="source"></textarea>
              </div>
              <div class="col-lg-6 col-12 h-100 overflow-scroll hide-scroll">
                  <div class="p-2">
                      <div class="md-preview p-2 color-white">
                          <Markdown :source="source" :html="true" :breaks="true"/>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
  <save-post :Content="source" @hide-save="showSave = false" v-if="showSave" />
</template>

<style scoped>
.h-full{
    height:100vh;
    /* overflow: hidden; */
}
.h-80{
    height:90%;
}

@media screen and (min-width: 900px){
    .ofv-2{
        overflow:hidden !important;
    }
}

.text-area{
    outline:none;
    border:none;
    resize: none;
}
.md-preview{
    /* text-overflow: clip;
     */
     overflow-wrap: anywhere;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.bg-dark-2{
    background: rgb(32, 29, 36);
    color: #FBF7F4;
}

.bg-textarea{
    background-color:#352D39;
}

</style>

<script>
/* eslint-disable no-unused-vars */
import Markdown from 'vue3-markdown-it'
import 'highlight.js/styles/monokai.css';
import SavePost from '../components/Posts/SavePost.vue';
export default {
  components: {
      Markdown,
      SavePost
  },
  data(){
      return{
          source:"",
          showSave:false
      }
  },
  props:{
      
  }
};
</script>
