<template>
  <div v-if="vehicle && vehicle.id === id">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a @click="$router.push('/vehicles')">Vehicles</a></li>
        <li class="is-active">
          <a>{{ vehicle.brand + ' ' + vehicle.name }}</a>
        </li>
      </ul>
    </nav>
    <!-- <h1 class="title is-4">{{ vehicle.brand + ' ' + vehicle.name }}</h1> -->
    <!-- <p>Vehicle ID: {{ id }}</p> -->
    <div class="columns is-multiline is-mobile">
      <div class="column is-full-mobile">
        <div class="card">
          <div class="card-content">
            <!-- <h1 class="title is-6">some more vehicle's details infor</h1> -->
            <ve-item label="Biển số">
              <input class="input" type="text" value="51A-772.58" />
            </ve-item>
            <ve-item label="Đăng kiểm">
              <input class="input" type="date" value="2021-06-21" />
            </ve-item>
            <ve-item label="Bảo hiểm">
              <input class="input" type="date" value="2022-06-21" />
            </ve-item>
            <ve-item label="Bảo dưỡng">
              <div class="table-container">
                <table class="table is-fullwidth is-hoverable is-striped">
                  <thead>
                    <tr>
                      <th>Thời gian</th>
                      <th>Nội dung</th>
                      <th>Địa điểm</th>
                      <th>Kinh phí</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>2020/01/31</th>
                      <td>Lọc xăng, lọc dầu</td>
                      <td>Gara Hoàng Hà</td>
                      <td>5000000</td>
                    </tr>
                    <tr>
                      <th>2020/05/31</th>
                      <td>
                        Điều hoà, lọc xăng, thay nhớt, cao su chân máy, bảo
                        dưỡng tại 50.000km
                      </td>
                      <td>Gara Hoàng Hà</td>
                      <td>10000000</td>
                    </tr>
                    <tr>
                      <th>2021/01/31</th>
                      <td>Bảo dưỡng tại 100km</td>
                      <td>Gara Hoàng Hà</td>
                      <td>5000000</td>
                    </tr>
                    <tr>
                      <th>2021/01/31</th>
                      <td>Bảo dưỡng tại 150km</td>
                      <td>Gara Hoàng Hà</td>
                      <td>15000000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ve-item>
            
            <div class="buttons">
              <button class="button is-primary">Save</button>
              <button class="button is-dark">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <not-found-404 />
  </div>
</template>

<script>
import VehicleDetailsItem from './VehicleDetailsItem.vue';

export default {
  props: ['id'],
  components: {
    've-item': VehicleDetailsItem
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
