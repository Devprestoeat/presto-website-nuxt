<template>
  <div :style="'height:' + h + 'px'"></div>
</template>

<script setup>
const props = defineProps({
  h: {
    type: Number,
    default: 80,
  }
})
</script>


<style scoped>
  div {
    height: 80px;
  }
</style>