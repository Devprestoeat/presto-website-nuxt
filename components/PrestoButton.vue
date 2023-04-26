<template>
  <button class="presto-button">
    <slot></slot>
  </button>
</template>

<script setup>

</script>

<style scoped>
.presto-button {
  border-radius: 8px;
  background-color: #FF4E02;
  color: #fff;
  height: 48px;
  min-width: 180px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); */
  transition: all 0.2s ease-in-out;
}

.presto-button:hover {
  background-color: #E34300;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3  ); */
}
</style>