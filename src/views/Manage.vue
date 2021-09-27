<template>
  <div class="container mt-5">
    <div class="row mx-auto">
      <div
        class="col-12 col-xl-4 col-md-6 py-3"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="card color-purple">
            <div class="card-body">
          <div class="card-title">
            <h4 class="color-white">
                {{ post.title }}
            </h4>
            <div class="btn-wrap">
                <button class="btn btn-danger me-3" @click.prevent="()=>{deletPost(post.id)}">
                    <i class="fas fa-trash" ></i> Delete
                </button>
                <button class="btn btn-primary">
                    <i class="fas fa-edit"></i> Edit
                </button>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <Loading v-if="posts.length == 0"/>
</template>

<script>
export default {
  beforeMount() {
    this.getAllPosts()
    
  },
  methods: {
    async getAllPosts() {
      let { data, error } = await this.$supabase
        .from("Posts")
        .select("*")
        .order("id", { ascending: false });
      if (error) {
        console.log(error);
      } else {
        this.posts = data;
      }
    },
    async deletPost(id){
        console.log(id)
        if(!confirm("delete post?")){
            return
        }
        let {data, error} = await this.$supabase
        .from('Posts')
        .delete()
        .eq('id',id);
        if(error){
            console.error(error);
        }
        else{
            console.log(data)
            // update 
            this.getAllPosts();
        }
    }
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>