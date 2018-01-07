<template>
<div class='pageTitleContainer'>
  <div class="pageTitle">
    <div class="projectName">{{name}}</div>
    <div class="projectTitle">{{title}}</div>
  </div>
</div>
</template>

<script>
export default{
  name: 'project-title',
  props: ['name', 'title']
}
</script>

<style lang='scss'>
.pageTitleContainer{
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: $hero-bg-color;
  text-align: center;
}

.pageTitle{
  color: white;
  padding: 24px 0;
  font-size: 26px;
}

.projectName{
  display: inline-block;
  font-weight: bold;
  @media (min-width: $break-small){
    margin-right: 2em;  
  }
}

.projectTitle{
  display: inline-block;
  opacity: .7;
  font-weight: normal;
}
</style>