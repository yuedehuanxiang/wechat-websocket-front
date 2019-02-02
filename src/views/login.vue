<template>
  <div class="login">
    <div class="title">用户登录</div>
    <div class="content">
      <!-- 表单信息 -->
    </div>
    <div class="footer_wrap">
      <button class="register" @click="$router.push('/register')">
        注册账户
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {}
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 16px;
}
.title {
  margin-top: 80px;
  font-size: 22px;
  text-align: center;
}
.footer_wrap {
  position: absolute;
  left: 0;
  bottom: 16px;
  text-align: center;
  width: 100%;
  color: #888;
}
</style>
