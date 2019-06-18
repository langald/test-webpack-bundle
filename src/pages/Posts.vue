<template>
  <div class="container">    
   <h1 class="page-title"><router-link :to="{name: 'home'}">Users list</router-link> / {{ $route.params.userName }} Posts</h1>
   <p v-if="loading">Loading...</p>
   <p v-if="error" class="alert alert-danger">{{ error }}</p>
   <ul v-if="!loading && !error" class="table">
     <li class="table-row">
       <div class="table-cell table-cell--head">Title</div>
       <div class="table-cell table-cell--head table-cell--body">Description</div>
     </li>
     <li class="table-row" v-for="post in posts" :key="post.id">
       <div class="table-cell">{{ post.title }}</div>
       <div class="table-cell table-cell--body">{{ post.body }}</div>
     </li>
   </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Home',
    computed: {
      ...mapState('posts', ['posts', 'loading', 'error'])
    },
    mounted() {
      this.getPosts(this.$route.query.userId);
    },
    methods: {
      ...mapActions('posts', ['getPosts'])
    }
  }

</script>
