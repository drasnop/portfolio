<template>
<div>

<div class="hero pos-relative">
  <div class='container' style='z-index: 110'>
    <div class='row'>
      <div class="offset-sm-2 col-sm-8">
        <img :src='image' class='img-fluid img-raised'/>
      </div>
    </div>
  </div>
  <nuxt-link to="/" class="backButton col-sm-1 col-3">
    <img class="backArrow" src="/img/chevron-left-white.svg" alt="back to home page">
  </nuxt-link>
</div>

</div>
</template>

<script>
export default{
  name: 'ProjectHero',
  props: ['image']
}
</script>

<style lang='scss'>
.hero{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $hero-bg-color;
  min-height: 60vh;
  @media (min-width: $break-small){
    min-height: 70vh;
  }
}

.backButton{
  position: fixed;
  left: 0;
  top: -2px;
  height: 60px;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: $break-small){
    top: 14px;
  }
}

.backArrow{
  width: 24px;
  height: 24px;
}
</style>