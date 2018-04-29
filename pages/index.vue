<template>
<div>

<Logo></Logo>

<div class="navbar-offset" id='about'/>
<Navbar/>

<div class='section'>
  <div class='container'>
    <div class='row'>
      <div class='project-text offset-sm-1 col-sm-4'>
        <h1>Hi, I'm Antoine!</h1>
        <p class='project-short-description'>I'm a programmer and UX designer with a passion for simplifying complex user flows into clean and effective interfaces. I have extensive experience building working prototypes with modern technologies for feedback and testing.</p>
      </div>

      <div class='offset-sm-2 col-sm-4 align-self-end pos-relative'>
        <img src='/img/antoine-small.jpg' class='img-fluid img-sizing'>
        <img src='/img/antoine-small.jpg' class='img-fluid img-raised img-floating antoine-picture' style='left:15px'>
      </div>
    </div>
  </div>
</div>

<div id="projects">

<div class='section blue-section'>
  <div class='container'>
    <div class='row align-items-center extra-padding-top'>
      <div class='project-text offset-sm-1 col-sm-5 order-sm-12'>
        <h2>Xodo</h2>
        <p class='project-short-description'>Xodo is a cross-platform app for reading, annotating, and collaborating on documents. It has millions of users and a 4.7 out of 5 rating in the Google PlayStore. I am leading the design of a brand new version of the app (in beta now), which will significantly expand its collaboration capabilities. I tackle a wide range of challenges, from product direction to user flows, wireframes, and visual identity.</p>
        <div class="link-button align-self-center" text="Don't click this button" @click='xodoAlert'>Don't click this button</div>
      </div>
      <div class='offset-sm-1 col-sm-4 order-sm-1 pos-relative'>
        <img src='/img/xodo-small.png' class='img-fluid img-raised xodo-img'>
      </div>
    </div>
  </div>
</div>

<div class='section'>
  <div class='container'>
    <div class='row align-items-center'>
      <div class='project-text offset-sm-1 col-sm-4'>
        <h2>PaperQuest</h2>
        <p class='project-short-description'>The literature review is a key component of academic research, that allows researchers to build upon each other’s work. PaperQuest is a visualization tool that supports efficient decision making, by only displaying the information useful at a given step of the exploration process.</p>
        <link-button text="What is your quest?" to='/paperquest'></link-button>
      </div>
      <div class='offset-sm-1 col-sm-5 pos-relative'>
        <nuxt-link to='/paperquest'>
          <img src='/img/paperquest-small.png' class='img-fluid img-raised'/>
        </nuxt-link>
      </div>
    </div>
  </div>
</div>

<div class='section blue-section'>
  <div class='container'>
    <div class='row align-items-center'>
      <div class='project-text offset-sm-1 col-sm-4 order-sm-12'>
        <h2>Anchored Customization</h2>
        <p class='project-short-description'>Settings panels are the most common customization mechanism in today's
        software. Yet it is often difficult to find the setting you are looking for. I solve this problem by introducing the customization layer, which overlays settings directly on top of the application interface. </p>
        <link-button text="Customize all the things" to='/customization'></link-button>
      </div>
      <div class='offset-sm-1 col-sm-5 order-sm-1 pos-relative'>
        <nuxt-link to='/customization'>
          <img src='/img/customization-small.png' class='img-fluid img-raised'>
        </nuxt-link>
      </div>
    </div>
  </div>
</div>

<div class='section'>
  <div class='container'>
    <div class='row align-items-center'>
      <div class='project-text offset-sm-1 col-sm-4'>
        <h2>Twist & Pulse</h2>
        <p class='project-short-description'>The concept of ephemeral adaptation was introduced to reduce visual search time in GUI menus, while preserving spatial consistency and minimizing distraction. We extend this concept to the visual search of app icons on smartphones in order to speed up launching apps from a homescreen.</p>
        <link-button text="Shake it up, baby" to='/twistandpulse'></link-button>
      </div>
      <div class='offset-sm-1 col-sm-5 pos-relative'>
        <nuxt-link to='/twistandpulse'>
          <img src='/img/twistAndPulse.png' class='img-fluid img-raised'>
        </nuxt-link>
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
  },
  methods: {
    xodoAlert () {
      alert('I told you not to click :)\n\nThis project is under development and not publicly released yet. Please contact me directly for more details.')
    }
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
  background-color: hsla(199, 30%, 98%, 1);
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
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
  font-style: 16px;
  line-height: 1.6em;
}

.antoine-picture{
  bottom:-80%;
  @media (max-width: $break-small){
    bottom: -80%;
  }
}

img.xodo-img{
  @media (min-width: $break-small){
    max-width: 75%;
    left:7%;
    position: relative;
  }
}

</style>
