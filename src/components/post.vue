<template>
  <div class="card mt-1">
    <div class="spinner-border p-2 m-2" role="status" v-if="loading">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="card-body text-start" v-if="!loading">
      <h5 class="card-title">
        <a :href="detail.url" target="_blank">{{ detail.title }}</a>
      </h5>
      <p class="card-text text-end">
        Score: <b>{{ detail.score }}</b
        ><br />
        by: <i>{{ detail.by }}</i
        ><br />
        <small class="text-muted">
        {{ getTime(detail.time * 1000) }}
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import * as moment from "moment/moment";
export default {
  name: "post",
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    getTime(x) {
      return moment(x).fromNow();
    },
  },
  props: ["detail"],
  mounted(){
    // fake loading random
    const timer = setTimeout(() => this.loading = !this.loading && clearTimeout(timer),Math.random()*1000)
  }
};
</script>

<style>
</style>