<template>
<nuxt/>
</template>

<style lang='scss'>
.projectNameMobile{
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: $hero-bg-color;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 12px;
  display: block;
  @media (min-width: $break-small){
    display: none;
  }
}

.projectTitleMobile{
  color: rgba(255,255,255,.7);
  font-size: 20px;
  text-align: center;
  padding-bottom: 12px;
  background-color: $hero-bg-color;
  display: block;
  @media (min-width: $break-small){
    display: none;
  }
}

.projectBody{
  margin-top: 24px;
  margin-bottom: 60px;
}
</style>