<script setup>
  const localePath = useLocalePath();
  useServerSeoMeta({
    title: 'Presto - Home',
    ogTitle: 'Presto - Home',
    description: 'A super app that delivers anything into your doorstep. You order, we serve.',
    ogDescription: 'A super app that delivers anything into your doorstep. You order, we serve.',
    // ogImage: 'https://example.com/image.png',
    // twitterCard: 'summary_large_image',
  })
</script>

<template>
  <div>
    <Navbar activeSection="home"/>
    <HeroSection />
    <About />
    <Numbers />
    <LatestNews />
    <ContactUs />
  </div>
</template>

<style scoped>

</style>