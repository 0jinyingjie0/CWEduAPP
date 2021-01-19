import Vue from 'vue'
import App from './App'
import store from "./pages/store/";
import {request,uploadFile} from "./common/request.js";
import uView from "./uview-ui";

Vue.prototype.$request = request;
Vue.prototype.$uploadFile = uploadFile;

Vue.config.productionTip = false
Vue.use(uView);

Vue.prototype.baseURL = "http://140.210.7.194:48081/api/web/cdss";

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
