<script setup>
const isLoggedIn = localStorage.getItem("isLoggedIn")
const isAdmin = true

function logout(){
    localStorage.removeItem("isLoggedIn")
    router.push('/')
}
</script>

<template>

<v-app-bar color="#084A4A">
    <v-app-bar-title>
       <router-link to="/"> MacFit Gym</router-link>
    </v-app-bar-title>
    <v-btn to="/homepage" v-if="isLoggedIn">Home</v-btn>
    <v-btn to="/bundles">Bundles</v-btn>
    <v-btn to="/gymlocations">Our Gyms</v-btn>
    <v-btn to="/admin" v-if = "isAdmin">Admin</v-btn>
     <v-btn icon="mdi-account" v-if="isLoggedIn">
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" to="/profile">Profile</v-btn>                        
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" @click="logout()">Logout</v-btn>                        
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <v-btn to ="/login" v-else>Login</v-btn>
</v-app-bar>
    </template>