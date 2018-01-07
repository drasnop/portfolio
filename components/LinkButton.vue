<template>
  <nuxt-link class="link-button align-self-center" :to='to'>
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
</style>