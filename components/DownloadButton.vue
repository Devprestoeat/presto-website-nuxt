<template>
  <a target="_blank" :href="this.type == 'google-play' ? 'https://play.google.com/store/apps/details?id=com.prestoeat&hl=en_US&gl=US' : 'https://apps.apple.com/sa/app/presto-eat/id1541482521'">
    <img v-if="this.type == 'google-play'" src="~/assets/svg/google-play-logo.svg" />
    <img v-if="this.type == 'app-store'" src="~/assets/svg/apple-logo.svg" />
    <div class="parent-text">
      <p class="sub-text">{{ $t("download_from") }}</p>
      <p class="main-text">
        <span v-if="this.type == 'google-play'">Google Play</span>
        <span v-if="this.type == 'app-store'">App Store</span>
      </p>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>
  a {
    display: block;
    background-color: black;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 8px 0;
    justify-content: center;
    min-width: 230px;
    border-radius: 8px;
    transition: .1s;
    cursor: pointer;
  }
  a:hover {
    opacity: 0.9;
  }
  a .parent-text {
    text-align: start;
    padding-inline-start: 8px;
    
  }
  a .parent-text .sub-text {
    font-size: 12px;
    opacity: 0.5;
    margin-bottom: -4px;
    color: white
  }
  a .parent-text .main-text {
    font-size: 22px;
    font-weight: 400;
    color: white
  }
</style>