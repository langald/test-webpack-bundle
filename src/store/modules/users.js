import axios from 'axios'

export default {
  namespaced: true,
  state: {
    users: [],
    loading: false,
    error: ''
  },
  getters: {
  	
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload
    },
    setLoading(state, payload){
      state.loading = payload
    },
    setError(state, payload){
      state.error = payload
    }   
  },
  actions: {
    getUsers(store) {
      store.commit('setLoading', true)
      store.commit('setError', '')

      let url = 'https://jsonplaceholder.typicode.com/users'

      axios.get(url)
        .then( resp => {
          //console.log(resp.data);

          store.commit('setUsers', resp.data)
          store.commit('setLoading', false)
        })
        .catch(e =>  {
          console.log(e.message);
          store.commit('setLoading', false)
          store.commit('setError', e.message)
        })
    }   
  }
}