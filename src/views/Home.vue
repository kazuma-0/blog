<template>
<Navbar/>
<Posts/>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Posts from '../components/Posts/Posts.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Posts,
  }
}
</script>
