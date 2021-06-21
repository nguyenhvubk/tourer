<template>
  <vehicle-form v-bind:edit="false" />
</template>

<script>
import VehicleForm from './components/VehicleForm.vue'
export default {
  components: {
    VehicleForm
  }
  
}
</script>