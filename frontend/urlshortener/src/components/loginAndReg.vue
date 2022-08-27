<template>

<v-row class="text-center">
      <v-col cols="12">
              <h1 style="font-size:40px">Login or sign up for more premium features</h1>
              <br>
    <v-card max-width="300" class="mx-auto"
>
        <v-tabs
            v-model="tab"
            background-color=#1976D2
            centered
            dark
            icons-and-text
        >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#login">
                Subscribe
                <v-icon>mdi-phone</v-icon>
            </v-tab>

            <v-tab href="#reg">
                Contact
                <v-icon>mdi-heart</v-icon>
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item :key="1" value="login">
                <v-card flat>
                    <v-card-text>login</v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item :key="2" value="reg">
                <v-card flat>
                    <v-card-text>reg</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
    </v-col>
    </v-row>
</template>
<script>
// import axios from "axios";

  export default {
    name: 'loginReg',

    data: () => ({
          tab: "subscribe"

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
