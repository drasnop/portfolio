<template>
<div class='ProjectLinks'>
  <a class='ProjectLink' v-for='link in links' :href='link.href' target='_blank'>{{link.text}}</a>
</div>
</template>

<script>
export default{
  name: 'ProjectLinks',
  props: ['links']
}
</script>

<style lang='scss'>
.ProjectLinks{
  margin-top: 1 * $h2-size-mobile;
  display: flex;
  justify-content: flex-start;
  @media (min-width: $break-small){
    margin-top: 2.5 * $h2-size-desktop;
    position: sticky;
    top: 120px;
    flex-direction: column;
    align-items: center;
  }
}

.ProjectLink{
  color: $link-color;
  display: inline-block;
  font-size: 18px;
  margin-bottom: 8px;
  margin-right: 20px;
  &:hover{
    color: $link-color;
    text-decoration: underline;
  }
  @media(min-width: $break-small){
    display: block;
  }
}
</style>