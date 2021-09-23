<template>
  <router-view/>
</template>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
body{
    background-color: rgb(32, 29, 36) !important;
    color: #FBF7F4;
}
.color-white{
    color: #FBF7F4;
}
.color-purple{
    background-color:#352D39 !important;
}

.pe{
    cursor: pointer !important;
}
</style>
