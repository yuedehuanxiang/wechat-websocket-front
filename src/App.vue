<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
export default {
  name: "app",
  created() {
    if (localStorage.wxToken) {
      const decode = jwt_decode(localStorage.wxToken);
      this.$store.dispatch("setUser", decode);
    }
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
