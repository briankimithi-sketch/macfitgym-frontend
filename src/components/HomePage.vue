<script setup>
</script>

<template>
<!-- TOP HEADER / LOGO -->
  <v-container fluid class="pa-4 d-flex align-center">
    <v-img
      src="/macfit-logo.png"
      height="250"
      width="250"
      contain
    ></v-img>

    <!-- Optional Gym Name next to logo -->
    <span class="ml-3 font-weight-bold text-h6">
      MacFit Gym
    </span>
  </v-container>
<v-container fluid class="pa-0 mt-16">

  <!-- HERO SECTION -->
      <v-img
            src="/train11.jpg"
            height="500"
            class="mx-auto"
            cover
            ></v-img>

  <!-- FEATURES SECTION -->
  <v-container class="mt-12">

   <h2 class="text-center text-h4 font-weight-medium mb-8 calligraphic">
  Membership Plans
</h2>
    <v-row>

      <v-col md="4" class="text-center">
        <v-img
            src="/train10.jpg"
            height="50%"
            width="50%"
            class="mx-auto"
            ></v-img>

        <h3 class="mt-4">Modern Equipment</h3>

        <p class="text-body-2">
          Train using professional gym equipment designed for performance.
        </p>
      </v-col>


      <v-col md="4" class="text-center">
       <v-img
            src="/train12.jpg"
            height="50%"
            width="50%"
            class="mx-auto"
            ></v-img>

        <h3 class="mt-4">Expert Trainers</h3>

        <p class="text-body-2">
          Our experienced trainers help you reach your fitness goals faster.
        </p>
      </v-col>


      <v-col md="4" class="text-center">
       
            <v-img
            src="/train13.jpg"
            height="50%"
            width="50%"
            class="mx-auto"
            ></v-img>
        <h3 class="mt-4">Flexible Training</h3>

        <p class="text-body-2">
          Train at your own pace with flexible workout programs.
        </p>
      </v-col>

    </v-row>

  </v-container>


  <!-- MEMBERSHIP SECTION -->
  <v-container class="mt-12">

    <h2 class="text-center text-h4 mb-8">
      Membership Plans
    </h2>

    <v-row>

      <v-col md="4">
        <v-card class="text-center pa-4">
          <v-img
            src="/charles.jpg"
            height="50%"
            width="50%"
            class="mx-auto"
            ></v-img>

          <v-card-title>Daily Pass</v-card-title>

          <v-card-text>
            500 Ksh
          </v-card-text>
        </v-card>
      </v-col>


      <v-col md="4">
        <v-card class="text-center pa-4">
         <v-img
  src="/anastase.jpg"
  height="50%"
  width="50%"
  class="mx-auto"
></v-img>

          <v-card-title>1 Month</v-card-title>

          <v-card-text>
            5000 Ksh
          </v-card-text>
        </v-card>
      </v-col>


      <v-col md="4">
        <v-card class="text-center pa-4">
         <v-img
                src="/edgar.jpg"
                height="50%"
                width="50%"
                class="mx-auto"
                ></v-img>

          <v-card-title>3 Months</v-card-title>

          <v-card-text>
            20000 Ksh
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

  </v-container>


  <!-- FOOTER -->
  <v-footer color="#084A4A" class="mt-12">
    <v-container class="text-center text-white">
      © 2026 MacFit Gym
    </v-container>
  </v-footer>


</v-container>

</template>