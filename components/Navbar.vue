<template>
<div class='Navbar'>
  <div class='container'>
    <div class='row align-items-center'>
      <div class='offset-sm-1 col-md-2 col-sm-1'>
        <img src='/img/logo.svg' class='img-fluid'>
      </div>
      <div class='nav offset-sm-4 col-sm-4'>
        <a class='header-link active' href='#about'>ABOUT</a>
        <a class='header-link' href='#projects'>PROJECTS</a>
        <a class='header-link' href='#contact'>CONTACT</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang='scss'>
.Navbar{
  padding: 44px 0;
}

.nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-link{
  padding: 8px 16px;
  color: $text-primary;
  font-size: 16px;
  text-align: center;
}

.header-link.active{
  border-bottom: 3px solid $header-link-underline;
}
</style>