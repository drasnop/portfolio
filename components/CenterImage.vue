<template>
<div class="CenterImage">
  <img :src='image' class='img-fluid'>
  <div class='caption'>{{caption}}</div>
</div>
</template>

<script>
export default{
  name: 'CenterImage',
  props: ['image', 'caption']
}
</script>

<style lang='scss'>
.CenterImage{
  padding: 36px 0;
}

.caption{
  text-align: center;
  color: $text-caption;
  margin-top: 14px;
}
</style>