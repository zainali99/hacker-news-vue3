import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)
// .use(popperjs)
// .use(bootstrap)
.use(require('moment'))
app.mount('#app')
