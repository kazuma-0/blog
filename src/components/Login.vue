<template>
  <div
    class="
      overlay
      position-fixed
      min-vh-100 min-vw-100
      top-0
      start-0
      bg-overlay
      z-1
    "
  >
    <div class="center card mw-390 translate-middle">
      <div class="card-body position-relative">
          <i class="fa fa-times-circle position-absolute pos-x" aria-hidden="true" @click="hideLoginEmit"></i>
        <h2 class="card-title text-center py-1 font-rubik">Log In</h2>
        <form @submit.prevent>
          <input type="email" class="form-control" placeholder="Email" v-model="email"/>
          <div class="w-100 d-flex pt-3">
            <button class="btn btn-success mx-auto" @click="Login" ref="btn">Login</button>
            <!-- <button class="btn btn-success mx-auto" @click="show">show</button> -->
          </div>
        </form>
      </div>
    </div>
  </div>
  <transition name="fade">
  <alert-view :Cls="cls" :Content="error" BgColor="#ffffff" v-if="showAlert"/>
  </transition>
</template>

<style lang="scss" scoped>

.bg-overlay {
  background-color: #00000080;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(4px);
}
.mw-390 {
  max-width: 390px;
  min-width: 320px;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
}

.font-rubik{
    font-family: Rubik,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.pos-x{
    right:11px;
}
.z-1{
    z-index: 1;
}
</style>

<script>

export default {
    data(){
        return{
            email:'',
            showAlert: false,
            error:'',
            cls:'alert-danger'
        }
    },
    emits:['hide-login'],
    methods:{
        // supabase magic login
        async Login(){
            this.error = "Invalid Email"
            this.cls = "alert-danger"
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)){
                this.showAlert = true;
                setInterval(() => {
                    this.showAlert = false;
                }, 2e3);
                return 
            }
            // eslint-disable-next-line no-unused-vars
            let {user, session, error} = await this.$supabase.auth.signIn({
                email: this.email
            })
            if(error){
                this.showAlert = true;
                this.cls = "alert-success"
                setInterval(() => {
                    this.showAlert = false;
                }, 2e3);
                this.error = error.message
                console.error(error)
            }
            else{
                this.error = "Email sent"
                this.showAlert = true;
                setInterval(() => {
                    this.showAlert = false;
                }, 2e3);
            }
        },

        async show(){
            await console.log(this.$supabase.auth.session())
        },
        hideLoginEmit(){
            this.$emit('hide-login');
        }
    }
}
</script>