<template>
<div>

<div class="navbar-offset" id='about'/>
<Navbar/>

<div class='section'>
  <div class='container'>
    <div class='row'>
      <div class='project-text offset-sm-1 col-sm-4'>
        <h1>Hi, I'm Antoine!</h1>
        <p class='project-short-description'>I'm an interaction designer with a CS background. I love to design sleek interfaces with beautiful colors and subtle animations. And I know how to build them. I currently work at PDFTron, designing the next generation of document collaboration tools.</p>
      </div>

      <div class='offset-sm-2 col-sm-4 align-self-end pos-relative'>
        <img src='/img/antoine.jpg' class='img-fluid img-sizing'>
        <img src='/img/antoine.jpg' class='img-fluid img-raised img-floating' style='left:15px; bottom:-80%'>
      </div>
    </div>
  </div>
</div>

<div id="projects">

<div class='section blue-section'>
  <div class='container'>
    <div class='row align-items-center extra-padding-top'>
      <div class='project-text offset-sm-3 col-sm-4 order-sm-12'>
        <h1>Xodo</h1>
        <p class='project-short-description'>Xodo is a cross-platform app for reading, annotating, and collaborating on documents. It has millions of users and a 4.6 rating in the Google PlayStore. I am in charge of researching and designing the user experience from end to end. I am leading the design of a brand new version of the app (in beta now), which will significantly expand its collaboration capabilities.</p>
        <link-button text="Don't click this button" to='/about'></link-button>
      </div>
      <div class='offset-sm-1 col-sm-3 order-sm-1 pos-relative'>
        <img src='/img/xodo-android.png' class='img-fluid img-raised'>
      </div>
    </div>
  </div>
</div>

<div class='section'>
  <div class='container'>
    <div class='row align-items-center'>
      <div class='project-text offset-sm-1 col-sm-4'>
        <h1>PaperQuest</h1>
        <p class='project-short-description'>The literature review is a key component of academic research, that allows researchers to build upon each other’s work. We present PaperQuest, a visualization tool that supports efficient decision making, by only displaying the information useful at a given step of the exploration process.</p>
        <link-button text="What is your quest?" to='/paperquest'></link-button>
      </div>
      <div class='offset-sm-2 col-sm-4 pos-relative'>
        <img src='/img/paperquest-small.png' class='img-fluid img-raised'/>
      </div>
    </div>
  </div>
</div>

<div class='section blue-section'>
  <div class='container'>
    <div class='row align-items-center'>
      <div class='project-text offset-sm-2 col-sm-4 order-sm-12'>
        <h1>Twist & Pulse</h1>
        <p class='project-short-description'>The concept of ephemeral adaptation was introduced to reduce visual search time in GUI menus, while preserving spatial consistency and minimizing distraction. We extend this concept to the visual search of app icons on smartphones in order to speed up launching apps from a homescreen</p>
        <link-button text="Shake it up, baby" to='/about'></link-button>
      </div>
      <div class='offset-sm-1 col-sm-4 order-sm-1 pos-relative'>
        <img src='/img/twistAndPulse.png' class='img-fluid img-raised'>
      </div>
    </div>
  </div>
</div>

</div>

<Contact/>

</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LinkButton from '~/components/LinkButton.vue'
import Navbar from '~/components/Navbar.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Logo, LinkButton, Navbar, Contact
  }
}
</script>

<style lang='scss'>

.section{
  padding: 80px 0;
  @media (min-width: $break-small){
    padding: 120px 0;
  }
}

.navbar-offset{
  height: 36px;
}

.blue-section{
  background-color: $section-bg-color;
}

.row.extra-padding-top{
  @media (max-width: $break-small){
    padding-top: 130px;
  }
}

.project-text{
  @media (max-width: $break-small){
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
  }
}

.project-short-description{
  color: $text-secondary;
  text-align: justify;
  margin-bottom: 24px;
}

.img-floating{
  position: absolute;
  max-width: calc(100% - 30px);
}

.img-sizing{
  visibility: hidden;
  max-width: 50%;
}
</style>
