import { createWebHistory,createRouter } from "vue-router";
const routes = [
{
    path : "/",
    alias: "/todos",
    name: "todos",
    component : ()=> import("./components/TodosList.vue")
},
{
    path : "/ekle",
    name : "ekle",
    component : ()=> import("./components/TodoEkle")
},
{
    path : "/todos/:id",
    name : "todo-detay",
    component : ()=> import("./components/TodoDetay")
}
]

const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;