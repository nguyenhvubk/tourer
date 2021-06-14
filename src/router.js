import { createRouter, createWebHistory } from 'vue-router'
import VehiclesList from './pages/vehicles/VehiclesList.vue'
import TripsCalendar from './pages/trips/TripsCalendar.vue'
import VehicleDetails from './pages/vehicles/VehicleDetails.vue'

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
    { path: "/calendar", component: TripsCalendar },
    // { path: "/requests", component: RequestsReceived },
    // { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
