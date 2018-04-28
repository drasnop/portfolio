<template>

<div class='pageTitleContainer' :style='bgStyle'>
  <div class='container'>
    <div class='row'>
      <div class="pageTitle offset-sm-1">
        <div class='center-align'>
          <div class="projectName">{{name}}</div>
          <div class="projectTitle">{{title}}</div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default{
  name: 'ProjectTitle',
  props: ['name', 'title', 'color'],
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

.pageTitleContainer{
  position: sticky;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: $hero-bg-color;
  display: none;
  @media (min-width: $break-small){
    display: block;
  }
}

.center-align{
  text-align: center;
}

.pageTitle{
  color: white;
  padding: 24px 15px;
}

.projectName{
  display: inline-block;
  font-family: Merriweather;
  font-size: 2em;
  @media (min-width: $break-small){
    margin-right: 30px;  
  }
}

.projectTitle{
  font-size: 22px;
  display: inline-block;
  opacity: .7;
  font-weight: normal;
}
</style>