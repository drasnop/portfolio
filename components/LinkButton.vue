<template>
  <nuxt-link class="link-button" :to='to'>
  {{text}}
  </nuxt-link>
</template>

<script>
export default{
  name: 'link-button',
  props: ['text', 'to']
}
</script>

<style lang='scss'>
.link-button{
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