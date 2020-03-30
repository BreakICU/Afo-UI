import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
// import { Afo } from "../.afo"
import { Afo } from "@/afo"

import { Button } from 'ant-design-vue';
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log("Afo", Afo)