<template>
  <div>
    <!-- ========== Head -->
    <div
      class="div-image"
      style="font-size: large; margin-top: -2%"
      :style="{
        'background-image': `url(${require(`@/assets/images/SERVICES/backgroundservices.png`)})`,
      }"
    >
      <div>
        <v-row style="">
          <v-col md="2" cols="0" style="margin-top: 6%"></v-col>
          <v-col md="10" cols="12" style="margin-top: 6%">
            <v-col md="12" cols="12">
              <h2 style="color: white">PUTTING YOUR MIND AT EASE</h2>
            </v-col>

            <v-col md="12" cols="12" style="margin-left: 10%">
              <span class="spantwo-on-image">
                Put Your Passion To Work And Let Us Handle The Technology.
              </span>
            </v-col>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- ================= div 2 -->
    <div class="container" style="padding-top: 3%; font-size: large">
      <v-row>
        <v-col md="6" cols="12" class="">
          <span>
            At AXA Professionals, we aim to handle all of your IT and technology
            needs from start to finish. We'll even find the right replacements
            for us if you ever want to take on the IT responsibilities yourself.
            When it comes to technology, we don't want you to worry about a
            thing!
          </span>

          <br /><br />

          <span>
            We have trained, professional IT personnel that we can call upon all
            over the United States and Canada. This allows us to make sure we
            have your needs covered from the moment you contact us until the job
            is cleaned up and completed.
          </span>
        </v-col>
        <v-col md="1"></v-col>
        <v-col class="font-color-only-service" md="5" cols="12">
          <span>
            <h4>We can't wait to help you get started.</h4>
            <br />
            <p>
              1) IT Managed Services
              <br />
              <br />
              2) IT Projects
              <br />
              <br />
              3) IT Consulting
              <br />
              <br />
              4) IT Recruiting
            </p>
            <v-btn class="last-btn-footer"> New Project Request</v-btn>
          </span>
        </v-col>
      </v-row>
    </div>

    <!-- ============= IT Managed Services ====== -->
    <div style="background-color: #00000008">
      <h1 class="h1-service">IT Managed Services</h1>
      <hr class="hr-style-service" />
      <v-row style="padding: 2%">
        <v-col md="1" cols="12"></v-col>
        <v-col md="2" cols="12">
          <div style="text-align: center">
            <img
              class="img-service"
              src="@/assets/images/SERVICES/pexels-christina-morillo-1181676.png"
            />
            <h3 style="" class="h4-service">IT Support</h3>
          </div>
          <p>
            From help desk services to remote administration or onsite
            technology partners - let us be your IT department.
          </p>
        </v-col>
        <v-col md="2" cols="12">
          <div style="text-align: center">
            <img
              class="img-service"
              src="@/assets/images/SERVICES/pexels-blaz-erzetic-2628105.png"
            />
            <h3 class="h4-service">Hardware & Software repair</h3>
          </div>

          <div>
            <p>
              When you're down, we're there to help. Hardware and software
              repair for any application. Computers and printer support. MAC or
              PC support.
            </p>
          </div>
        </v-col>
        <v-col md="2" cols="12">
          <div style="text-align: center">
            <img
              class="img-service"
              src="@/assets/images/SERVICES/pexels-brett-sayles-4339335.png"
            />
            <h3 class="h4-service">Networking</h3>
          </div>
          <p>
            On-prim and cloud-based server support Networking via LAN, WAN, or
            wireless. Cabling and Equipment installation.
          </p>
        </v-col>
        <v-col md="2" cols="12">
          <div style="text-align: center">
            <img class="img-service" src="@/assets/images/SERVICES/th.png" />
            <h3 class="h4-service">Cloud Services</h3>
          </div>
          <p>
            Data backup, security, and recovery; website hosting and
            maintenance.
          </p>
        </v-col>
        <v-col md="2" cols="12">
          <div style="text-align: center">
            <img
              class="img-service"
              src="@/assets/images/SERVICES/pexels-fauxels-3183131.png"
            />
            <h3 class="h4-service">Quarterly Health Checks</h3>
          </div>

          <p>
            We will help you track and report on inventory, asset management,
            maintenance, updates, and power outages
          </p>
        </v-col>
      </v-row>
    </div>

    <!-- ======= ========= -->
    <div class="div-onefield">
      <span style="text-align: center">
        <img
          class="img-in-divwithone-element"
          src="@/assets/images/SERVICES/Group 52168.png"
        />
        <span style="color: white; font-size: 24px">
          More than Managed Services. We can deliver IT Projects & Consulting,
          too!
        </span>
      </span>
    </div>

    <!-- ===========  3 div  -->
    <div>
      <v-row style="margin: 3%">
        <v-col
          md="3"
          cols="12"
          style="background-color: #00000008; padding: 0px"
        >
          <img
            style="height: 100%; float: left; width: 100%; margin-bottom: -30%"
            src="@/assets/images/SERVICES/pexels-tiger-lily-7108467.png"
          />
        </v-col>
        <v-col
          md="6"
          cols="12"
          style="background-color: #00000008; font-size: 18px; height: 90%;"
        >
          <div style=" height: 90%;">
            <span>
              <h2
                style="
                  color: #5f8ea7;
                  margin-bottom: 1%;
                  margin-top: 2%;
                  text-align: center;
                "
              >
                IT Projects
              </h2>
              <div style="height: 75%;">
              <p style="margin-left: 5%">
                Long-term and short-term project management and support will get
                you up and running with new technology in the blink of an eye.
                <br />
                Office moves<br />
                <br />Programming and application development<br />
                <br />Data Conversion & Migration
              </p>
              <v-btn
                class=""
                style="
                  border-radius: 9px;
                  margin-top: 4%;
                  margin-bottom: 4%;
                  margin-right: 4%;
                  color: white !important;
                  background-color: #5f8ea7 !important;
                  float: right;
                "
              >
                New Project Request
              </v-btn>
              </div>
            </span>
          </div>
        </v-col>
        <v-col md="3" cols="0"></v-col>
      </v-row>

      <v-row style="margin: 3%">
        <v-col md="3" cols="0"></v-col>
        <v-col md="9">
          <v-row style="direction: rtl">
            <v-col
              md="4"
              cols="12"
              style="background-color: #00000008; padding: 0px"
            >
              <span>
                <img
                  style="height: 100%; width: 100%; margin-bottom: -30%;"
                  src="@/assets/images/SERVICES/pexels-mizuno-k-12902864.png"
                />
              </span>
            </v-col>
            <v-col
              md="8"
              cols="12"
              style="
                background-color: #00000008;
                direction: ltr;
                font-size: 18px;
                    height: 90%;
              "
            >
              <div style="float: right; height: 90%;">
                <span>
                  <h2
                    style="
                      color: #5f8ea7;
                      text-align: center;
                      margin-bottom: 1%;
                      margin-top: 2%;
                    "
                  >
                    IT Consulting
                  </h2>
                  <div style="height: 75%;">
                    <p style="margin-left: 5%">
                      Not sure what technology is needed? No problem, we can
                      offer our expertise in software selection, technology
                      configuration, and training.
                      <br /><br />
                      POS Systems<br />
                      ERP Systems<br />
                      Training<br />
                      System Integration<br />
                      Business Process Review<br />
                      System Analysis & Design
                    </p>
                    <v-btn
                      class=""
                      style="
                        border-radius: 9px;
                        margin-top: 4%;
                        margin-bottom: 4%;
                        margin-right: 4%;
                        color: white !important;
                        background-color: #5f8ea7 !important;
                      margin-left: 5%;
                      "
                    >
                      New Project Request
                    </v-btn>
                  </div>
                </span>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row style="margin: 3%">
        <v-col
          md="3"
          cols="12"
          style="background-color: #00000008; padding: 0px"
        >
          <img
            style="height: 100%; float: left; width: 100%; margin-bottom: -36%"
            src="@/assets/images/SERVICES/pexels-timur-weber-8560224.png"
          />
        </v-col>
        <v-col
          md="6"
          cols="12"
          style="background-color: #00000008; font-size: 18px; height: 90%;"
        >
          <div style=" height: 90%;">
            <span>
              <h2
                style="
                  color: #5f8ea7;
                  margin-bottom: 1%;
                  margin-top: 2%;
                  text-align: center;
                "
              >
                Technician Recruiting
              </h2>
              <div style="height: 75%;">
              <p style="margin-left: 5%">
                We do the recruiting and technician vetting - you get a
                knowledgeable team of technicians
                <br /><br />
                Sometimes, you know what you need, but you haven't been able to
                find the talent you need. IT recruiting is a specialized field.
                When you know your business, but need someone to screen and find
                the right support staff, we're there for you!
                <br /><br />
                Not only can we offer to be your IT department for you, but
                we'll also replace ourselves with the right people to do the
                job!
              </p>
              <v-btn
                class=""
                style="
                  border-radius: 9px;
                  margin-top: 4%;
                  margin-bottom: 4%;
                  margin-right: 4%;
                  color: white !important;
                  background-color: #5f8ea7 !important;
                  float: right;
                "
              >
                New Project Request
              </v-btn>
              </div>
            </span>
          </div>
        </v-col>
        <v-col md="3" cols="0"></v-col>
      </v-row>
    </div>
    <!-- ====== It Staff Recr -->
    <div
      class="div-onefield"
      style="
        padding-top: 3%;
        padding-left: 3%;
        padding-right: 3%;
        padding-bottom: 3%;
        height: 20%;
      "
    >
      <span style="color: white; font-size: 21px">
        <span style="color: black">IT Staff Recruiting:</span>
        <span>
          If you ever want to go from a "done for me" model to a "do it
          yourself" model - we've got you covered! We'll juggle all the resumes,
          testing, and verification for you so that we can replace ourselves and
          make sure you're covered for the future!
        </span>
      </span>
    </div>

    <!-- ============== Analytics and metrics -->
    <div style="background-color: #00000008">
      <div style="padding-left: 3%; padding-right: 3%">
        <h4
          style="
            text-align: center;
            font-size: x-large;
            padding-top: 3%;
            padding-bottom: 2%;
          "
        >
          Analytics and metrics are in all our projects and maintenance.
        </h4>
        <v-row style="text-align: center; font-size: 18px">
          <v-col md="3" cols="0"></v-col>
          <v-col md="2" cols="12" style="margin-left: -2%">
            <img
              style="width: 160px; height: 160px"
              src="@/assets/images/SERVICES/Round icon teal - issue trending (1).png"
            />
            <h4 style="color: #00838f !important">ISSUES TRENDING</h4>
            <p>Location issues Common problems Program assessment</p>
          </v-col>
          <v-col md="2" cols="12" style="margin-left: 2%">
            <img
              style="width: 160px; height: 160px"
              src="@/assets/images/SERVICES/Round icon teal - health check.png"
            />
            <h4 style="color: #00838f !important">HEALTH CHECKS</h4>
            <p>Updates System maintenance Historical assets Asset refreshers</p>
          </v-col>
          <v-col md="2" cols="12" style="margin-left: 2%">
            <img
              style="width: 160px; height: 160px"
              src="@/assets/images/SERVICES/Round icon teal - activity tracking.png"
            />
            <h4 style="color: #00838f !important">ACTIVITY TRACKING</h4>
            <p>
              Resolution time Number of calls Work Order status Finanical impact
            </p>
          </v-col>
          <v-col md="3" cols="0"></v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>