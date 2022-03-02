import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import VueformToggle from '@vueform/toggle'

// library.add(faMoon, faSun)

const app = createApp(App)

// foreign components
// app.component('FontAwesomeIcon', FontAwesomeIcon)
// app.component('VueformToggle', VueformToggle)

app.use(createPinia())
app.use(router)


app.mount('#app')
