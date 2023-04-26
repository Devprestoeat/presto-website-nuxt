<template>
  <div class="container">
    <div class="left">
      <h2>{{ $t("contact_us") }}</h2>
      <hr />
      <form action="https://formsubmit.co/b13e80b4ad7a8959e8a47906863df992" method="POST">
        <div class="same">
          <div class="name">
            <label for="fname">{{ $t("full_name") }}</label>
            <input type="text" id="fname" name="firstname" :placeholder="t('your_name')">
          </div>
          <div class="email">
            <label for="email">{{ $t("email") }}</label>
            <input type="email" id="email" name="email" :placeholder="t('your_email')">
          </div>
        </div>
        <label for="message">{{ $t("msg") }}</label>
        <textarea name="message" form="usrform" id="message" :placeholder="t('enter_message_here')"></textarea>
        <div class="button">
          <PrestoButton>{{ $t("send") }}</PrestoButton>
        </div>
      </form>
    </div> 
    <!-- <div class="information"> -->
      <!-- <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
      src="https://maps.google.com/maps?q=%D9%84%D9%8A%D8%A8%D9%8A%D8%A7%D8%8C%20%D8%B7%D8%B1%D8%A7%D8%A8%D9%84%D8%B3
      &amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="ليبيا، طرابلس" aria-label="ليبيا، طرابلس"></iframe> -->
      <!-- <img src="../assets/images/map.png" width="414" alt=""> -->
    <!-- </div> -->
  </div>
</template>

<script setup>
const {t} = useI18n();
</script>

<style scoped>
  .container {
    display: flex;
    margin-top: 120px;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    width: 100%;
  }
  input, select, textarea {
    width: 100%;
    padding: 12px 16px;
    margin: 6px 0 16px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  textarea {
    height: 100px;
  }
  .same {
    display: flex;
    gap: 16px;
    width: 100%;
  }
  .same div {
    width: 100%;
  }

  hr {
    width: 88px;
    border-color: #FF4E02;
    border-width: 2px;
    border-style: solid;
    /* margin: 0 auto; */
    border-radius: 8px;
    margin-bottom: 32px;
  }

  .information {
    width: 414px;
    height: 269px;
    background-image: url('../assets/images/map.png');
    background-size: cover;
    position: relative;
    border-radius: 8px;
  }
  .information::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 12px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Change the opacity to adjust the overlay */
    background: linear-gradient(180.68deg, rgba(0, 64, 125, 0) 10.47%, #00407D 99.41%);
    z-index: 1;
  }
  @media only screen and (max-width: 600px) {
    .same {
      flex-direction: column;
      gap: 0
    }
    .container {
      flex-direction: column;
    }
    .container .information {
      width: 100%;
      margin-top: 90px;
    }
  }
</style>
