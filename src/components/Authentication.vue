<template>
    <div></div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'Authentication',
    created() {
      this.login();
    },
    methods: {
      ...mapActions(['login'])
    }
  }
  </script>