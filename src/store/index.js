import { createStore } from 'vuex'
import VehicleStore from './VehicleStore.js'
import TripStore from './TripStore.js'
import DriverStore from './DriverStore.js'

const store = createStore({
  modules: {
    vehicles: VehicleStore,
    trips: TripStore,
    drivers: DriverStore
  },
});

export default store;