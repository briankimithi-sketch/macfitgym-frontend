<script setup>
const userDetails = JSON.parse(localStorage.getItem(userDetails))
</script>

<template>
    <v-container width="50%" style="background-color:#CFD0D6" class="mt-12">
        <v-col>
            <v-card>
                <v-img src="" class="h-50"></v-img>
                <v-card-title>{{userDetails.name}}</v-card-title>
                <v-card-text>{{userDetails.email}}</v-card-text>
                <v-card-text>{{userDetails.phonenumber}}</v-card-text>
                <v-card-text>{{userDetails.gymlocation}}</v-card-text>
                 <v-card-text>Your current subscription is:{{userDetails.subscription.name}} at {{userDetails.subscription.price}}</v-card-text>
                 <div v-if="UserDetails.subscription">
                    <v-card-text>Your current subscription is:{{userDetails.subscription.name}} at {{userDetails.subscription.price}}</v-card-text>

                 </div>
                 <div v-else>
                    <v-btn color="primary" variant="outlined" to='/bundles'></v-btn>
                 </div>
            </v-card>
        </v-col>
    </v-container>
</template>