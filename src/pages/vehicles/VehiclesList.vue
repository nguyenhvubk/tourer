<template>
  <h1 class="title is-4">Your vehicles list</h1>
  <div class="columns is-multiline is-mobile">
    <vehicle-card
      v-for="vehicle in vehicles"
      :key="vehicle.id"
      :vehicle="vehicle"
    />
  </div>
</template>

<script>
import VehicleCard from "./VehicleCard.vue";
export default {
  components: {
    VehicleCard,
  },
  data() {
    return this.$store.state.vehicles;
  },
  methods: {
    
  }
};
</script>