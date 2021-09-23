import { createStore } from 'vuex'
import subabase from '../plugins/subabase'
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
    getLoggedInState(state){
      supabase.auth.session() != null ? (state.loggedIn = true):(state.loggedIn = false)
      return subabase.auth.session() != null
      // return supabase.auth.session == null
    },
    GetLoggedInState(state){
      return state.loggedIn
    }
  }
})
