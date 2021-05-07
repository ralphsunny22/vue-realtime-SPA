import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppHome from "../views/AppHome";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Logout from "../views/auth/Logout";
import Forum from "../views/forum/Forum";
import Read from "../views/forum/Read";
import CreateQuestion from "../views/forum/CreateQuestion";
import CreateCategory from "../views/category/CreateCategory";
import Products from "../views/Products";


//we can link all imported components to their respective routes
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "AppHome",
            component: AppHome
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/logout",
            name: "logout",
            component: Logout
        },
        {
            path: "/forum",
            name: "forum",
            component: Forum
        },
        {
            path: "/ask",
            name: "create",
            component: CreateQuestion
        },
        {
            path: "/category",
            name: "createCategory",
            component: CreateCategory
        },
        {
            path: "/question/:slug",
            component: Read,
            name: "read"
        },
        {
            path: "/products",
            name: "products",
            component: Products
        }
    ]
});


const router = new VueRouter({
    routes, // short for `routes: routes`,
    hashbang: false,
    mode: 'history'
})

//so that it can be used in app.js
export default router