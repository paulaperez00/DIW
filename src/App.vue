
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  methods: {
    
    login: function () {
      this.$router.push("/formulario");
    },
    news: function () {
      this.$router.push("/news");
    }
    //  register: function () {
    //   this.$router.push("/register");
    // }
  }
}
</script>
<template>
  <!-- Menu -->
  <v-toolbar color="teal-lighten-2">
    <v-toolbar-title>Biblioteca</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <RouterLink to="/login.vue">Login</RouterLink> -->
   
    <v-btn @click=login icon="mdi-account-circle"></v-btn>
    <!-- <v-btn @click=register icon="mdi-pencil-circle" fab dark large></v-btn> -->
  </v-toolbar>
  
  <RouterView />

</template>

