// import mutations from './mutations.js';
// import actions from './actions.js';
// import getters from './getters.js';

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
        }
      ]
    };
  },
  // mutations,
  // actions,
  // getters
};
