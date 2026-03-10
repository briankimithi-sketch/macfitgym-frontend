<script setup>

</script>

<template>
    <v-container  style="background-color:#CFD0D6" class="mt-16">
        <v-row>
            <div class="text-display-medium mb-12">Bundles and Pricing</div>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-card class="text-center">
                    <v-icon color="#084A4A" size="large" class="mt-8">mdi-calendar-clock</v-icon>
                    <v-card-title  color="#084A4A" >Daily Pass</v-card-title>
                    <v-card-text>500 ksh</v-card-text>
                </v-card>
            </v-col>
             <v-col md="3">
  <v-card class="text-center">
    <v-icon color="#084A4A" size="large" class="mt-8">mdi-calendar-blank</v-icon>
    <v-card-title>1 Month</v-card-title>
    <v-card-text>5000 Ksh</v-card-text>
  </v-card>
</v-col>

<v-col md="3">
  <v-card class= "text-center">
    <v-icon color="#084A4A" size="large" class="mt-8">mdi-calendar-month</v-icon>
    <v-card-title>2 Months</v-card-title>
    <v-card-text>15000 Ksh</v-card-text>
  </v-card>
</v-col>

<v-col md="3">
  <v-card class="text-center">
    <v-icon color="#084A4A" size="large" class="mt-8">mdi-calendar-heart</v-icon>
    <v-card-title>3 Months</v-card-title>
    <v-card-text>20000 Ksh</v-card-text>
  </v-card>
</v-col>
        </v-row>
        <v-row>
            <v-col md="12">
                <v-card class="text-center">
                    <v-icon color="#084A4A" icon="mdi-crown" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#0884A">Annual Premium</v-card-title>
                    <v-card-text>40,000 ksh - Best value!Enjoy unlimited access, priority booking and exclusive member perks all year long.</v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>


    <!--what"s Included-->

    <v-container style="background-color:#CFD0D6" class="mt-16">
        <v-row>
            <v-col md="12">
                <div class="text-display-medium mb-12 mt-12" >What's included in your bundle</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3">
             <v-card class="text-center pa-6">
                <v-icon color="#084A4A" icon="mdi-timer-sand-full" size="large" class="mt-8"></v-icon>
                <v-card-title color="#084A4A">Gym Access</v-card-title>
            </v-card>
        </v-col>
        <v-col md="3">
             <v-card class="text-center pa-6" >
                <v-icon color="#084A4A" icon="mdi-timer-sand-full" size="large" class="mt-8"></v-icon>
                <v-card-title color="#084A4A">Yoga Crew</v-card-title>
            </v-card>
        </v-col>
        <v-col md="3">
             <v-card class="text-center pa-6" >
                <v-icon color="#084A4A" icon="mdi-timer-sand-full" size="large" class="mt-8"></v-icon>
                <v-card-title color="#084A4A">Squarts Crew</v-card-title>
            </v-card>
        </v-col>
        <v-col md="3">
             <v-card class="text-center pa-6">
                <v-icon color="#084A4A" icon="mdi-timer-sand-full" size="large" class="mt-8"></v-icon>
                <v-card-title color="#084A4A">Personalized Training</v-card-title>
            </v-card>
        </v-col>
        </v-row>
        <v-row>
            <v-col md="3">
             <v-card class="text-center pa-6" >
                <v-icon color="#084A4A" icon="mdi-timer-sand-full" size="large" class="mt-8"></v-icon>
                <v-card-title color="#084A4A">Running Crew</v-card-title>
            </v-card>
        </v-col>
        <v-col md="3">
             <v-card class="text-center pa-6">
                <v-icon color="#084A4A" icon="mdi-timer-sand-full" size="large" class="mt-8"></v-icon>
                <v-card-title color="#084A4A">Cycling Crew</v-card-title>
            </v-card>
        </v-col>
        </v-row>
    </v-container>

        <!--how to join-->
    <v-container style="background-color:#CFD0D6" class="mt-16">
        <v-row>
            <v-col class="text-center">
                <v-div class="text-display-medium mb-12">How To Join MacFit Gym </v-div>
            </v-col>
        </v-row>
         <v-row>
            <v-col>
                <v-list-item>1. Select Your prefered bundle.</v-list-item>
                <v-list-item>2. Fill in the online form.</v-list-item>
                <v-list-item>3. Make a payment.</v-list-item>
                <v-list-item>4. Visit the Gym for more information and directions.</v-list-item>
            </v-col>
       </v-row>

    </v-container>
</template>