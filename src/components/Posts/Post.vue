<template>
  <div class="card color-purple color-white">
    <img
      :src="post.thumbnail"
      alt="error"
      class="card-img-top"
      v-if="post.thumbnail != null"
    />
    <div class="card-body">
      <h2 class="card-title">
        <router-link :to="{name: 'Post', params:{pid: post.pid}}" class="text-decoration-none color-white">
        {{ post.title }}
        </router-link>
      </h2>

      <div class="card-body-text">
        {{ post.short_description }} ...
      </div>

      <div class="tags d-flex" v-if="post.tags != null">
        <div
          class="tag me-2 rounded px-1 text-muted"
          v-for="tag in post.tags.split(',')"
          :key="tag"
        >
          #{{ tag.trim() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        post:Object
    }
}
</script>

<style lang="scss" scoped>
*{
    font-family: rubik;
}
</style>