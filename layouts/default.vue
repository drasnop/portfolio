<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang='scss'>

html {
  font-family: "Open Sans", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button{
  text-decoration: none;
  display: inline-block;
  color: $button-color;
  background-color: $button-bg-color;
  padding: 8px 16px;
  border-radius: 100px;
  box-shadow: $elevation-1;
  &:hover{
    box-shadow: $elevation-2;
  }
}
</style>
