import { createStore } from 'vuex'

export default createStore({
  state:{
      toRouter:'/',    
  },
  getters: {
  },
  mutations: {
    setToRouter(state,Router){
      state.toRouter=Router;
    }
  },
  actions: {
  },
  modules: {
  }
})
