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
      ]
    };
  },
  // mutations,
  // actions,
  getters: {
    all(state) {
      return state.vehicles;
    }
  }
};
