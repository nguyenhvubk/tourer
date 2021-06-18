import { createApp } from 'vue'
import App from './App.vue'

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
import 'bulma/css/bulma.css'

import router from './router.js';
import store from './store/index.js';
import NotFound from './pages/NotFound.vue'

const app = createApp(App);

app.use(router);
app.use(store);
app.component('not-found-404', NotFound)

app.mount('#app');

