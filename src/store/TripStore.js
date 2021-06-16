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
            endDate: 'endDate',
            revenue: 80000000
          },
          
        ]
      };
    },
  };
  