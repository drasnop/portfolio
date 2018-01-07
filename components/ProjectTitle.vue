<template>
<div class='pageTitleContainer'>
  <div class='container'>
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
}

.pageTitle{
  color: white;
  margin-top: 24px;
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