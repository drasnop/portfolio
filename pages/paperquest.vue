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

      <h2 class='bodyH2'>Problem</h2>
      <p class="largeText">The literature review is a key component of academic research, that allows researchers to build upon each other’s work. Modern search engines enable fast access to publications, but there is a lack of support for filtering out the vast majority of papers that are irrelevant to the current research focus.</p>

      <h2 class='bodyH2'>Outcome</h2>
      <p class="largeText">PaperQuest is a visualization tool that supports efficient decision making, by only displaying the information useful at a given step of the exploration process. We created a relevance algorithm to find and sort papers that are likely to be relevant to users, based on the papers users have expressed interest in before and the number of citations. The current implementation uses papers from the CHI and UIST conferences, and citation counts from Google Scholar, but is easily extensible to other domains of the literature.</p>

      <h2 class='bodyH2'>Process</h2>
      <p class='largeText'>We began by asking researchers how they do literature reviews, and we found that most were following a very similar process: searching with keywords on Google Scholar, opening papers links in a new tab, reading the abstract and, if the paper seemed interesting, downloading the pdf for reading it later. </p>

      <CenterImage
        image='/img/paperquest/task-description.png'
        caption='Task analysis. We focused on the beginning of the funnel (T1, T2, T3), where researchers gather and filter relevant papers.'/>

      <p class='largeText'>Our goal was to support this lightweight decision process, but make it more powerful by leveraging previous searches and selected papers. Our most important decision was to represent the papers network as a zoomable and ordered list, instead of a traditional node-link diagram. We iterated extensively on: the overall layout of the visualization; the visual encoding of the paper metrics; and the browsing interactions. My friend Pax worked on retrieving the data, processing it and serving it in an Object-Oriented way, while I focused on the UI and the interactions.</p>
    
      <CenterImage
        image='/img/paperquest/sketch.png'
        caption='An early sketch of the UI, showing how papers would be organized in a "core" (left) and a "fringe" (center)'/>

      <CenterImage
        image='/img/paperquest/wireframe.png'
        caption='A wireframe of the same UI a few iterations later. The right sidebar provides aggregate statistics on the papers displayed.'/>

      <CenterImage
        image='/img/paperquest/paperquest.png'
        caption='The final implementation'/>

      <div class='align-top-center'>
        <a href='//paperquest.github.io' target="_blank" class='link-button'>See demo</a>
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
      name: 'PaperQuest',
      title: 'A visualization tool to support literature review',
      image: '/img/paperquest/paperquest.png',
      color: '',
      links: [
        {
          text: 'demo',
          href: '//paperquest.github.io'
        },
        {
          text: 'paper',
          href: '/res/Paperquest.pdf'
        },
        {
          text: 'slides',
          href: '/res/PaperQuest-slides.pdf'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Paperquest'
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

<style lang='scss'>
</style>

