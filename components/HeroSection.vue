<template>
  <div class="container">
    <img src="~/assets/svg/bg-blured.svg" class="bg-blured" />
    <div class="first animate__animated animate__fadeInLeft">
        <!-- <Badge alt="download icon" :src="require(`../assets/images/sky.png`)" text="+500,000 Downloads" /> -->
        <h1>{{ $t("slogen") }} <span :class="{'animate__fadeIn': showSpecialWord}" class="special-word">{{specialWord}}</span> </h1>  
        <p>{{ $t("slogen_text") }}</p>
        <div class="buttons-parent"> 
          <DownloadButton type="google-play"/>
          <DownloadButton type="app-store"/>
        </div>
    </div>
    <div class="last">
        <img src="~/assets/img/hero-phone-logo.png" alt="Image for the presto app" />
    </div>
  </div>
</template>


 
<script setup>
// Start Word Animation
const { t } = useI18n();
  
let specialWords = [delayedExecution(t, "speed"), delayedExecution(t,"excellence"), delayedExecution(t,"convenience"), delayedExecution(t,"quality")];
let specialWord = ref(t('quality'));
let showSpecialWord = ref(false);
let index = 0;

function delayedExecution(func, ...args) {
  return function() {
    return func(...args);
  };
}
  
function changeSpecialWord() {
  index = (index === specialWords.length - 1) ? 0 : index + 1;
  specialWord.value = specialWords[index]();
  showSpecialWord.value = true;
  setTimeout(() => {
    showSpecialWord.value = false;
  }, 2000);
}
onMounted(() => {
  setInterval(() => {
    changeSpecialWord();
  }, 3000);
})
// End Word Animation

  

  
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 60px;
    margin-bottom: 150px;
  }
  .first h1{
    margin-top: 20px;
    margin-bottom: 4px;
  }
  .first p{
    font-size: 16px;
    color: #596168;
    margin-bottom: 40px;
    max-width: 640px;
  }
  .buttons-parent{
    display: flex;
    gap: 16px;
  }
  .container .last {
    z-index: 999;
  }
  .container .first {
    z-index: 999;
  }
  .last img {
    width: 360px;
  }
  
  .special-word {
    position: relative;
  }

  h1 span {
    display: inline-block;
    /* min-width: 300px; */
  }
  .animate__fadeIn {  
    animation-name: fadeIn;
    animation-duration: .5s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      bottom: -10px
    }
    to {
      opacity: 1;
      bottom: 0px
    }
  }
  @media screen and (max-width: 600px) {
    .last img {
      width: 400px;
      width: 60vw;
    }
    .buttons-parent {
      flex-direction: column;
    }
  }
  @media only screen and (min-width: 100px) {
    .container{
      flex-direction: column;
      position: relative;
    }
    .container .bg-blured {
      position: absolute;
      right: -50px;
      top: -200px;
    }
    .container .first{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1{
      text-align: center;
    }
    p{
      text-align: center;
    }
  }
  
  @media only screen and (min-width: 1200px) {
    .container{
      flex-direction: row;
    }
    .container .first{
        align-items: flex-start;
    }
    h1{
      text-align: start;
    }
    p{
      text-align: start;
    }
  }

</style>