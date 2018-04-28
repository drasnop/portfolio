<template>
<div class='Navbar'>
  <div class='container'>
    <scrollactive class='row align-items-center'>
      <div class='offset-sm-1 col-sm-3 col-3'>
        <a class='scrollactive-item' href='#about'>
          <img src='/img/logo.svg' class='logo'>
        </a>
      </div>
      <div class='nav offset-sm-3 col-sm-4 col-9'>
        <a class='nav-item scrollactive-item' href='#about'>ABOUT</a>
        <a class='nav-item scrollactive-item' href='#projects'>PROJECTS</a>
        <a class='nav-item scrollactive-item' href='#contact'>CONTACT</a>
      </div>
    </scrollactive>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang='scss'>
.Navbar{
  padding: 12px 0;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo{
  width: 100%;
  height: auto;
  @media(min-width: $break-small){
    width: 64px;
  }
}

.nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-item{
  color: $text-primary;
  text-align: center;
  border-bottom: 3px solid transparent;
  padding: 4px 4px;
  font-size: 14px;
  @media (min-width: 576px){
    padding: 8px 16px;
    font-size: 17px;
  } 
}

.nav-item.is-active{
  border-bottom: 3px solid $nav-item-underline;
}
</style>