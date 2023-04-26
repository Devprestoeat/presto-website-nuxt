<template>
  <div class="about">
    <div class="container">
      <div class="wrapper">
      <h2>{{ $t("who_are_we") }}</h2>
      <hr />
      <p>{{ $t("presto_game_changer") }}</p>
      <div class="image"></div>
      <!-- <PrestoButton @click="handleButtonClick">Contact us</PrestoButton> -->
    </div>
    </div>
  </div>
</template>

<script setup>
 
function handleButtonClick() {
  window.scrollTo({
    top: 1500,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
  .about {
    min-height: 420px;
    padding: 60px 0;
    background-image: url('~/assets/img/presto3.jpg');
    background-attachment: scroll;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    position: relative;
  }
  .about .container::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(1px);
    z-index: 0;
  }
  .about .wrapper {
    text-align: center;
    position: relative;
    z-index: 2;
    margin: 0;
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
  .about p {
    max-width: 800px;
    margin: 16px 0 24px;
  }

  .about hr {
    width: 88px;
    border-color: #FF4E02;
    border-width: 2px;
    border-style: solid;
    margin: 0 auto;
    border-radius: 8px;
  }
  .about .container {
    /* padding-top: 90px; */
  }
  @media only screen and (max-width: 1200px) {
    .about {
      text-align: center;
      display: flex;
    }
    hr {
      margin: auto;
    }
    .about .wrapper {
      margin: 0;
      position: static;
      top: 0;
      left: 0;
      -ms-transform: translate(0);
      transform: translate(0);
    }
  }
</style>