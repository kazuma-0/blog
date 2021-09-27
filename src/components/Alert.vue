<template>
<transition name="fade">
  <div class="position-absolute top-10 start-50 l50 z-50">
      <div :class="'alert alert-dissmisable px-2 py-1  ' + Cls" role="alert" tabindex="-1">
      <span>{{Content}}</span>
      </div>
  </div>
</transition>
</template>

<script>
export default {
    props:{
        Content:String,
        BgColor: String,
        Icon:String,
        Cls: String
    }
}
</script>

<style>

.z-50{
    z-index:50;
}
.top-10{
    top:10px
}
.l50{
    transform: translateX(-50%)
}
</style>