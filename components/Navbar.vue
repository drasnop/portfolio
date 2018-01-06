<template>
<div class='Navbar'>
  <div class='container'>
    <div class='row align-items-center'>
      <div class='offset-sm-1 col-sm-2 col-3'>
        <img src='/img/logo.svg' class='img-fluid'>
      </div>
      <div class='nav offset-sm-4 col-sm-4 col-9'>
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
  color: $text-primary;
  text-align: center;
  padding: 4px 4px;
  font-size: 14px;
  @media (min-width: 576px){
    padding: 8px 16px;
    font-size: 16px;
  } 
}

.header-link.active{
  border-bottom: 3px solid $header-link-underline;
}
</style>