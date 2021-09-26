<template>
    <div class="container pt-3">
        <div class="row">
            <div class="col-12 col-md-6 col-xl-4 py-2" v-for="post in posts" :key="post.id">
                <Post :post="post"/>    
            </div>
        </div>
    </div>
    <Loading v-if="posts.length == 0"/>
</template>

<script>
import Loading from '../Loading.vue'
import Post from './Post.vue'
export default {
    data(){
        return{
            posts:[]
        }
    },
    components:{
        Post,
        Loading
    },
    created(){
        this.fetchPosts()
    },
    methods:{
        // fn to fetch the posts ordered by id 
        async fetchPosts(){
            let {error, data} = await this.$supabase
            .from('Posts')
            .select('*')
            .order('id');
            if(error){
                console.log(error)
            }else{
                this.posts = data
                console.log(data);
            }
        }
    }
}
</script>
