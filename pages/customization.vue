<template>
<div>
  <ProjectHero :image='image' :color='color'/>

  <ProjectTitle :name='name' :title='title' :color='color'/>

  <div class="projectNameMobile" :style='bgStyle'><div class='container'>{{name}}</div></div>
  <div class="projectTitleMobile" :style='bgStyle'><div class='container'>{{title}}</div></div>

  <div class='container projectBody'>
    <div class='row'>
      
      <div class='col-sm-2 order-sm-12'>
        <ProjectLinks :links='links'/>
      </div>

      <div class='offset-sm-1 col-sm-8'>
        
        <h2 class='bodyH2'>Overview</h2>
        <p class="largeText">The settings panel is the standard customization mechanism used in software applications today, yet it has undergone minimal design improvement since its introduction in the 1980s. Entirely disconnected from the application UI, these panels require users to rely on often-cryptic text labels to identify the settings they want to change. Instead, we propose the Anchored Customization approach, which overlays settings directly on top of the application interface. Users can see which UI elements are customizable, and access their associated settings.</p>

        <h2 class='bodyH2'>Process</h2>
        <p class="largeText">I started by surveying a large number of apps, both on the desktop and on
        smartphones, to see which customization mechanisms are offered to users today.
        I found that most apps implement a very similar settings panel, with many
        checkboxes and drop-downs. Unfortunately, these panels have serious
        usability shortcomings: they don't provide affordances, preview, or undo.</p>

        <CenterImage
          image='/img/customization/affinity-diagram.jpg'
          caption='An affinity diagram of all the settings offered in a sample task management app'/>

        <p class="largeText">To address these shortcomings, I had the idea of letting users change directly the app
        interface. After surveying another set of apps to verify that this approach was
        feasible, I designed a direct customization mechanism that maps settings to
        visual elements in the interface.</p>
        
        <CenterImage
          image='/img/customization/sketch1.jpg'
          caption='This early sketch shows different ways of displaying settings on top of the UI: as a popup, a floating sidebar, or a bottom sheet.'/>

        <CenterImage
          image='/img/customization/sketch2.jpg'
          caption='There is a trade-off between showing only the relevant settings vs showing all settings. This sketch shows three possible variants.'/>

        <p class="largeText">I built a web prototype in Angular.js with several
        variants, testing and refining them regularly with users. I managed
        to hook this prototype into Wunderlist, a popular task management app, replacing their
        settings panel with my software. I used this setup to run a remote usability 
        study, recruiting participants on Amazon Mechanical Turk. It showed that two of the three
        variants tested were 35% faster than Wunderlist's settings panel.</p>

        <br>

        <div class='align-top-center'>
          <a href='//youtu.be/3J5Ng5RJ1Ik' target="_blank" class='link-button'>Watch video</a>
        </div>

      </div>

    </div>
  </div>

</div>
</template>
</template>

<script>
import ProjectHero from '~/components/ProjectHero'
import ProjectTitle from '~/components/ProjectTitle'
import ProjectLinks from '~/components/ProjectLinks'
import CenterImage from '~/components/CenterImage'

export default{
  layout: 'project',
  components: {ProjectHero, ProjectTitle, ProjectLinks, CenterImage},
  data () {
    return {
      name: 'Anchored Customization',
      title: 'Anchoring settings to the application UI',
      image: '/img/customization/customization-layer.png',
      color: '#533120',
      links: [
        {
          text: 'video',
          href: '//youtu.be/3J5Ng5RJ1Ik'
        },
        {
          text: 'paper',
          href: '/res/AnchoredCustomization.pdf'
        },
        {
          text: 'slides',
          href: '/res/AnchoredCustomization-slides.pdf'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Anchored Customization'
    }
  },
  computed: {
    bgStyle () {
      if (this.color) {
        return {backgroundColor: this.color}
      }
    }
  }
}
</script>

