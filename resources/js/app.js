/* resources > js > app.js */

require("./bootstrap");

window.Vue = require("vue");

Vue.component("app-init", require("./AppInit.vue").default);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

import User from "./Helpers/User";
window.User = User;
console.log(User.loggedIn());

///Router
import Dashboard from "./views/Dashboard";
import Login from "./views/auth/Login";
import Products from "./views/Products";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: Dashboard
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/products",
            name: "products",
            component: Products
        }
    ]
});

const app = new Vue({
    el: "#app",
    router,
    vuetify: new Vuetify()
});
