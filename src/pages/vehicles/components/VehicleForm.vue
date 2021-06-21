<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><a @click="backToVehicles">Vehicles</a></li>
      <li class="is-active">
        <a>{{ breadcrumbDisplay }}</a>
      </li>
    </ul>
  </nav>
  <!-- <p>Debug: edit: {{ edit }}</p> -->
  <div class="card">
    <div class="card-content">
      <ve-item label="Hình ảnh">
        <div class="card-image" v-if="vehicle.imgUrl">
          <figure class="image is-128x128">
            <img src="../../../assets/bmw.jpg" :alt="breadcrumbDisplay" />
          </figure>
        </div>
        <div class="file has-name is-fullwidth">
          <label class="file-label">
            <input class="file-input" type="file" name="vehicleImage" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
            <span class="file-name">
              Chưa có hình ảnh
              <!-- TODO: handle file upload with firestore -->
            </span>
          </label>
        </div>
      </ve-item>
      <ve-item label="Biển số">
        <input class="input" type="text" v-model="vehicle.number" />
      </ve-item>
      <ve-item label="Tài xế">
        <div class="select is-fullwidth">
          <select>
            <option>Chọn tài xế</option>
            <option>Tài 1</option>
            <option>Tài 2</option>
            <option>Tài 3</option>
          </select>
        </div>
      </ve-item>
      <ve-item label="Đăng kiểm">
        <input class="input" type="date" v-model="vehicle.registriedDate" />
      </ve-item>
      <ve-item label="Bảo hiểm">
        <input class="input" type="date" v-model="vehicle.insurancePeriod" />
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
                  Điều hoà, lọc xăng, thay nhớt, cao su chân máy, bảo dưỡng tại
                  50.000km
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
        <a>+ Tạo lịch sử bảo dưỡng</a>
      </ve-item>

      <div class="buttons">
        <button class="button is-primary" @click="save">Save</button>
        <button class="button is-dark" @click="backToVehicles">Cancel</button>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import VehicleDetailsItem from './VehicleDetailsItem.vue';
export default {
  props: {
    edit: {
      type: Boolean,
      default: true
    }
  },
  components: {
    've-item': VehicleDetailsItem
  },
  data() {
    return {
      vehicle: this.$store.getters['vehicles/one']
    };
  },
  computed: {
    breadcrumbDisplay() {
      if (this.edit) {
        return this.vehicle.brand + ' ' + this.vehicle.name;
      }
      return 'Add a new vehicle';
    }
  },
  methods: {
    save() {
      //TODO save or update vehicle details
    },
    backToVehicles() {
      //TODO validate the inputs
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
