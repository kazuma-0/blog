<template>
<div class="position-absolute top-50 start-50 translate-middle">
    <div class="card m-390 p-4 position-relative bg-dark">
        <form @submit.prevent>
            <div class="input-group mb-3 ">
                <span class="input-group-text w-input">
                    <i class="fas fa-heading"/>
            </span>
            <input type="text" required class="form-control" placeholder="Post title" v-model="title">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text w-input">
                    <i class="fas fa-info-circle"/>
            </span>
            <input type="text" required class="form-control" placeholder="Short Description" v-model="short_description">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text w-input">
                    <!-- <i class="fas fa-info-circle"/> -->
                    <i class="fas fa-file-image" aria-hidden="true"></i>
            </span>
            <input type="text" class="form-control" placeholder="Thumbnail" v-model="thumbnail">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text w-input">
                    <!-- <i class="fas fa-info-circle"/> -->
                  <i class="fas fa-tags"></i>
            </span>
            <input type="text" class="form-control" placeholder="Tags" v-model="tags">
            </div>
            <button class="form-control btn-success mb-3" @click="savePost">Save</button>
            <div class="form-control btn-danger text-center user-select-none" @click="HideSaveEmit">Cancel</div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    methods:{
        HideSaveEmit(){
            this.$emit('hide-save');
        },
        async savePost(){
            if(this.thumbnail == ""){
                this.thumbnail = null
            }
            const { data ,error} = await this.$supabase.from('Posts')
            .insert([{
                title:this.title,
                content:this.Content,
                short_description:this.short_description,
                thumbnail:this.thumbnail,
                tags:this.tags
            }])
            if(error){
                console.log(error)
            }else{
                // console.log(data);
                this.$router.push({name:'Post', params:{pid: data[0].pid}});
            }
        }
    },
    props:{
        Content:String
    },
    data(){
        return{
            title:"",
            short_description:"",
            thumbnail: "",
            tags:""
        }
    },
    emits:['hide-save']
}
</script>

<style scoped>
.m-390{
    min-width: 380px;
    max-width: 390px;
}
.w-input{
    width :40px;
    text-align: center;
}
</style>