<script setup>

</script>

<template>
<v-container max-width="100%">
    <v-row>
        <v-carousel>
            <v-carousel-item src="/1.jpg" cover></v-carousel-item>
            <v-carousel-item src="/2.jpg" cover></v-carousel-item>
            <v-carousel-item src="/3.jpg" cover></v-carousel-item>
        </v-carousel>
    </v-row>
</v-container>

<!-- About Us -->
     <v-container style="background-color:#CFD0D6"  max-width="100%">
        <v-row >
            <v-col md="8" class="text-centre">
                    <div class="text-display-medium mb-12">Designed For The Go Getters</div>
                    <div class="text-title-large font-weight-light text-medium-empasis mb-8">We are not just another fitness center — we are a place where determination meets purpose. Our community is made up of driven individuals, first-time gym members, and seasoned athletes who all share one mission: improving themselves every single day. The moment you step inside, you’ll feel the motivation, focus, and powerful atmosphere that makes our gym different.</div>
                    <div class="text-title-large font-weight-light text-medium-empasis mb-8">Our modern fitness facility is available 24/7 because your goals shouldn’t be limited by time. Equipped with advanced training machines, spacious free-weight sections, high-performance cardio equipment, and dedicated areas for HIIT, yoga, and functional workouts, everything you need to train effectively is available in one place.</div>
                    <div class="text-title-large font-weight-light text-medium-empasis mb-8">Wherever you are in your fitness journey, our experienced personal trainers and nutrition experts are ready to guide you. We create customized training and nutrition plans that match your body, your ambitions, and your lifestyle — because real progress requires a personal approach. Your journey toward a stronger, healthier you begins here, and we’ll support you every step of the way.</div>
                    <v-btn color="#084A4A">LEARN MORE</v-btn>
            </v-col>
            <v-col md="4">
                <v-container class ="d-flex align-center justify centre fill-height">
                <v-img src="aboutus.jpg"></v-img>
                </v-container>
            </v-col>
        </v-row>
     </v-container>
     <v-container>
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-img src="/train.jpg" cover></v-img>
                    <v-card-title>Train Hard</v-card-title>
                    <v-card-text>Build power, endurance, and confidence with our professional strength training equipment designed for all fitness levels.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card>
                    <v-img src="/train2.jpg" cover></v-img>
                    <v-card-title>Build Hard</v-card-title>
                    <v-card-text>Build your professional strength for all fitness levels.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card>
                    <v-img src="/train3.jpg" cover></v-img>
                    <v-card-title>Go Hard</v-card-title>
                    <v-card-text>Go power mode and get confidence with our professional strength training equipment.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!== Reviews ==>
<v-container>
    <v-row>
        <v-col md="3">
            <v-card color="CFD0D6">
                <v-card-text>MacFit Gym has completely changed my fitness routine. The equipment is modern, the trainers are supportive, and the environment keeps me motivated every day</v-card-text>
                <v-rating :length="5" :size="32" :model-value="5" active-color="primary"></v-rating>
            </v-card>
        </v-col>
         <v-col md="3">
            <v-card color="CFD0D6">
                <v-card-text>I love training at MacFit. The gym is always clean, the staff are friendly, and there is plenty of equipment so you never have to wait.</v-card-text>
                <v-rating :length="5" :size="32" :model-value="5" active-color="primary"></v-rating>
            </v-card>
        </v-col>
         <v-col md="3">
            <v-card color="CFD0D6">
                <v-card-text>Great atmosphere and professional trainers. Since joining MacFit, I’ve become stronger and more confident in my workouts.</v-card-text>
                <v-rating :length="5" :size="32" :model-value="5" active-color="primary"></v-rating>
            </v-card>
        </v-col>
         <v-col md="3">
            <v-card color="CFD0D6">
                <v-card-text>Whether you're a beginner or experienced, MacFit Gym is perfect. The facilities are excellent and the energy in the gym keeps you pushing harder.</v-card-text>
                <v-rating :length="5" :size="32" :model-value="5" active-color="primary"></v-rating>
            </v-card>
        </v-col>
    </v-row>
</v-container>

<!==Contact us==>
<v-container style="background-color:#CFD0D6"  max-width="100%">
<v-row class="text-center">
    <div  class="text-title-large font-weight-light text-medium-empasis mb-8">Get in Touch</div>
    <div  class="text-title-large font-weight-light text-medium-empasis mb-8">0798765432 | macfitgym@example.com</div>
    <div  class="text-title-large font-weight-light text-medium-empasis mb-8">Opening HOURS</div>
    <div  class="text-title-large font-weight-light text-medium-empasis mb-8">Mon-Fri: 4:00am-10:00pm | Sat: 4:00am-8:00pm | Sun: 6:00am-7:oopm</div>
    <div  class="text-title-large font-weight-light text-medium-empasis mb-8">MacFit Gym,3rd floor, Sukari Mall, Bungoma rd</div>
    <div  class="text-title-large font-weight-light text-medium-empasis mb-8">&copy: 2026 MacFit Gym. Designed by Brian Designs</div>
</v-row>
</v-container>
</template>