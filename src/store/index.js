import { createStore } from 'vuex'
import supabase from '../plugins/subabase'
export default createStore({
  // state: {
  //   loggedIn: false
  // },
  mutations: {
    setLoginState(){
      // let session = subabase.auth.session();
      
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
    }
  }
})
