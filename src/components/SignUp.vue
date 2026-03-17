<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import {useAuth} from '../services/auth'

const router = useRouter();
const { register, loading, error } = useAuth()
  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
    passwordMatch: () =>password === confirmPassword || 'passwords must match',
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)

  const confirmPassword= ref(null)
  const show1confirm =ref(false)

  //models
    const firstName = ref(null)
    const lastName = ref(null)
    const email = ref(null)
    const phonenumber = ref(null)
    const gender = ref(null)
    const dob = ref(null)
    const gymlocation = ref(null)

    const signUp = async () => {

    loading.value = true;
    error.value = "";

    const formData = new FormData();
    formData.append("name", firstName.value +' '+ lastName.value,);
    formData.append("email", email.value);
    formData.append("phonenumber", phonenumber.value);
    formData.append("dob", dob.value);
    formData.append("gender", gender.value);
    formData.append("gymlocation", gymlocation.value);
    formData.append("password", password.value);
    formData.append("role_id", 4);

    try {
        await register(formData)
    
        // Redirect after successful signup
        router.push('/homepage').then(() => {
            router.go(0); // Reloads the current route
        });
    } catch (err) {
        // Error is already handled by the auth service
        console.error('Sign up failed', err)
    }
};

</script>

<template>
    <v-container width="40%" class="text-center mt-12" style="background-color:#CFD0D6" >
        <v-row>
            <v-col md="12">
                <v-form width="50%">
                    <v-row>
                        <v-col md="12">
                           
                            <v-img class="text-center mt-12" src="macfit-logo.png" width="40%" height="40%"></v-img>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div class="text-display-large font-weight-medium text-right">Sign up to Macfit Gym</div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-display-medium font-weight-medium text-right">First name</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="firstName"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-display-medium font-weight-medium text-right">Last name</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="lastName"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-display-medium font-weight-medium text-right">Email</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="email"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-display-medium font-weight-medium text-right">Phone Number</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" type="number" v-model="phonenumber"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-display-medium font-weight-medium text-right">Gender</div>
                        </v-col>
                        <v-col md="6">
                                <v-radio-group inline v-model="gender">
                                <v-radio label="Male" value="male"></v-radio>
                                <v-radio label="Female" value="female"></v-radio>
                                </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-display-medium font-weight-medium text-right">Date of Birth</div>
                        </v-col>
                        <v-col md="6">
                            <v-date-input variant="outlined" v-model="dob"></v-date-input>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-display-medium font-weight-medium text-right">Gym Location</div>
                         </v-col>
                        <v-col md="6">
                            <v-select
                            label="Select"
                            :items="['Westi', 'Buru', 'Mada', 'Waiyaki way']"
                            variant="outlined" v-model="gymlocation"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-display-medium font-weight-medium text-right">Password</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                variant="outlined">
                                
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-display-medium font-weight-medium text-right">Confirm password</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field
                                v-model="confirmPassword"
                                :append-icon="show1confirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min, rules.passwordMatch,]"
                                :type="show1confirm ? 'text' : 'password'"
                                variant="outlined">
                                
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn color="#3A4B68" variant="elevated" @click="signUp">sign Up</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div >New to MacFit Gym? 
                                <router-link to="/login">Back to login</router-link>
                            </div>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>