<template>
<div class="hero pos-relative">
  <nuxt-link to="/" class="backButton col-sm-1">
    <img class="backArrow" src="/img/chevron-left-white.svg" alt="back to home page">
  </nuxt-link>

  <div class='container'>
    <div class='row'>
      <div class="offset-sm-2 col-sm-8">
        <img :src='image' class='img-fluid img-raised'/>
      </div>
    </div>
  </div>

  <div class='container pageTitleContainer'>
    <div class='row'>
      <div class="offset-sm-1 col-sm-10">
        <div class="pageTitle">
          <span class="projectName">{{name}}</span>
          <span class="projectTitle">{{title}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{
  name: 'project-hero',
  props: ['name', 'title', 'image']
}
</script>

<style lang='scss'>
.hero{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: $hero-bg-color;
}

.backButton{
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.backArrow{
  width: 24px;
  height: 24px;
}

.pageTitleContainer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.pageTitle{
  color: white;
  margin-bottom: 24px;
  font-size: 26px;
}

.projectName{
  font-weight: bold;
}

.projectTitle{
  opacity: .7;
  font-weight: normal;
  margin-left: 2em;
}
</style>