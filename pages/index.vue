<template>
<div class="container">
  <h1>Hi, I'm Antoine!</h1>
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
  <div class="row">
    <nuxt-link to="/about" class="button">About</nuxt-link>
  </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>
