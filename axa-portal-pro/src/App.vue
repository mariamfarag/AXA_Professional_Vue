<template>
  <v-app>
    <!-- v-if="modalShow" -->
    <!-- <v-progress-linear
      
      indeterminate
      color="primary"
      value="15"
    ></v-progress-linear> -->

    <!-- <v-main v-if="isLoggining && this.$route.meta.notRequiresAuth != true"> -->
    <v-card class="overflow-hidden">
      <v-app-bar class="app-bar-header-main" elevate-on-scroll scroll-target="#scrolling-techniques-7" style="padding-top:8px;"
        v-if="!$vuetify.breakpoint.xsOnly">
        
        <v-btn text :to="HomePageIcon.to" style="padding:2%;margin-left: 14%;">
          <v-toolbar-title class="app-bar-header-logo">
            <img class="header-logo" src="@/assets/images/home/AXA LOGO TRANPARENT.png" />
          </v-toolbar-title>
        </v-btn>
        <!-- home -->
        <template>
          <v-btn class="ml-8" text :to="Home.to">
            <span class="font-only-color"> Home </span>
          </v-btn>
        </template>

        <!-- service -->
        <template>
          <v-btn class="ml-8" text :to="service.to">
            <span class="font-only-color"> Services </span>
          </v-btn>
        </template>

        <!-- solutions -->
        <template>
          <v-btn class="ml-8" text :to="solutions.to">
            <span class="font-only-color"> Solutions </span>
          </v-btn>
        </template>

        <!-- Start up form -->
        <template>
          <v-btn class="ml-8" text :to="startupform.to">
            <span class="font-only-color"> Start Up Form </span>
          </v-btn>
        </template>

        <!-- Job Seeker -->
        <!-- <template v-if="userInfo.userTypeId != 205"> -->
        <template>
          <v-btn class="ml-8" text :to="JobsSeeker.to">
            <span class="font-only-color"> Job Seeker </span>
          </v-btn>
        </template>

        <!-- More     v-if="userInfo.userTypeId != 205" -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ml-8" text v-bind="attrs" v-on="on">
              <span class="font-only-color">More</span>
              <i class="fas fa-caret-down ml-1"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in MoreList" :key="index">
              <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
              <v-btn :to="item.to" text class="">
                <p class="mt-5">
                  <span class="dropdown-item-list ml-4">{{ item.title }}</span>
                </p>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Icon -->
        <template>
          <v-btn class="ml-8" text>
            <span>
              <img class="header-logo" src="@/assets/images/home/MWBE logo@2x.png" />
            </span>
          </v-btn>
        </template>

      </v-app-bar>
      <!-- ================== Nav ====-->

      <v-app-bar elevate-on-scroll scroll-target="#scrolling-techniques-7" color="white" v-else>
        <v-app-bar-nav-icon @click="rspnsvMenu = !rspnsvMenu" class="font-only-color"></v-app-bar-nav-icon>
        <div v-if="rspnsvMenu" class="margin-top-only-nav">
          <v-list>
            <!-- Home -->
            <v-list-item class="margin-bottom-4">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>
                <v-btn text class="dropdown-item menu-links">
                  <router-link class="router-link-deco" :to="Home.to">
                    <span class="ml-2">Home</span>
                  </router-link>
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <!-- service -->
            <v-list-item class="margin-bottom-4">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>
                <v-btn text class="dropdown-item menu-links">
                  <router-link class="router-link-deco" :to="service.to">
                    <span class="ml-2">Services</span>
                  </router-link>
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <!-- Solutions -->
            <v-list-item class="margin-bottom-4">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>
                <v-btn text class="dropdown-item menu-links">
                  <router-link class="router-link-deco" :to="solutions.to">
                    <span class="ml-2">Solutions</span>
                  </router-link>
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <!-- Clients -->
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>
                <v-btn text class="dropdown-item menu-links">
                  <router-link class="router-link-deco" :to="startupform.to">
                    <span class="ml-2">Start Up Form</span>
                  </router-link>
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <!-- Job Seeker -->
            <v-list-item class="margin-bottom-4">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>
                <v-btn text class="dropdown-item menu-links">
                  <router-link class="router-link-deco" :to="JobsSeeker.to">
                    <span class="ml-2">Job Seeker</span>
                  </router-link>
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <!-- More -->
            <v-list-group :value="true" prepend-icon="mdi-account-circle">
              <template v-slot:activator>
                <v-list-item-title class="ml-9">More</v-list-item-title>
              </template>

              <v-list-item v-for="(item, index) in MoreList" :key="index">
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-btn text class="dropdown-item menu-links">
                    <router-link style="" class="router-link-deco" :to="item.to">
                      <span class="ore-list-nav">{{ item.title }}</span>
                    </router-link>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>

            </v-list-group>

          </v-list>
        </div>
      </v-app-bar>


      <v-sheet id="scrolling-techniques-7" class="" style="">
        <div class="head-sheet">
          <router-view />
        </div>
      </v-sheet>

      <!-- ================= Footer  -->
      <footer class="footer-tag">
        <v-row style="margin-bottom: -3%;">

          <!-- ==========  first Colum -->
          <v-col md="6" cols="12">

            <v-col class="mb-5">
              <img class="contactus-img" src="@/assets/images/home/Group 52153.png" />
            </v-col>
            <v-col class="second-row-first-col-footer">
              <span> Over The Phone Or Online</span>
            </v-col>


            <v-col class="fontonly-color-footer">
              Info@Axapro.com
            </v-col>


            <v-col class="fontonly-color-footer">
              236-457-7899
            </v-col>


            <v-col class="fontonly-color-footer">
              43344 N US 27 <br />
              Davenport, FL 33837
            </v-col>


            <v-col class="fontonly-color-footer">
              Already a client?
              <a href="#" class="login-footer">Login</a> to the client portal
            </v-col>

            <hr class="hr-style" />
            <v-col md="7">
              <p class="last-p-footer"> Want To Join Our Network Of Talented
                Technicians?</p>
              <v-btn class="last-btn-footer">
                Join The Team
              </v-btn>
            </v-col>
          </v-col>
          <!-- ========== Secondary Colum -->
          <v-col md="6" cols="12" style="    margin-top: 2%;">

            <v-col class="first-row-colum-footer">
              <p>We can deliver your peace of mind - get started by contacting us here:</p>
            </v-col>
            <v-row style="text-align: center;">
              <v-col md="4" cols="12">
                <p class="mb-1 fontonly-color-footer">Enter Your Name </p>
                <input class="mb-5 input-background-color-footer" placeholder="    Name" />

                <p class="mb-1 fontonly-color-footer">Enter Your Email </p>
                <input class="mb-5 input-background-color-footer" placeholder="    Email" />

                <p class="mb-1 fontonly-color-footer">Enter Your Phone </p>
                <input class="mb-5 input-background-color-footer" placeholder="    Phone Number" />
              </v-col>

              <v-col md="8" cols="12">
                <p class="mb-1 fontonly-color-foote">Enter Your Message</p>
                <textarea class="textarea-styling" placeholder="    add Your Message"></textarea>
                <v-col>
                  <v-btn class="textaresa-btn">
                    Submit
                  </v-btn>
                </v-col>
              </v-col>
            </v-row>

            <v-col>
              <v-row>
                <v-col md="5">
                  <span>
                    <v-icon class="bg-white">fa-brands fa-square-facebook</v-icon>
                  </span>
                  <span>
                    <v-icon class="bg-white">fa-brands fa-twitter</v-icon>
                  </span>
                  <span>
                    <v-icon class="bg-white">fa-brands fa-instagram</v-icon>
                  </span>
                  <span>
                    <v-icon class="bg-white">fa-brands fa-linkedin</v-icon>
                  </span>
                </v-col>
              </v-row>
            </v-col>

          </v-col>
        </v-row>
        <!-- ====================== -->

      </footer>
    </v-card>
    <!-- </v-main> -->
    <!-- <v-main v-if="!isLoggining || this.$route.meta.notRequiresAuth == true">
      <router-view />
    </v-main> -->
    <!-- <Snackbar /> -->
    <!-- <Loader v-if="loading" /> -->
  </v-app>
</template>

<script>
// import Header from "@/components/Header.vue";
// import Loader from "./components/Loader.vue";
// import Snackbar from "./components/SuccessMsg.vue";
//import store from "@/store";
//import { mapGetters } from "vuex";
// import firebaseHelper from "./plugins/firebase";

export default {
  name: "App",

  data: () => ({
    rspnsvMenu: false,
    // admins: [
    //   ["Management", "mdi-account-multiple-outline"],
    //   ["Settings", "mdi-cog-outline"],
    // ],
    // cruds: [
    //   ["Create", "mdi-plus-outline"],
    //   ["Read", "mdi-file-outline"],
    //   ["Update", "mdi-update"],
    //   ["Delete", "mdi-delete"],
    // ],
    HomePageIcon: {
      title: "HomePageIcon",
      to: "/home page",
    },  
    Home: {
      title: "Home",
      to: "/home",
    },
    JobsSeeker: {
      title: "Job Seeker",
      to: "/jobseeker",
    },
    MoreList: [
      {
        title: "Portal",
        to: "/portal",
      },
      {
        title: "Projects",
        to: "/projects",
      },
    ],

    service: {
      title: "Services",
      to: "/services",
    },
    solutions: {
      title: "Solutions",
      to: "/solutions",
    },
    startupform: {
      title: "Start Up Form",
      to: "/startupform",
    },



    // isLoggining: store.getters["AuthModule/isLoggedIn"],

    // companyList: [
    //   {
    //     title: "Clients",
    //     icon: "far fa-list-alt",
    //     to: "/clients/list",
    //   },

    //   {
    //     title: "Accounts",
    //     icon: "far fa-list-alt",
    //     to: "/accounts/list",
    //   },

    //   {
    //     title: "Companies",
    //     icon: "far fa-list-alt",
    //     to: "/companies/list",
    //   },
    //   {
    //     title: " Locations",
    //     icon: "far fa-list-alt",
    //     to: "/locations/list",
    //   },
    // ],


  }),
  components: {
    // Loader,
    // Snackbar,
    //// Header,
  },
  computed: {
    //   modalShow() {
    //     return this.$store.getters.getPreloader;
    //   },
    //   loading() {
    //     return this.$store.getters.getSpinner;
    //   },

    //   ...mapGetters({
    //     userInfo: "AuthModule/userData",
    //   }),
    // },
    // mounted() {
    //   console.log(firebaseHelper.firebaseInit.methods.firebaseInit());
  },
  methods: {
    // logout() {
    //   this.$store.dispatch("AuthModule/logout");
    // },
  },
};
</script>

