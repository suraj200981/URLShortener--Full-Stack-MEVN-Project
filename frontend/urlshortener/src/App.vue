<template>
  <div id="app">
     <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
     <v-btn
        to="/"
        text
      >
      <v-toolbar-title>
       URLShortener v1
      </v-toolbar-title>
    </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        to="/login"
        text
      >
        <span class="mr-2">Login/Signup
        </span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
    <router-view/>
    </v-main>
  </v-app>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
