// import mutations from './mutations.js';
// import actions from './actions.js';
// import getters from './getters.js';

export default {
    namespaced: true,
    state() {
      return {
        lastFetch: null,
        trips: [
          {
            id: '1',
            title: 'Sai Gon - Ha Noi',
            vehicleId: '1',
            startDate: 'startDate',
            endDate: 'endDate'
          },
          
        ]
      };
    },
    // mutations,
    // actions,
    // getters
  };
  