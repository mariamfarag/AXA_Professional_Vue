<template>
  <div style="margin-top: 4.5%">
    <!-- ======== Head -->
    <div style="background-color: #dcdcdc">
      <v-row>
        <!-- <v-col md="1" cols="0"></v-col> -->
        <v-col md="6" cols="12" style="padding-left: 5%; font-size: larger">
          <h2 style="color: #5e7a8a;margin-top: 5%;margin-bottom:3%;">AXA PROFESSIONALS PROJECT START UP</h2>
          <p style="color: #5e7a8a; font-weight: 300;font-size: larger;margin-bottom:5%;">
            We are so excited to get started on your project. If you are having
            an IT emergency, please call us at the number below. If you are
            interested in starting a project, consultation, or IT transformation
            to grow and expand your business, fill out the form below. We are a
            phone call away if you need us.
          </p>

          <v-row>
            <v-col md="1" cols="0"></v-col>
            <v-col md="5" cols="12" style="">
              <p style="color: #4b4b4b;font-size: larger;margin-bottom:10%; ">
                If you are an existing customer,
                <br />
                please<a href="#" style="color: #5e7a8a"> log </a> into your
                Portal
              </p>
              <p style="color: #6a6a6a; font-weight: 300;font-size: larger; ">
                Phone: 718-966-5205 <br />Info@Axapro.com
              </p>
            </v-col>
          </v-row>

          <!-- <v-row>
                        <v-col md="1" cols="0"></v-col>
                        <v-col md="5" cols="12" style="color:#5E7A8A;font-weight: 300;">
                            <p>We are so excited to get started on your project. If you are having an IT emergency,
                                please call us at the number below. If you are interested in starting a project,
                                consultation, or IT transformation to grow and expand your business, fill out the form
                                below. We are a phone call away if you need us.</p>
                        </v-col>
                    </v-row>
                    <p style="color: #4B4B4B;">
                        If you are an existing customer,
                        <br/> please<a href="#" style="color:#5E7A8A;"> log </a> into your
                        Portal
                    </p>
                    <p style="color: #6A6A6A;font-weight: 300;">
                        Phone: 718-966-5205 <br />Info@Axapro.com
                    </p>
 -->
        </v-col>
        <v-col md="2" cols="0"></v-col>
        <v-col md="4" cols="12" style="margin-left: -10%">
          <img
            style="width: 85%; height: 500px ;margin-top: 5%;"
            src="@/assets/images/pexels-karolina-grabowska-4467687.png"
          />
        </v-col>
      </v-row>
    </div>
    <!-- ========= -->
    <div style="margin: 3%">
      <h2 style="padding-left: 3%">NEW PROJECT REQUEST</h2>
      <!-- ======= first colunm -->
      <div style="background-color: #95b4c554; margin-top: 2%; padding: 3%">
        <v-row>
          <v-col md="6" cols="12" class="pt-8">
            <h4 style="color: #666464">First Name</h4>
            <v-text-field label="First Name"></v-text-field>
          </v-col>
          <v-col md="6" cols="12" class="pt-8">
            <h4 style="color: #666464">Last Name</h4>
            <v-text-field label="Last Name"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6" cols="12" class="pt-8">
            <h4 style="color: #666464">Email</h4>
            <v-text-field label="Email"></v-text-field>
          </v-col>
          <v-col md="3" cols="12" class="pt-8">
            <h4 style="color: #666464">Code</h4>
            <v-text-field label="Code"></v-text-field>
          </v-col>
          <v-col md="3" cols="12" class="pt-8">
            <h4 style="color: #666464">Phone</h4>
            <v-text-field label="Phone"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            md="6"
            cols="12"
            class="pt-8"
            style="color: #666464; font-size: larger"
          >
            <h3 style="color: #5e7a8a">What do you need to done?</h3>
            <br />
            <input
              type="checkbox"
              id="ManageIT"
              value="ManageIT"
              style="height: 7%; width: 7%"
            />&nbsp;&nbsp;&nbsp; <label for="ManageIT">Manage My IT</label
            ><br />

            <input
              type="checkbox"
              id="Setup"
              value="Setup"
              style="height: 7%; width: 7%"
            />&nbsp;&nbsp;&nbsp; <label for="Setup">Setup My Network</label
            ><br />

            <input
              type="checkbox"
              id="Host"
              value="Host"
              style="height: 7%; width: 7%"
            />&nbsp;&nbsp;&nbsp;
            <label for="Host">Host Or Maintain My Date</label><br />

            <input
              type="checkbox"
              id="Host"
              value="Host"
              style="height: 7%; width: 7%"
            />&nbsp;&nbsp;&nbsp;
            <label for="Host">Review and Maintain My Date</label><br />

            <input
              type="checkbox"
              id="Host"
              value="Host"
              style="height: 7%; width: 7%"
            />&nbsp;&nbsp;&nbsp; <label for="Host">Intergrate My System</label
            ><br />

            <input
              type="checkbox"
              id="Host"
              value="Host"
              style="height: 7%; width: 7%"
            />&nbsp;&nbsp;&nbsp; <label for="Host">Provide an IT Staff</label
            ><br />
          </v-col>

          <v-col md="6" cols="12" class="pt-8">
            <v-row>
              <v-col md="12" cols="12">
                <h4 style="color: #666464">Select a Service</h4>
                <v-text-field label="Choose a Option"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col md="12" cols="12">
                <h4 style="color: #666464">Number Of Sites Involve</h4>
                <v-text-field label="Enter a Number"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col md="12" cols="12">
                <h4 style="color: #666464">Industry Involved</h4>
                <v-text-field label="Choose an Option"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col md="12" cols="12">
                <h4 style="color: #666464">Number Of Devices Involved</h4>
                <v-text-field label="Enter a Number"></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="12" cols="12">
            <h3 style="color: #666464">Give Us More Details</h3>
            <br />
            <br />
            <hr
              style="
                font-weight: bold;
                font-size: xx-large;
                text-align: center;
                width: 75%;
                margin-left: 12%;
              "
            />
            <br /><br />
            <v-btn class="last-btn-service" style="margin: 1%">
              Submit New Project</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>