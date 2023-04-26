<template>
  <!-- <Navbar brand="Presto" :menuItems="menuItems" :activeSection="activeSection"/> -->
  <SectionSeperator h="48" />
  <NuxtPage />
  <Footer />
</template>

<script setup>
const {locale} = useI18n();

onMounted(() => {
  if(locale.value == 'ar') document.body.style.direction = 'rtl';
  if(locale.value == 'en-US') document.body.style.direction = 'ltr';
})

// useHead({
//   link: [
//     {
//       rel: 'preconnect',
//       href: 'https://fonts.googleapis.com'
//     },
//     {
//       rel: 'stylesheet',
//       href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
//       crossorigin: ''
//     }
//   ]
// })
</script>

<style>

  /* Extra small devices (phones, 600px and down)
@media only screen and (max-width: 600px) {...}
Small devices (portrait tablets and large phones, 600px and up)
@media only screen and (min-width: 600px) {...}
Medium devices (landscape tablets, 768px and up)
@media only screen and (min-width: 768px) {...}
Large devices (laptops/desktops, 992px and up)
@media only screen and (min-width: 992px) {...}
Extra large devices (large laptops and desktops, 1200px and up)
@media only screen and (min-width: 1200px) {...} */

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}

@font-face {
  font-family: 'Somar Sans';
  src: url('./assets/fonts/SomarSans-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
  
@font-face {
  font-family: 'Somar Sans';
  src: url('./assets/fonts/SomarSans-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
  
@font-face {
  font-family: 'Somar Sans';
  src: url('./assets/fonts/SomarSans-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
  
@font-face {
  font-family: 'Somar Sans';
  src: url('./assets/fonts/SomarSans-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}
  
@font-face {
  font-family: 'Somar Sans';
  src: url('./assets/fonts/SomarSans-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

* {
  padding:0;
  margin:0;
  box-sizing:border-box;
  font-family: 'Somar Sans', Helvetica, Arial, sans-serif;
}

body {
  direction: ltr;
}

a {
  color: grey !important;
}


.page {
  overflow-x: hidden;
  position: relative;
  min-height: 100vh; /* set minimum height to viewport height */
  position: relative;
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #FF4E02;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

html {
  -webkit-scroll-behavior:smooth;
  -moz-scroll-behavior:smooth;
  scroll-behavior:smooth
}

:root {
  --primaryColor:#FF4E02;
  --grayColor:#2c3e50;
  --whiteColor:#FFF
}
  
body {
  margin: 0;
  padding: 0;
  /* height: 3000px; */
  overflow-x: hidden;
}
  
h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: blue;
}

h1 {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.4;
}

.container {
  max-width: 84rem;
  margin: auto;
  padding: 0 20px;
}

h1 {
  font-size: 44px;
  font-weight: 800;
  line-height: 1.4;
}

h2 {
  font-size: 32px;
  line-height: 1.4;
}

.hero-section {
  margin: 200px auto;
}

.teasing-continuation-img {
  width: 100%;
  height: 310px;
  object-fit: cover;
  border-radius: 16px;
}
</style>