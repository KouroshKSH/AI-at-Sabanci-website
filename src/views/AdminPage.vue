<template>
    <div style="height: 100vh; width: 100vw;" class="flex-wrapper-four" v-if="$store.state.user.admin">
        <router-link to="/viewApplications" style="margin-top: 10%; width: 10vw; height: 10vh">View student applications</router-link>
    </div>
</template>

<script>

</script>

<style>
  .flex-wrapper-four {
    margin-bottom: 5%;
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
</style>