<template>
  <div class="container" id="numbers" >
    <div class="card">
      <p>{{ $t("delivered_orders") }}</p>
      <h2>{{ totalOrders }}M+</h2>
    </div>
    <div class="card">
      <p>{{ $t("users") }}</p>
      <h2>{{ totalUsers }}K+</h2>
    </div>
    <div class="card">
      <p>{{ $t("drivers") }}</p>
      <h2>{{ totalDrivers }}K+</h2>
    </div>
  </div>
</template>

<script setup>

let count = 100;
let totalUsers = ref(398.1);
let totalDrivers = ref(9.1);
let totalOrders = ref(2.2);
  
function increaseNumber() {
  const intervalId = setInterval(() => {
    if (count < 500) {
      this.count += 10;
    } else {
      clearInterval(intervalId);
    }
  }, 100);
}
    
onMounted(() => {
  // Make an API call to fetch the data
  fetch('https://sys.prestoeat.com/api/v2/statistics')
    .then(response => response.json())
    .then(data => {
      // Set the data in the component's data object
      totalUsers.value = data.data.total_users_in_thousands.toFixed(1);
      totalDrivers.value = data.data.total_drivers_in_thousands.toFixed(1);
      totalOrders.value = data.data.total_orders_in_millions.toFixed(1);
    })
    .catch(error => console.e)
})
</script>

<style scoped>

  .container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    margin-top: 120px;
    margin-bottom: 120px;
  }

  .container .card {
    background-color: #EFF6FC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    flex-grow: 1;
    border-radius: 16px;
  }
  .card p {
    text-align: center;
    color: #155899;
  }
  .card h2 {
    font-size: 45px;
    line-height: 158.1%;
    color: #202020;
  }

  @media screen and (max-width: 800px) {
    .container {
      flex-direction: column;
      gap: 28px;
    }
    .container .card {
      width: 100%;
    }
  }

</style>