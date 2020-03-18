<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-about">
        <h2>About</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div class="footer-categories-quick">
        <div class="footer-categories">
          <h2>Categories</h2>
          <p>C</p>
          <p>UI Design</p>
          <p>PHP</p>
          <p>PHP</p>
          <p>Android</p>
        </div>
        <div class="footer-quick">
          <h2>Quick Links</h2>
          <p>Home</p>
          <p>About</p>
          <p>Login</p>
          <p>Register</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background-color: #222222;
}
.footer-content {
  margin-top: 20px;
  display: flex;
  width: 70%;
  margin: auto;
  padding-bottom: 30px;
}

.footer h2 {
  color: #e8e8e9;
  font-size: 20px;
  margin-top: 40px;
}
p {
  color: #737373;
}
.footer-about {
  text-align: left;
  width: 100%;
}

.footer-about p {
  line-height: 25px;
}

.footer-categories {
  display: flex;
  flex-direction: column;
}
.footer-categories p {
  margin: 0;
}
.footer-quick {
  display: flex;
  flex-direction: column;
}
.footer-quick p {
  margin: 0;
}
.footer-categories-quick {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
@media only screen and (max-width: 700px) {
  .footer-content {
    flex-direction: column;
    width: 90%;
  }
}
@media only screen and (max-width: 900px) {
  .footer-content {
    width: 90%;
  }
}
</style>
