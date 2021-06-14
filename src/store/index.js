import { createStore } from 'vuex'
import VehicleStore from './VehicleStore.js'
import TripStore from './TripStore.js'

const store = createStore({
  modules: {
    vehicles: VehicleStore,
    trips: TripStore
  },
});

export default store;