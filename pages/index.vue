<template>
<div class="container">

<div class='row'>
  <div class="col-sm-1 offset-sm-1">
    <img src='/img/logo.svg' class='img-fluid'>
  </div>
  <div class='nav col-sm-4 offset-sm-5'>
    <a class='header-link' href="#about">ABOUT</a>
    <a class='header-link' href="#projects">PROJECTS</a>
    <a class='header-link' href="#contacts">CONTACTS</a>
  </div>
</div>

<div class="row">
  <div class="col-sm-4 offset-sm-1">
    <h1>Hi, I'm Antoine!</h1>
    <p>I'm an interaction designer with a CS background. I love to design sleek interfaces with beautiful colors and subtle animations. And I know how to build them. I currently work at PDFTron, designing the next generation of document collaboration tools.</p>
    <link-button text='About' to='/about'></link-button>
  </div>

  <div class="col-sm-4 offset-sm-2">
    <img src='/img/antoine.jpg' class='img-fluid'>
  </div>
</div>

</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LinkButton from '~/components/LinkButton.vue'

export default {
  components: {
    Logo, LinkButton
  }
}
</script>

<style>
.header-link{
  color: $text-primary;
  font-size: 16px;
}
</style>
