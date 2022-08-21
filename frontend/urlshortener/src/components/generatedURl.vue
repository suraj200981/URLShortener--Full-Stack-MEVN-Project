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
    height="250">
<router-link to="/">back</router-link>
   <v-form>
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
<p style="text-align:left; padding-left:20px">Track the <a href="">total of clicks</a> in real-time from your shortened URL.<br>
Create other <router-link to="/">shortened URL.</router-link></p>
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
    }),
    methods: {
      onSubmit(e) {
        e.preventDefault();
                let data= { url: this.url };
                 console.log(data);
                axios.post('http://localhost:8081/api/shortener', data)
                .then(response => {
                  console.log(response.data);
                }).catch(error => {
                  console.log(error);
                });
                },
    },
    mounted() {
    let data = this.$route.params.data;
    console.log("data is", data);
    this.orignalURL = data.oldUrl;
    this.generatedURl = data.newUrl;
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
