# tourer

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

TODO: for demo
- 404 page - done
- vehicles:
  - search bar - done
- trips:
  - add price
- chart implement:
  - chart for best revenue: unit: year and vehicle 
- Deploy to firebase - done
- add vehicle deitals 
- add trip details

for staging
- DB structure design
- firebase DB implement
- Authentication
- Styling optimization

draff of db structure
{
  "companies": {
    "company_id1": {
      "name": "company A",
      "type": "vehicle supplier",
      //other nessesary information
    }  
  },
  "users": {
    "user_id1": {
      "name": "user A",
      //other nessesary information
      "company": "company_id1"
    }
  },
  "vehicles": {
    "vehicle_id1": {
      "brand": "toyota",
      //other nessesary information
      "driver": "driver_id1",
      "tag": "color"
    }
  },
  "vehicles_company": {
    "generatedID": {
      "vehicle": "vehicle_id1",
      "company": "company_id1"
    }
  }
  "drivers": {
    "driver_id1": {
      //some information
    }
  },
  "trips": {
    "trip_id1": {
      "company": "company_id1",
      "vehicle": "vehicle_id1",
      "startDate": "2021/06/16",
      "endDate": "2021/06/19"
      //some other information
    }
  }
}
