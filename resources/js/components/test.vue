<template>
    <div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>

////////////////////app.js//////////////////////
/* resources > js > app.js */

require("./bootstrap");

window.Vue = require("vue");
import Vue from "vue";

//Vue.component("app-init", require("./AppInit.vue").default);
//this cpt is pointing to the home blade with '#app' id
Vue.component("AppHome", require("./views/AppHome.vue"));

// import VueRouter from "vue-router";
// Vue.use(VueRouter);

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

import User from "./Helpers/User";
window.User = User;
//console.log(User.loggedIn());

window.EventBus = new Vue();

// import md from "marked";
// window.md = md;

///Router
// import AppHome from "./views/AppHome";
// import Login from "./views/auth/Login";
// import Register from "./views/auth/Register";
// import Logout from "./views/auth/Logout";
// import Forum from "./views/forum/Forum";
// import Read from "./views/forum/Read";
// import CreateQuestion from "./views/forum/CreateQuestion";
// import CreateCategory from "./views/category/CreateCategory";
// import Products from "./views/Products";

// const router = new VueRouter({
//     mode: "history",
//     routes: [
//         {
//             path: "/",
//             name: "AppHome",
//             component: AppHome
//         },
//         {
//             path: "/login",
//             name: "login",
//             component: Login
//         },
//         {
//             path: "/register",
//             name: "register",
//             component: Register
//         },
//         {
//             path: "/logout",
//             name: "logout",
//             component: Logout
//         },
//         {
//             path: "/forum",
//             name: "forum",
//             component: Forum
//         },
//         {
//             path: "/ask",
//             name: "create",
//             component: CreateQuestion
//         },
//         {
//             path: "/category",
//             name: "createCategory",
//             component: CreateCategory
//         },
//         {
//             path: "/question/:slug",
//             component: Read,
//             name: "read"
//         },
//         {
//             path: "/products",
//             name: "products",
//             component: Products
//         }
//     ]
// });

import router from "./Router/router.js";

const app = new Vue({
    el: "#app",
    router,
    vuetify: new Vuetify()
});
////////////////////////////////////////////////////////