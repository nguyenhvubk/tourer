export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      drivers: [
        {
          id: 1,
          iDNumber: '024457788',
          fullName: 'Nguyen',
          dayOfBirth: 'birthday',
          address: 'Ho Chi Minh',
          contractType: 'full time',
          status: 'normal' //normal - retired
        },
        {
          id: 2,
          iDNumber: '654457788',
          fullName: 'Trong',
          dayOfBirth: 'birthday',
          address: 'Ho Chi Minh',
          contractType: 'full time',
          status: 'normal' //normal - retired
        },
        {
          id: 3,
          iDNumber: '026707788',
          fullName: 'Hoang',
          dayOfBirth: 'birthday',
          address: 'Ho Chi Minh',
          contractType: 'full time',
          status: 'normal' //normal - retired
        },
        {
          id: 4,
          iDNumber: '024123788',
          fullName: 'Tran',
          dayOfBirth: 'birthday',
          address: 'Ho Chi Minh',
          contractType: 'full time',
          status: 'retired' //normal - retired
        },
      ],
      driver: {}
    };
  },
}