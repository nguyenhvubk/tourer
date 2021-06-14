<template>
  <div class="columns">
    <div class="column">
      <vehicle-card />
    </div>
    <div class="column">
      <vehicle-card />
    </div>
    <div class="column">
      <vehicle-card />
    </div>
    <div class="column">
      <vehicle-card />
    </div>
  </div>
</template>

<script>
import VehicleCard from "./VehicleCard.vue";
export default {
  components: {
    VehicleCard,
  },
};
</script>