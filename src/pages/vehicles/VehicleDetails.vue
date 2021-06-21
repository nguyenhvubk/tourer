<template>
  <div v-if="vehicle && vehicle.id === id">
    <!-- <p>For debug: Vehicle ID: {{ id }}</p> -->
    <vehicle-form />
  </div>
  <div v-else>
    <not-found-404 />
  </div>
</template>

<script>
import VehicleForm from './components/VehicleForm.vue';

export default {
  props: ['id'],
  components: {
    VehicleForm
  },
  data() {
    // return this.$store.state.vehicles; // OK
    // return this.$store.state.vehicles.vehicle; // not OK
    return {
      isEdit: false,
      vehicle: {}, //have to update the state
      startDate: null
    };
  },
  created() {
    // this.getVehicleByID(this.id)
    //   .then
    //   //do something
    //   ()
    //   .catch
    //   //do something with error
    //   ();
    this.getVehicleByID(this.id).then(
      (this.vehicle = this.$store.getters['vehicles/one'])
    );
  },
  methods: {
    async getVehicleByID(id) {
      await this.$store.dispatch('vehicles/getVehicleById', id);
    }
  },
  watch: {
    startDate() {
      console.log(this.startDate);
    }
  }
};
</script>
