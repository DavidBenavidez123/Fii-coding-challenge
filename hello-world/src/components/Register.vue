<template>
  <div class="register">
    <div class="register-content">
      <h1>Register</h1>
      <sui-form>
        <sui-form-field required>
          <label>Email</label>
          <input />
        </sui-form-field>
      </sui-form>
      <sui-form>
        <sui-form-field required>
          <label>Username</label>
          <input />
        </sui-form-field>
      </sui-form>
      <sui-form>
        <sui-form-field required>
          <label>Password</label>
          <input />
        </sui-form-field>
      </sui-form>
      <p class="register-button">Register</p>
      <div class="login">
        <p>Have an account?</p>
        <router-link to="/Login">
          <p>Login</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register"
};
</script>

<style scoped>
.register {
  margin-top: 120px;
  height: 80vh;
  margin-bottom: 30px;
}
.register-content {
  width: 500px;
  height: 650px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  padding: 20px;
}
label {
  text-align: start;
}
.ui.form {
  margin-top: 30px;
}

.register-button {
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
  margin: auto;
  margin-top: 100px;
  cursor: pointer;
}
.login {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}


@media only screen and (max-width: 600px) {
  .register-content {
    width: 300px;
    height: 600px;
  }
}

@media only screen and (max-width: 400px) {
  .register {
    margin-bottom: 100px;
  }
}

@media only screen and (max-width: 320px) {
  .register {
    margin-bottom: 190px;
  }
}
</style>
