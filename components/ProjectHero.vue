<template>
<div>

<nuxt-link to="/" class="backButton col-sm-1">
  <img class="backArrow" src="/img/chevron-left-white.svg" alt="back to home page">
</nuxt-link>

<div class="hero pos-relative">
  <div class='container'>
    <div class='row'>
      <div class="offset-sm-2 col-sm-8">
        <img :src='image' class='img-fluid img-raised'/>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default{
  name: 'project-hero',
  props: ['image']
}
</script>

<style lang='scss'>
.hero{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background-color: $hero-bg-color;
}

.backButton{
  position: fixed;
  left: 0;
  top: 14px;
  height: 60px;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
}

.backArrow{
  width: 24px;
  height: 24px;
}
</style>