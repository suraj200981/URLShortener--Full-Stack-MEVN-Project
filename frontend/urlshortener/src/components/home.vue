<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to URLMini
        </h1>

        <p class="subheading font-weight-regular">
          This project was created by <a  target="_blank" href="https://github.com/suraj200981">Suraj Sharma</a>
          <br>
          The aim of this project is to minify long URLS and make them shorter.
        </p>
        <br>
        <v-card
    class="mx-auto"
    max-width="700"
    height="200"
  >
    <v-card-text>
      <h1 style="color:black">Paste the URL to be shortened</h1>
      <br>
      <v-row>
        <v-col md="9">
      <v-text-field
            placeholder="Enter the link here"
            solo
          ></v-text-field>
        
</v-col>
<v-col>
  <v-btn
  color="accent"
  depressed
  elevation="2"
  large
  raised
  text
  tile
>Shorten URL
</v-btn>
  </v-col>  
</v-row>
    </v-card-text>
    
  </v-card>
      </v-col>
      
        <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Technologies Used
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'homePage',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>

<style scoped lang="scss">
 .v-btn:not(.v-btn--round).v-size--large {
    background-color: #1976D2;
}

.v-application .accent--text {
    color: #ffffff !important;
    caret-color: #82b1ff !important;
}
.v-btn:not(.v-btn--round).v-size--large {
    height:50px;
    min-width: 78px;
    padding: 0 19.5555555556px;
}
  </style>
