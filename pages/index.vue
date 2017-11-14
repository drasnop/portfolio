<template>
<div>

<div class='nav'>
  <div class='container'>
    <div class='row'>
      <div class='offset-sm-1 col-sm-1'>
        <img src='/img/logo.svg' class='img-fluid'>
      </div>
      <div class='nav offset-sm-5 col-sm-4'>
        <a class='header-link' href='#about'>ABOUT</a>
        <a class='header-link' href='#projects'>PROJECTS</a>
        <a class='header-link' href='#contacts'>CONTACTS</a>
      </div>
    </div>
  </div>
</div>

<div class='section'>
  <div class='container'>
    <div class='row'>
      <div class='offset-sm-1 col-sm-4'>
        <h1>Hi, I'm Antoine!</h1>
        <p class='project-short-description'>I'm an interaction designer with a CS background. I love to design sleek interfaces with beautiful colors and subtle animations. And I know how to build them. I currently work at PDFTron, designing the next generation of document collaboration tools.</p>
      </div>

      <div class='offset-sm-2 col-sm-4 align-self-end pos-relative'>
        <img src='/img/antoine.jpg' class='img-fluid img-floating' style='bottom:-180px'>
      </div>
    </div>
  </div>
</div>

<div class='section blue-section'>
  <div class='container'>
    <div class='row'>
      <div class='offset-sm-1 col-sm-3 align-self-end pos-relative'>
        <img src='/img/xodo-android.png' class='img-fluid img-floating' style='bottom:-180px'>
      </div>
      <div class='offset-sm-3 col-sm-4'>
        <h1>Xodo</h1>
        <p class='project-short-description'>Xodo is a cross-platform app for reading, annotating, and collaborating on documents. It has millions of users and a 4.6 rating in the Google PlayStore. I am in charge of researching and designing the user experience from end to end. I am leading the design of a brand new version of the app (in beta now), which will significantly expand its collaboration capabilities.</p>
        <link-button text="Don't click this button" to='/about'></link-button>
      </div>
    </div>
  </div>
</div>

<div class='section'>
  <div class='container'>
    <div class='row'>
      <div class='offset-sm-1 col-sm-4'>
        <h1>PaperQuest</h1>
        <p class='project-short-description'>The literature review is a key component of academic research, that allows researchers to build upon each other’s work. We present PaperQuest, a visualization tool that supports efficient decision making, by only displaying the information useful at a given step of the exploration process.</p>
        <link-button text="What is your quest?" to='/about'></link-button>
      </div>
      <div class='offset-sm-2 col-sm-4 align-self-center pos-relative'>
        <img src='/img/paperquest.png' class='img-fluid img-floating' style='position: relative'/>
      </div>
    </div>
  </div>
</div>

<div class='section blue-section'>
  <div class='container'>
    <div class='row'>
      <div class='offset-sm-1 col-sm-4 align-self-start pos-relative'>
        <img src='/img/twistAndPulse.png' class='img-fluid img-floating' style='top:-180px'>
      </div>
      <div class='offset-sm-2 col-sm-4'>
        <h1>Twist & Pulse</h1>
        <p class='project-short-description'>The concept of ephemeral adaptation was introduced to reduce visual search time in GUI menus, while preserving spatial consistency and minimizing distraction. We extend this concept to the visual search of app icons on smartphones in order to speed up launching apps from a homescreen</p>
        <link-button text="Shake it up, baby" to='/about'></link-button>
      </div>
    </div>
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

<style lang='scss'>
.header-link{
  color: $text-primary;
  font-size: 16px;
}

.section{
  padding: 120px 0;
}

.blue-section{
  background-color: $section-bg-color;
}

.project-short-description{
  color: $text-secondary;
  text-align: justify;
}

.pos-relative{
  position: relative;
}

.img-floating{
  box-shadow: 0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 12px 17px 2px rgba(0, 0, 0, 0.14);
  position: absolute;
}
</style>
