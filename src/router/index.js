import Vue from "vue";
import VueRouter from "vue-router";
import TodoListPage from "../pages/TodoListPage.vue";
import AddTodoPage from "../pages/AddTodoPage.vue";
import EditTodoPage from "../pages/EditTodoPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/todos",
        name: "home",
        component: TodoListPage,
    },
    {
        path: "/add",
        name: "add",
        component: AddTodoPage
    },
    {
        path: "/todos/:id",
        name: "edit",
        component: EditTodoPage
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
