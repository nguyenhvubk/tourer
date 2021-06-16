<template>
  <h1 class="title is-4">Your vehicles</h1>
  <div class="field is-horizontal">
    <!-- <div class="field-label">
      <label class="label">From</label>
    </div> -->
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded has-icons-left">
          <input
            class="input"
            type="text"
            placeholder="Search for your vehicle number..."
          />
          <span class="icon is-small is-left">
            <i class="fas fa-car-side"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <div class="control is-expanded has-icons-left">
          <div class="select is-fullwidth">
            <select>
              <option>Select a driver</option>
              <option>Driver 1</option>
              <option>Driver 2</option>
            </select>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns is-multiline is-mobile">
    <vehicle-card
      v-for="vehicle in vehicles"
      :key="vehicle.id"
      :vehicle="vehicle"
    />
  </div>
</template>

<script>
import VehicleCard from './VehicleCard.vue';
export default {
  components: {
    VehicleCard
  },
  data() {
    return this.$store.state.vehicles;
  },
  methods: {}
};
</script>
