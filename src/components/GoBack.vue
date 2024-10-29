<template>
    <button @click="goBack">Go Back</button>
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        window.history.back(); // Go back to the previous page
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles you want for the GoBack component */
  </style>
  