<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body,
ul,
li,
p,
h1,
h2,
h3,
h4,
h5,
h6,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a:link,
a:visited,
a:active {
  text-decoration: none;
}
body {
  display: grid;
  background: rgb(4, 15, 60);
}
</style>
