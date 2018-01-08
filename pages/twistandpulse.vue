<template>
<div>
  <ProjectHero :image='image'/>

  <ProjectTitle :name='name' :title='title'/>

  <div class="projectNameMobile">{{name}}</div>
  <div class="projectTitleMobile">{{title}}</div>

  <div class='container projectBody'>
    <div class='row'>
      
      <div class='col-sm-2 order-sm-12'>
        <ProjectLinks :links='links'/>
      </div>

      <div class='offset-sm-1 col-sm-8'>

        <CenterImage
          image='/img/twistandpulse/exploration.png'
          caption='The final implementation'/>

        <div class='align-top-center'>
          <a href='//youtu.be/EhsgFFhHUuA' target="_blank" class='link-button'>Watch video</a>
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
      name: 'Twist & Pulse',
      title: 'Ephemeral adaptation to improve icon selection',
      image: '/img/twistandpulse/twistAndPulse.png',
      links: [
        {
          text: 'video',
          href: '//youtu.be/EhsgFFhHUuA'
        },
        {
          text: 'paper',
          href: '/res/TwistAndPulse.pdf'
        },
        {
          text: 'slides',
          href: '/res/TwistAndPulse-slides.pdf'
        }
      ]
    }
  },

  head () {
    return {
      title: 'Twise & Pulse'
    }
  }
}
</script>

