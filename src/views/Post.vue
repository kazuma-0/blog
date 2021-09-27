<template>
    <div class="home position-absolute top-0 end-0 p-3">
        <router-link to="/" class="text-decoration-none">
        <i class="fa fa-home color-white"></i>
        </router-link>
    </div>
    <div class="container pt-5">
        <div class="md-view rubik">
            <Markdown :html="true" :source="post.content" class="color-white"></Markdown>
        </div>
    </div>
    <transition name="fade">
    <Loading v-if="!post.hasOwnProperty('content')"/>
    </transition>
</template>


<script>
import 'highlight.js/styles/atelier-forest-dark.css';
import Markdown from 'vue3-markdown-it'
export default {
    data(){
        return{
            post:{}
        }
    },
    components:{
        Markdown
    },
    beforeMount(){
        this.getPost();
    }
    ,
     methods:{
         // fetches the post from the server
         async getPost(){
             let {data, error} = await this.$supabase
             .from('Posts')
             .select('*')
             .eq('pid', this.$route.params.pid)
             if(error){
                 this.post = {}
             }else{
                 this.post = data[0];
             }
         }
     }
}
</script>

<style lang="scss" scoped>
.rubik{
    font-family: rubik;
}
</style>