import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";
import TicketsPage from "@/pages/TicketsPage";
import store from "@/store/store";

const routes = [
    {
        path: "/",
        component: MainPage,
        name: "Main",
    },
    {
        path: "/login",
        component: LoginPage,
        name: "Login",
    },
    {
        path: "/profile",
        component: ProfilePage,
        name: "Profile",
    },
    {
        path: "/ticket",
        component: TicketsPage,
        name: "Ticket",
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: "active",
})

router.beforeEach(async (to, from) => {
    if (
        !store.getters.getIsAuth &&
        to.name !== 'Login'
    ) {
        return { name: 'Login' }
    }
})

export default router;