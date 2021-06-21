export default {
    namespaced: true,
    state() {
      return {
        lastFetch: null,
        trips: [
          {
            id: '1',
            companyId: '1',
            vehicleId: '1',
            title: 'Sai Gon - Ha Noi',
            startDate: '2021/06/01',
            endDate: '2021/06/03',
            classes: ['orange'],
            revenue: 80000000
          },
          
        ]
      };
    },
  };
  