<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang='scss'>

body {
  font-family: "Open Sans", Roboto, "Helvetica Neue", Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

a:hover{
  text-decoration: none;
}

.img-fluid{
  max-width: 100%;
  height: auto;
}

.img-raised{
  box-shadow: 0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 12px 17px 2px rgba(0, 0, 0, 0.14);
}

.pos-relative{
  position: relative;
}

.align-center{
  text-align: center;
}

.bodyH2{
  margin-top: 2em;
  font-size: 22px;
  @media (min-width: $break-small){
    font-size: 24px;
  }
}

.largeText{
  font-size: 16px;
  @media (min-width: $break-small){
    font-size: 20px;
  }
}

.link-button{
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  color: $button-color;
  background-color: $button-bg-color;
  padding: 8px 16px;
  border-radius: 100px;
  box-shadow: $elevation-1;
  &:hover{
    box-shadow: $elevation-2;
    color: $button-color;
  }
}
</style>
