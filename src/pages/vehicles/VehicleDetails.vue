<template>
    <vehicle-card :vehicle="vehicle"/>
  
</template>

<script>
import VehicleCard from "./VehicleCard.vue";

export default {
  props: ['id'],
  components: {
    VehicleCard,
  },
  data () {
    return {
      vehicle: {},
      vehicles: this.$store.getters['vehicles/all']
    }
  },
  created(){
    this.vehicle = this.vehicles.find(v => v.id === this.id)
  }
};
</script>
