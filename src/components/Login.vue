<script setup>
import { ref } from 'vue'

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)
</script>

<template>
    <v-container width="50%" class="text-center mt-12" style="background-color:#CFD0D6" >
        <v-row>
            <v-col md="12">
                <v-form width="50%">
                    <v-row>
                        <v-col md="12">
                            <v-icon>mdi-weight-lifter</v-icon>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-div class="text-display-large font-weight-medium text-right">Welcome to MacFit</v-div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <v-div class="text-display-medium font-weight-medium text-right">Username</v-div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <v-div class="text-display-medium font-weight-medium text-right">Password</v-div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="show1 = !show1">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn color="#3A4B68" variant="elevated">Login</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-div >New to MacFit Gym? Create an acccount</v-div>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>