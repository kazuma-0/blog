<template>
    <div class="container pt-5">
        <div class="md-view">
            <Markdown :html="true" :source="post.content" class="color-white"></Markdown>
        </div>
    </div>
    <Loading v-if="!post.hasOwnProperty('content')"/>
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
                 console.log(error)
                 this.post = {}
             }else{
                 this.post = data[0];
                 console.log(data);
                 console.log(this.$route.params.pid)
             }
         }
     }
}
</script>

<style lang="scss" scoped>
*{
    font-family: rubik;
}
</style>