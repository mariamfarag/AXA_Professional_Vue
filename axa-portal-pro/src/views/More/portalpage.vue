<template>
  <div>
    <!-- ==== section 1  ======= -->
    <div
      style="
        height: 500px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 1%;
      "
      :style="{
        'background-image': `url(${require(`@/assets/images/portal/Untitleddesign.png`)})`,
      }"
    >
      <h2 style="color: white; margin-left: 14%; margin-top: 7%">
        CLIENTS PORTAL
      </h2>
    </div>
    <!-- =============== section 2===== -->
    <div style="background-color: #00000008; text-align: center">
      <v-row style="padding-top: 2%">
        <v-col
          md="6"
          cols="12"
          style="padding-left: 8%; font-weight: 380;color: #5e7a8a;"
        >
          <h2 style="color: #383333">
            TAILOR-MADE IT SOLUTIONS WITH OUR CLIENTS AT THE HEART OF IT ALL.
          </h2>
          <br />
          <p style="color: #5e7a8a;font-size: x-large; ">
            We started AXA Professionals to serve clients throughout the US and
            Canada. We wanted to be the ones that answer the call when our
            clients have a technical concern, project, or need an extra set of
            hands. One way we serve our clients is with excellent communication
            and know-how. Our custom Client Portal, allows you to send us a
            message any time day or night. It is often the starting point of our
            projects and a central place for you to see what is happening on
            your project in real time.
          </p>
        </v-col>
        <v-col md="6" cols="12">
          <img
            style="width: 380px; height: 100%"
            src="@/assets/images/portal/pexels-pixabay-416405.png"
          />
        </v-col>
      </v-row>
    </div>

    <!-- ================ sign into the client  -->
    <div
      class="container"
      style="color: #484444f0; font-size: large; margin-top: 2%"
    >
      <h3 style="margin-bottom: 1%">SIGN INTO THE CLIENT PORTAL</h3>
      <p style="margin-left: 4%">
        By Signing into the Client Portal, you can request services, set up a
        new project, enter a work order and help will be on the way! In the
        Portal, you can also track your work orders, respond to requests, view
        your contracts and pay your invoices.
      </p>
      <div style="margin-left: 9%; margin-bottom: 3%">
        <v-row>
          <v-col md="6" cols="12">
            <label>UserName</label><br />
            <input
              type="text"
              placeholder=" "
              style="border: 2px solid lightgray; height: 70%; width: 63%"
            />
          </v-col>
          <v-col md="6" cols="12">
            <label>Password</label><br />
            <input
              type="text"
              placeholder=" "
              style="border: 2px solid lightgray; height: 70%; width: 63%"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6" cols="12">
            <label>Email</label><br />
            <input
              type="text"
              placeholder=" "
              style="border: 2px solid lightgray; height: 70%; width: 63%"
            />
          </v-col>
          <v-col md="6" cols="12"> </v-col>
        </v-row>

        <v-row>
          <v-col md="6" cols="12"></v-col>
          <v-col md="6" cols="12">
            <v-btn
              style="
                border-radius: 9px;
                width: 27%;
                margin-top: -2%;
                margin-right: 50%;
                color: white !important;
                background-color: #5f8ea7 !important;
                float: right;
              "
            >
              LOGIN
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>