<template>
  <div class="container mb-5">
    <navbar></navbar>
    <div style="max-width:90%;width:500px;margin:auto">
      <b v-if="loading">Loading</b>
      <post :detail="post" v-for="post in posts.sort((a,b) => b.score - a.score)" :key="post"></post>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import post from "./components/post.vue";
import API from "./api/index.js";
export default {
  name: "App",
  data() {
    return {
      posts: [],
      loading: true
    };
  },
  components: {
    navbar,
    post,
  },
  mounted() {
    API.getTopStories().then((response) => {
      response.data.forEach((id, i) => {
        if (i > 30) {
          return;
        }
        API.fetchItem(id).then((resp) => {
          this.loading = !this.loading;
          this.posts.push(resp.data);
        });
      });
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.card:first-child {
  background: #ffe6c7;
}
a {
  color:#000!important
}
.card:nth-child(even) {
  background: #f7f7f7;
}
</style>
