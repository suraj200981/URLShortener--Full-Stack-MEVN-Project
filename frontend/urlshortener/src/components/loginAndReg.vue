<template>

<v-row class="text-center">
      <v-col cols="12">
              <h1 style="font-size:40px">Login or sign up to explore more premium features</h1>
              <br>
    <v-card max-width="500" class="mx-auto"
>
        <v-tabs
            v-model="tab"
            background-color=#E65100
            centered
            dark
            icons-and-text
        >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#login">
                login
                <v-icon>mdi-door</v-icon>
            </v-tab>

            <v-tab href="#reg">
                Sign up
                <v-icon>mdi-pencil</v-icon>
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item :key="1" value="login">
                <v-card flat>
                  <v-form @submit="login" method="POST">

                    <v-card-text> <v-text-field
            outlined
            label="user name"
            prepend-icon="mdi-account-outline"
            v-model="username"
          ></v-text-field>
          <v-text-field
            outlined
            label="email address"
            prepend-icon="mdi-email"
            v-model="email"
          ></v-text-field>
           <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="primary"
      @click="loader = 'loading', login()"
    >
      login
    </v-btn>
          </v-card-text>
        </v-form>
                </v-card>
            </v-tab-item>
            <v-tab-item :key="2" value="reg">
                <v-card flat>
                  <v-form @submit="signUp()" method="POST">
                  
 <v-card-text> <v-text-field
            outlined
            label="user name"
            prepend-icon="mdi-account-outline"
            v-model="usernameSignup"
          ></v-text-field>
          <v-text-field
            outlined
            label="email address"
            prepend-icon="mdi-email"
            v-model="emailSignup"
          ></v-text-field>
           <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="primary"
      @click="loader = 'loading', signUp()"
    >
      sign up
    </v-btn>
          </v-card-text>             
        </v-form> 
   </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
    </v-col>
    </v-row>
</template>
<script>
import axios from "axios";

  export default {
    name: 'loginReg',

    data: () => ({
        tab: "login",
        loader: null,
        loading: false,
        username: "",
        email: "",
        usernameSignup: "",
        emailSignup: "",
    }),

    methods:{
      login(){
        const data = {
          username: this.username,
          email: this.email,
        };
        axios.post('http://localhost:8081/api/login', data)
          .then((res) => {
            console.log("Logging result: ",res);
          })
          .catch((err) => {
            console.log("What went wrong? : ",err);
          });
      },
        signUp(){
          const data = {
            username: this.usernameSignup,
            email: this.emailSignup,
          };

          console.log(data);
        }
    },
     watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 1000)

        this.loader = null
      },
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



//for buttons

 .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
