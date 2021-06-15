<template>
  <div v-if="vehicle && vehicle.id === id">
    <h1 class="title is-4">{{ vehicle.brand + ' ' + vehicle.name }}</h1>
    <p>Vehicle ID: {{ id }}</p>
    <vehicle-card :vehicle="vehicle" />
  </div>
</template>

<script>
import VehicleCard from './VehicleCard.vue';

export default {
  props: ['id'],
  components: {
    VehicleCard
  },
  data() {
    return this.$store.state.vehicles; // OK
    // return {
    //   vehicle: {},
    // }
  },
  created() {
    this.getVehicleByID(this.id);
    // this.getVehicleByID(this.id).then(this.vehicle = this.$store.getters['vehicles/one'])
  },
  methods: {
    async getVehicleByID(id) {
      await this.$store.dispatch('vehicles/getVehicleById', id);
    }
  }
};
</script>
