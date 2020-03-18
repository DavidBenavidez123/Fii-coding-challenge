<template>
  <div class="header">
    <div class="header-content">
      <div class="header-links">
        <router-link to="/" exact :class="{'active': this.$route.path === '/'}">
          <h2>Home</h2>
        </router-link>
        <router-link :class="{'active': this.$route.path === '/About'}" to="/About">
          <h2>About</h2>
        </router-link>
      </div>
      <div class="header-login-register">
        <router-link :class="{'active': this.$route.path === '/Login'}" to="/Login">
          <h2 class="login">Login</h2>
        </router-link>
        <router-link class="login" to="/Register">
          <h2 class="register">Register</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  position: fixed;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  height: 80px;
  width: 100%;
  z-index: 10;
  background-color: white;
}
.header-content {
  display: flex;
  margin: auto;
  margin-top: 20px;
  width: 92%;
  justify-content: space-between;
}
.header-links h2 {
  margin-left: 10px;
  margin-right: 30px;
  font-size: 17px;
  color: black;
  line-height: 32px;
}
.active {
  text-decoration: underline;
}
.header-links {
  display: flex;
}
.header-login-register {
  display: flex;
}
.login {
  color: #000000;
  font-size: 17px;
  line-height: 32px;
}
.register {
  height: 36px;
  width: 100px;
  line-height: 32px;
  border-radius: 20px;
  border: 2px solid #fe4066;
  box-sizing: border-box;
  color: white;
  text-align: center;
  margin-left: 20px;
  display: block;
  background-color: #fe4066;
  font-size: 17px;
}
@media only screen and (max-width: 320px) {
  .header-links h2 {
    margin-left: 6px;
    margin-right: 15px;
  }
}
</style>
