<template>
  <div v-if="vehicle && vehicle.id === id">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a @click="$router.push('/vehicles')">Vehicles ></a></li>
      </ul>
    </nav>
    <!-- <h1 class="title is-4">{{ vehicle.brand + ' ' + vehicle.name }}</h1> -->
    <!-- <p>Vehicle ID: {{ id }}</p> -->
    <div class="columns is-multiline is-mobile">
      <vehicle-card :vehicle="vehicle" />
      <div class="column is-full-mobile">
        <div class="card">
          <div class="card-content">
            <h1 class="title is-6">some more vehicle's details infor</h1>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Biển số</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="email" value="me@example.com" />
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Ngày đăng kiểm</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="email" value="me@example.com" />
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Bảo hiểm</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="email" value="me@example.com" />
                  </p>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Start date</label>
              <div class="control">
                <input v-model="startDate" class="input" type="date" />
              </div>
            </div>
            <div class="buttons" style="align: right">
              <button class="button is-primary">Save</button>
              <button class="button is-dark">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
