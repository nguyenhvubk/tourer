import { createStore } from 'vuex'
import VehicleStore from './VehicleStore.js'

const store = createStore({
  modules: {
    VehicleStore,
  },
});

export default store;