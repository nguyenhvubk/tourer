<template>
  <h1 class="title is-4">Drivers list</h1>
  <div class="table-container">
    <table class="table is-fullwidth is-hoverable is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Identification No.</th>
          <th>Day of birth</th>
          <th>Address</th>
          <th>Contract</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <driver-row 
          v-for="driver in drivers" 
          :key="driver.id"
          :driver="driver"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import DriverRow from './DriverRow.vue'

export default {
  components: {
    DriverRow
  },
  data() {
    return this.$store.state.drivers;
  }
};
</script>
