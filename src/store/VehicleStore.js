export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      vehicles: [
        {
          id: '1',
          name: 'CX-5',
          brand: 'Mazda',
        },
        {
          id: '2',
          name: '3',
          brand: 'Mazda',
        },
        {
          id: '3',
          name: 'Vios',
          brand: 'Toyota',
        },
        {
          id: '4',
          name: 'Accord',
          brand: 'Honda',
        },
        {
          id: '5',
          name: 'Acent',
          brand: 'Hyundai',
        }
      ],
      vehicle: {}
    };
  },
  // mutations,
  // actions,
  getters: {
    all(state) {
      return state.vehicles;
    },
    one(state){
      return state.vehicle;
    }
  },
  mutations: {
    one(state, id) {
      state.vehicle = state.vehicles.find(v => v.id === id)
      return state;
    }
  },
  actions: {
    async getVehicleById(context, id) {
      // setTimeout(() => {
      //   context.commit('one', id);
      // }, 3000)
      context.commit('one', id);
    }
  }
};
