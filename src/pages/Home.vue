<template>
  <div class="container">    
   <h1 class="page-title">Users list</h1>
   <p v-if="loading">Loading...</p>
   <p v-if="error" class="alert alert-danger">{{ error }}</p>
   <ul v-if="!loading && !error" class="table">
     <li class="table-row" v-for="user in users" :key="user.id">
       <div class="table-cell">{{ user.name }}</div>
       <div class="table-cell">
         <ul>
           <li><span class="table-legend">E-mail: </span>{{ user.email }}</li>
           <li><span class="table-legend">Phone: </span>{{ user.phone }}</li>
           <li><span class="table-legend">www: </span>{{ user.website }}</li>
         </ul>
       </div>
       <div class="table-cell"><router-link :to="{name: 'posts', query: {userId: user.id}, params: { userName: user.name }}">Show posts</router-link></div>
     </li>
   </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Home',
    computed: {
      ...mapState('users', ['users', 'loading', 'error'])
    },
    mounted() {
      this.getUsers();
    },
    methods: {
      ...mapActions('users', ['getUsers'])
    }
  }

</script>
