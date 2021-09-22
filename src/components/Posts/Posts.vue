<template>
    <div class="container pt-3">
        <div class="row">
            <div class="col-12 col-md-6 col-xl-4 py-2" v-for="post in posts" :key="post.id">
                <Post :post="post"/>    
            </div>
        </div>
    </div>
</template>

<script>

import Post from './Post.vue'
export default {
    data(){
        return{
            image:'https://res.cloudinary.com/practicaldev/image/fetch/s--DORb23Ft--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5y95tgkycpzdco1hvahx.jpeg',
            posts:[]
        }
    },
    components:{
        Post
    },
    created(){
        // console.log(this.$supabase.)
        this.fetchPosts()
    },
    methods:{
        async fetchPosts(){
            let {error, data} = await this.$supabase
            .from('Posts')
            .select('*');
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
