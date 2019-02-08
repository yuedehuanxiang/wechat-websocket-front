<template>
  <div class="mine">
    <Header title="我" />
    <div class="container">
      <info-cell :userInfo="user"></info-cell>
      <Button class="btn_wrapper" @click="loginOut">退出登录</Button>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import infoCell from "../components/infoCell";
import Button from "../components/Button";
export default {
  name: "me",
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    loginOut() {
      localStorage.removeItem("wxToken");
      this.$router.push("/login");
    }
  },
  components: {
    Header,
    infoCell,
    Button
  }
};
</script>
<style scoped>
.mine {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
  box-sizing: border-box;
  padding: 16px 0;
  background-color: #f1f1f1;
}

.btn_wrapper {
  box-sizing: border-box;
  padding: 20px;
}
</style>
