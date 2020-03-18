<template>
  <div class="about">
    <div class="about-content">
      <div class="about-text">
        <h1>About</h1>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </div>
      <div class="about-flex">
        <div class="what">
          <h2>What</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div class="who">
          <h2>Who</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div class="why">
          <h2>Why</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About"
};
</script>

<style scoped>
.about {
  margin-top: 100px;
}
.about-text {
  width: 60%;
  margin: auto;
  text-align: start;
}
.about-text p {
  text-align: start;
}
.about-text h1 {
  text-align: center;
}
.what {
  display: flex;
  flex-direction: column;
}
.who {
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 20px;
}
.why {
  display: flex;
  flex-direction: column;
}
.about-flex {
  display: flex;
  margin: auto;
  width: 80%;
  margin-top: 120px;
}

@media only screen and (min-width: 1344px) {
  .about {
    height: 80vh;
  }
}

@media only screen and (max-width: 1343px) {
  .about {
    margin-bottom: 100px;
  }
}
@media only screen and (max-width: 1200px) {
  .about-flex {
    width: 95%;
  }
  .about-text {
    width: 80%;
    margin: auto;
    text-align: start;
  }
}
@media only screen and (max-width: 700px) {
  .about-flex {
    flex-direction: column;
    width: 80%;
    margin-top: 60px;
  }
  .who {
    margin: 20px 0 20px 0;
  }
}
</style>
