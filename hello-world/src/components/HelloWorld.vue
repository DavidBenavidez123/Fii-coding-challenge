<template lang="html">
  <div>
    <sui-card>
      <a href="#"><sui-image src="static/images/avatar/large/steve.jpg"/></a>
      <sui-card-content>
        <sui-card-header><a>Steve Jobes</a></sui-card-header>
        <sui-card-meta>
          <a>Last Seen 2 days ago</a>
        </sui-card-meta>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
