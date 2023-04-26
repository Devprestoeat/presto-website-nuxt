<template>
  <div>
    <div class="nav-placeholder"></div>
    <nav>
      <div class="nav-wrapper container">
        <NuxtLink :to="localePath('/')">
          <img src="~/assets/svg/presto_logo.svg" />
        </NuxtLink>
        <ul class="menu right hide-on-med-and-down">
          <li :class="{ active: activeSection === 'home' }"><NuxtLink :href="localePath('/')">{{ $t("home") }}</NuxtLink></li>
          <li :class="{ active: activeSection === 'news' }"><NuxtLink :href="localePath('/news')">{{ $t("news") }}</NuxtLink></li>
          <!-- <li :class="{ active: activeSection === 'about' }"><NuxtLink :href="localePath('/about')">{{ $t("about") }}</NuxtLink></li> -->
        </ul>
        <div class="language" @click="changeLang()">
          <span>{{ $t("lang_switcher") }}</span>
          <img src="~/assets/svg/earth.svg" />
        </div>
      </div>
      <div class="menu-icon" @click="showSidebar()">
        <img src="~/assets/svg/hambergur-menu.svg" />
      </div>
    </nav>
    <div class="sidenav mobile-menu" id="mobile-menu">
      <ul>
        <li :class="{ active: activeSection === 'home' }"><NuxtLink :href="localePath('/')">{{ $t("home") }}</NuxtLink></li>
        <li :class="{ active: activeSection === 'news' }"><NuxtLink :href="localePath('/news')">{{ $t("news") }}</NuxtLink></li>
      </ul>
      <div class="language language-mobile" @click="changeLang()">
        <span>{{ $t("lang_switcher") }}</span>
        <img src="~/assets/svg/earth.svg" />
      </div>
    </div>
    <div class="screen-overlay" @click="showSidebar()"></div>
  </div>
</template>

<script setup>


const localePath = useLocalePath();
const { locales, locale, setLocale } = useI18n();

const props = defineProps({
  activeSection: {
    type: String,
  }
})


function showSidebar() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const screenOverlay = document.querySelector('.screen-overlay');
  mobileMenu.classList.toggle('open');
  screenOverlay.classList.toggle('open');
}
function changeLang() {
  if(locale.value == 'ar') {  
    setLocale('en-US'); 
    document.body.style.direction = 'ltr';
  }
  if(locale.value == 'en-US') {
    setLocale('ar');
    document.body.style.direction = 'rtl';
  }
}

</script>

<style scoped>
nav {
  background-color: #333;
}

.nav-placeholder {
  height: 80px;
}
.sidenav {
  display: flex;
  justify-content: space-between;
}
.mobile-menu ul {
  display: flex;
  flex-direction: column;
}
.mobile-menu li a {
  display: block;
  margin-top: 24px;
  font-size: 16px;
  text-align: center;
}
nav {
  height: 80px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.container {
  padding: 0 !important;
}

nav .brand-logo {
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 8px
}

.language{
  display: flex;
  cursor: pointer;
  gap: 4px;
  width: 130px;
  justify-content: flex-end;
}
.language svg{
  flex-shrink: 0;
  margin-right: 4px;
  color: #202020;
}
.language span{
  font-weight: 500;
}
.language-mobile {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

ul li {
  margin: 0 1rem;
}

a {
  color: #596168 !important;
  font-size: 16px;
  text-decoration: none;
}

ul li.active a {
  color: #FF4E02 !important;
  font-weight: 500;
}

.mobile-menu {
  display: none;
  background: white;
  width: 250px;
  position:fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 9999;
  transition: .2s;
  transform: translateX(250px);
}

.mobile-menu.open {
  transform: translateX(0);
}

.screen-overlay {
  display: none;
  background: rgba(0, 0, 0, 0.247);
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9998;
  opacity: 0;
  transition: .5s;
}

.sidenav-trigger i {
  color: #000;
  font-size: 2rem;
  cursor: pointer;
  display: none;
}

.menu-icon {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .language {
    display: none;
  }
  .language-mobile {
    display: flex;
    width: auto;
  }
  .screen-overlay.open {
    display: block;
    opacity: 1;
  }
  .menu-icon {
    display: block;
  }
  .mobile-menu {
    display: flex;
    flex-direction: column;
    
  }
  .screen-overlay {
    display: none;
  }
  .menu {
    display: none;
  }
  .sidenav-trigger i {
    display: block;
  }
}

.nav-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  color: #333;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  z-index: 9996;
  border-bottom: 1.5px solid #F2F3F3;
}

.nav-hide {
  transform: translateY(-80px);
  box-shadow: #333;
}


</style>