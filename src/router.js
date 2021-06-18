import { createRouter, createWebHistory } from 'vue-router'
import VehiclesList from './pages/vehicles/VehiclesList.vue'
import TripsCalendar from './pages/trips/TripsCalendar.vue'
import VehicleDetails from './pages/vehicles/VehicleDetails.vue'
import DriversList from './pages/drivers/DriversList.vue'
import NotFound from './pages/NotFound.vue'
import Analytics from './pages/analytics/Analytics.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/vehicles" },
    { path: "/vehicles", component: VehiclesList },
    {
      path: "/vehicles/:id",
      component: VehicleDetails,
      props: true,
    //   children: [
    //     { path: "contact", component: ContactCoach }, // /coaches/c1/contact
    //   ],
    },
    { path: "/trips", component: TripsCalendar },
    { path: "/drivers", component: DriversList },
    { path: "/analytics", component: Analytics },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
