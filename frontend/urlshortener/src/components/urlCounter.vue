<template>
 <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      <h1 style="font-size:40px">How many clicks has your url recieved:</h1>
        <h1 style="font-size:50px; color:grey;">0</h1>
        <p style="font-size:20px">This is a live count of clicks your shortened url will recieve</p>
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
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar
              :color="item.color"
              size="56"
              class="white--text"
            >
              {{ item.initials }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.fullName }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              depressed
              small
            >
              View User

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
