<template>
<div class='Contact' id="contact">
  <div class='container'>
    <div class='row vertically-center'>
      <div class='offset-sm-1 col-sm-4 contactText'>For more information, here is <a class='contactLink' href='/res/Resume-Antoine-Ponsard.pdf' target="_blank">my resume</a>. I'm always happy to get together for a cup of coffee, so drop me a line!</div>
      <div class='offset-sm-2 col-sm-4 socialAccounts'>
        <a href='//ca.linkedin.com/in/antoineponsard' target='_blank'>
          <img class="socialIcon" src='/icons/linkedin.svg'  alt='LinkedIn page'>
        </a>
        <a href='//twitter.com/antoineponsard' target='_blank'>
          <img class="socialIcon" src='/icons/twitter-square.svg'  alt='Twitter page'>
        </a>
        <a href='https://github.com/drasnop' target='_blank'>
          <img class="socialIcon" src='/icons/github-square.svg'  alt='Github page'>
        </a>
        <a href='mailto:bycdmcyigbas@gmail.com' target='_blank'>
          <img class="socialIcon" src='/icons/envelope-square.svg'  alt='Email me'>
        </a>
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
.Contact{
  background-color: $contact-bg-color;
  padding: 92px 0;
  display: flex;
  align-items: center;
}

.contactText{
  color: rgba(255,255,255,.7);
}

.contactLink{
  color: #FF7DA0;
  &:hover{
    color: #FF7DA0;
    text-decoration: underline;
  }
}

.socialAccounts{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 42px;
  @media(min-width: $break-small){
    margin-top: 0;
  }
}

.socialIcon{
  cursor: pointer;
  width: 32px;
  fill: white;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
}
</style>