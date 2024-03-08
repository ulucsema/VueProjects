import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
      path : "/",
      alians: "/tutorials",
      name : "tutorials",
      component: () => import ("./components/TutorialsList")
    },
    {
        path : "/ekle",
        name : "ekle",
        component: () => import ("./components/AddTutorial")
    },
    {
        path : "/tutorial/:id",
        name : "tutorial-detail",
        component: () => import ("./components/TutorialDetail")
    },
]

const router = createRouter ({
    history : createWebHistory(),
    routes
});
export default router;