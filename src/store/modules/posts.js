import axios from 'axios'

export default {
  namespaced: true,
  state: {
    posts: [],
    loading: false,
    error: ''
  },
  getters: {
  	
  },
  mutations: {
    setPosts(state, payload){
      state.posts = payload
    },
    setLoading(state, payload){
      state.loading = payload
    },
    setError(state, payload){
      state.error = payload
    }   
  },
  actions: {
    getPosts(store, userId) {
      store.commit('setLoading', true)
      store.commit('setError', '')

      let url = 'https://jsonplaceholder.typicode.com/posts'
      let params = {
        userId
      }
      axios.get(url, {params})
        .then( resp => {
          //console.log(resp.data);

          store.commit('setPosts', resp.data)
          store.commit('setLoading', false)
        })
        .catch(e =>  {
          console.log(e.message);
          store.commit('setLoading', false)
          store.commit('setError', e.message)
        })


    }
    // getPosts() {
    //   console.log('sdsd')
    // }
    
  }
}