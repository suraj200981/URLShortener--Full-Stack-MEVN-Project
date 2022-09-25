<template>
 <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      <h1 style="font-size:40px">How many clicks has your url recieved:</h1>
        <h1 style="font-size:50px; color:green;">{{clicks}}</h1>
        <p style="font-size:20px">This is a live count of clicks your shortened url will recieve</p>
        <v-card-text><b>Shortened url:</b> <a target="_blank" :href='generatedURl'>{{generatedURl}}</a></v-card-text>
        <v-card-text><b>Long url: </b><a target="_blank" :href='orignalURL'>{{orignalURL}}</a></v-card-text>
        <br>
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title class="white--text orange darken-4">
      Geographic metrics
      <v-spacer></v-spacer>

      
    </v-card-title>

    <v-card-text class="pt-4">
      You can see who has clicked on your shortended urls and from where they have clicked from.
    </v-card-text>

    <v-divider></v-divider>

    <v-virtual-scroll
     :items="items"
      :item-height="50"
      height="300"
    >
      <template v-slot:default="{item}">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar
              :color="item.color"
              size="56"
              class="white--text"
            >
              <!-- {{ item.initials }} -->
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              depressed
              small
            >
              View location

              <v-icon
                color="orange darken-4"
                right
              >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";

  export default {
    name: 'urlCounter',

    data: () => ({
      orignalURL : '',
      generatedURl: '',
      createdBy: '',
      clicks:'0',
      items: [],
    }),
    created() {
    // generated url from local storage
      this.generatedURl = localStorage.getItem("generatedURl")
      //substring generatedURl to only include the generted code
    var url = this.generatedURl.substring(15);



    //make get request every 5 seconds to end point to get all url information
    setInterval(() => {
      //only refresh if the brower url is http://localhost:8080/urlcounter
      if(window.location.href== "http://localhost:8080/urlcounter"){
        axios.get('http://localhost:8081/data/'+ url )
      .then(response => {
        console.log(response.data.ip);
        let data = {oldUrl : response.data.old_url, newUrl : response.data.short_url, createdBy: response.data.createdBy, clicks: response.data.clicks, ip: response.data.ip};
        //clear shorted url from local storageon each request to ensure it is up to date
        localStorage.clear("generatedURl");

        //set local storage
        localStorage.setItem("generatedURl", "http://"+data.newUrl);
        //set data to variables
        this.orignalURL = data.oldUrl;
        this.generatedURl = "http://"+data.newUrl;
        this.createdBy = data.createdBy;
        // 
        localStorage.setItem("items", JSON.stringify(data.ip));
        localStorage.setItem("clicks", data.clicks);
        localStorage.setItem("originalURL", data.oldUrl);

        //check if this.clicks is updated compared to local storage
        if(this.clicks != localStorage.getItem("clicks")){
          this.clicks = localStorage.getItem("clicks");
           //loop through data.ip and push to items array
            for(var i = 0; i < data.ip.length; i++){
              this.items.push(data.ip[i]);
              this.items = JSON.parse(localStorage.getItem("items"));
        }
        }
      })
      .catch(error => {
        console.log(error);
      });
      }
    }, 1000);
    },
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
