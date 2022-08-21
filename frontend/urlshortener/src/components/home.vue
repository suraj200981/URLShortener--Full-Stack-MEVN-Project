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
    max-width="800"
    height="220"
  >

  <router-link to="/mini">mini</router-link>
   <v-form @submit="onSubmit" method="POST">
    <v-card-text>
      <h1 style="color:black; padding-bottom: 8px;">Paste the URL to be shortened</h1>
      <br>
      <v-row>
        <v-col md="9">
      <v-text-field
            placeholder="Enter the link here"
            solo
            v-model="url"
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
  type="submit"
>Shorten URL
</v-btn>
  </v-col>  
  
</v-row>

<p><b>URLMini.io</b> is a free tool to shorten a URL or reduce a link<br>
Use my URL Shortener to create a shortened link making it easy to remember</p>
<v-row>
</v-row>

    </v-card-text>
    </v-form>
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
        <p style="padding-top:20px">-----MEVN Stack-----</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

  export default {
    name: 'homePage',

    data: () => ({
      ecosystem: [
        {
          text: 'MongoDB',
          href: 'https://github.com/vuetifyjs/MongoDB',
        },
        {
          text: 'Express',
          href: 'https://github.com/vuetifyjs/vuetify/Express',
        },
        {
          text: 'VueJS',
          href: 'https://github.com/vuetifyjs/awesome-vuetify/VueJS',
        },
        {
          text: 'NodeJS',
          href: 'https://github.com/vuetifyjs/awesome-vuetify/NodeJS',
        }
      ],
      url: '',
    }),
    methods: {
      onSubmit(e) {
        e.preventDefault();
                let data= { url: this.url };
                axios.post('http://localhost:8081/api/shortener', data)
                .then(response => {
                  console.log(response.data);
                  //redirect 
                  this.$router.push({ name: 'mini', params: { url: response.data } });
                }).catch(error => {
                  if(error.code == "ERR_BAD_REQUEST"){
                    console.log("error found: ",error.message);
                  }
                });
                }
    }
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
