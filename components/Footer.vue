<template>
  <div class="container">
    <h2>{{ $t("download_the_app") }}</h2>
    <div class="buttons-parent"> 
      <DownloadButton type="google-play"/>
      <DownloadButton type="app-store"/>
    </div>
    <footer>
      <p class="copyright">
        <span>{{ $t("all_rights_reserved") + ' ' + currentYear}}</span>
        <NuxtLink :to="localePath('/privacy-policy')">{{ $t("privacy_policy") }}</NuxtLink>
      </p>
      <div class="social-icons">
        <a href="https://www.instagram.com/presto_eat/" target="_blank">
          <img src="~/assets/svg/instagram.svg" alt="Instagram">
          
        </a>
        <a href="https://twitter.com/presto_eat" target="_blank">
          <img src="~/assets/svg/twitter.svg" alt="Twitter">
        </a>
        <a href="https://www.facebook.com/PrestoEat2020/" target="_blank">
          <img src="~/assets/svg/facebook.svg" alt="Facebook">
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>

const currentYear = new Date().getFullYear();
const localePath = useLocalePath();


</script>

<style scoped>
  .container {
    margin-top: 120px;
    flex-shrink: 0; /* don't shrink to fit content */
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
  }

  .container h2 {
    margin-bottom: 16px;
    
  }

  footer {
    border-top: 1px solid #F2F3F3;
    width: 100%;
    min-height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    
  }

  .copyright{
    display: flex;
    flex-direction: column;
  }

  .buttons-parent {
    display: flex;
    gap: 16px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .col-6 {
    flex-basis: 50%;
    text-align: left;
  }

  .social-icons {
    text-align: right;
  }

  .social-icons a {
    display: inline-block;
    margin-left: 28px;
    color: #F2F3F3;
    transition: all 0.2s ease-in-out;
  }

  .social-icons img {
    width: 32px;
  }

  .social-icons img:nth-child(2) {
    width: 12px;
  }
  .social-icons a {
    color: #333;
  }
  .social-icons a:hover {
    opacity: .8;
  }

  .fab {
    font-size: 24px;
  }


  @media only screen and (max-width: 600px) {
    .buttons-parent {
      align-items: center;
      flex-direction: column;
      margin: auto;
    }
    .container {
      text-align: center;
    }
    footer {
      flex-direction: column-reverse;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }

</style>