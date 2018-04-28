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
        <p class="largeText">The concept of ephemeral adaptation was introduced to reduce visual search time in GUI menus, while preserving spatial consistency and minimizing distraction. We extend this concept to the visual search of app icons on smartphones in order to speed up launching apps from a homescreen. We created ephemeral highlighting effects based on preattentive visual properties including size, orientation, color, opacity and blur. A controlled experiment showed that Twist (icon rotates back and forth) and Pulse (icon grows and shrinks) improve search time performance by 8-10% over a control condition with no highlighting.</p>

        <h2 class='bodyH2'>Process</h2>
        <p class="largeText">To find inspiration on new ways to launch apps on smartphones, we surveyed many custom Android homescreens and themes, looking at the type of icons, widgets and animations they were using. Given the growing number of apps that people install on their phone, we decided to focus on helping users find the app they're looking for faster.</p>

        <CenterImage
          image='/img/twistandpulse/exploration.png'
          caption='An early exploration of different animations that could be used to highlight one icon. Three states are represented: before, during, and after the animation.'/>

        <p class="largeText">We prototyped some visual effects with PowerPoint, but quickly realized that we needed more power and control on the animations. We then built an Android app mimicking a traditional homescreen, with a variety of highlighting effects that we tested on potential users. Finally we designed and ran a controlled experiment on the two most promising effects.</p>
        
        <br>

        <div class='align-top-center'>
          <a href='//youtu.be/EhsgFFhHUuA' target="_blank" class='link-button'>Watch video</a>
        </div>

      </div>

    </div>
  </div>

<Contact/>

</div>
</template>

<script>
import ProjectHero from '~/components/ProjectHero'
import ProjectTitle from '~/components/ProjectTitle'
import ProjectLinks from '~/components/ProjectLinks'
import CenterImage from '~/components/CenterImage'
import Contact from '~/components/Contact'

export default{
  layout: 'project',
  components: {ProjectHero, ProjectTitle, ProjectLinks, CenterImage, Contact},
  data () {
    return {
      name: 'Twist & Pulse',
      title: 'Ephemeral adaptation to improve icon selection',
      image: '/img/twistandpulse/twistAndPulse.png',
      color: '#999999',
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

