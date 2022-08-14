<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>
       URLSMini v1
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login/Signup
        </span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <homePage/>
    </v-main>
  </v-app>
</template>

<script>
import homePage from './components/home';

export default {
  name: 'App',

  components: {
    homePage,
  },

  data: () => ({
    //
  }),
};
</script>
