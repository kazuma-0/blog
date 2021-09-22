import { createStore } from 'vuex'
import supabase from '../plugins/subabase'
export default createStore({
  state: {
    loggedIn: false
  },
  mutations: {
    setLoginState(state){
      supabase.auth.session() != null ? (state.loggedIn = true):(state.loggedIn = false)
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    // gets the logged in state of the user
    getLoggedInState(){
      return supabase.auth.session != null
    },
    GetLoggedInState(state){
      return state.loggedIn
    }
  }
})
