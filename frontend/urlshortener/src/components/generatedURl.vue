<template>
 <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold" style="text-align: left; padding-left: 170px;">
            Your shortened URL
        </h1>

        <p class="subheading font-weight-regular" style="text-align: left; padding-left: 170px;">
Copy the shortened link and share it in messages, texts, posts, websites and other locations.          </p>
        <v-card
    class="mx-auto"
    max-width="800"
    height="300">
   <v-form @submit.prevent="requestGet()">


    <v-card-text>
      <br>
      <v-row class="mx-auto">
        <v-col md="9" >
      <v-text-field
      disabled
            solo
            v-model="generatedURl"
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
>Copy url
</v-btn>
  </v-col>  
  
</v-row>

<p style="text-align:left; padding-left:20px">Long URL: <a href="url">{{orignalURL}}</a></p>
<p style="text-align:left; padding-left:20px">Track the <button style="text-decoration: underline; color:blue;" @click="requestGet()">total of clicks</button> in real-time from your shortened URL.<br>
Create other <router-link to="/">shortened URL.</router-link></p>
<p v-if="!isAuthenticated" style="text-align:left; padding-left:20px">
To manage your shortended urls, please <router-link to="/login">login</router-link></p>

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
    name: 'generatedURl',

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
      orignalURL: '',
      generatedURl: '',
      isAuthenticated: false,
    }),
    methods: {
  requestGet() {
    //substring generatedURl
    var url = this.generatedURl.substring(15);
    //make get request
    axios.get('http://localhost:8081/data/'+ url )
    .then(response => {
      console.log(response.data,"data lmao");
      let data = {orignialURL : response.data.old_url, shortURL : response.data.short_url, createdBy: response.data.createdBy, clicks: response.data.clicks, ip: response.data.ip};
      //clear local storage
      localStorage.clear();
        localStorage.setItem('generatedURl', data.shortURL);
       this.$router.push({
            name: "urlcounter",
          });


    }).catch(error => {
      console.log(error);
    });

  },
                 
    },
    mounted() {
    let data = this.$route.params.data;
    console.log("data is", data);
    this.orignalURL = data.orignialURL;
    this.generatedURl = data.shortURL;
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
