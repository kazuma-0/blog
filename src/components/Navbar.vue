<template>
    <div class="navbar px-3 ">
        <div class="navbar-brand bg-dark px-3 py-2 fw-bold text-light rounded">
            Blog
        </div>
        <div class="d-flex">
            <transition name="show">
            <div class="nav-item px-3" v-if="ShowSearch">
                <input type="text" class="" placeholder="not implemented yet" disabled>
            </div>
            </transition>
            <div class="nav-item px-3">
                <i class="fas fa-search" @click="Search"></i>
            </div>
            <div class="nav-item px-3 fw-bold" @click="showLogin = true">
                Login
            </div>
        </div>
    </div>
    <LoginVue @hide-login="showLogin= false" v-if="showLogin"/>
</template>

<script>
import LoginVue from './Login.vue'
export default {
    methods:{
        Search(){
            this.ShowSearch = !this.ShowSearch
        }
    },
    components:{
        LoginVue
    },
    data(){
        return{
            ShowSearch: false,
            showLogin: false
        }
    }
}

</script>
<style lang="scss" scoped>
.hover-a{
    position: relative;
    ::before{
        height: 10%;
        width: 130%;
    }
}


.show-enter-active,
.show-leave-active {
  transition: all 0.1s ease-in-out;
}

.show-enter-from,
.show-leave-to {
    transform: scale(0);
}

</style>