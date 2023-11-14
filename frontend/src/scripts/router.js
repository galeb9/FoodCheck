import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import StoreList from "@/views/StoreList.vue";
import SingleItem from "@/views/SingleItem.vue";
import AddItem from "@/views/AddItem.vue";

import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    // {
    //     path: '/home',
    //     name: 'HomePage',
    //     component: HomePage,
    // },
    {
      path: "/home/:id",
      name: "SingleItem",
      component: SingleItem,
    },
    {
      path: "/add",
      name: "AddItem",
      component: AddItem,
    },
    {
      path: "/list",
      name: "StoreList",
      component: StoreList,
    },
    // {
    //     path: '/business/:name',
    //     name: 'HomePage',
    //     component: HomePage,
    //     children: [
    //         // {
    //         //     path: 'home',
    //         //     name: 'HomePage',
    //         //     component: HomePage,
    //         // }
    //     ]
    // },
    // {
    //     path: '/generate-qr',
    //     name: 'GenerateQR',
    //     component: GenerateQR,
    // },
    // {
    //     path: '/tables-list',
    //     name: 'TablesList',
    //     component: TablesList,
    // },
    // // alternative to route above
    // {
    //     path: '/tables-list/:tableID/welcome',
    //     name: "TheWelcome",
    //     component: TheWelcome
    // },
    // {
    //     path: '/tables-list/:tableID/order-list',
    //     name: "OrderList",
    //     component: OrderList,
    // },
    // {
    //     path: '/tables-list/:tableID/order-success',
    //     name: "OrderSuccess",
    //     component: OrderSuccess,
    // },
    // {
    //     path: '/tables-list/:tableID',
    //     name: 'IOrder',
    //     component: IOrder,
    // children: [
    //     {
    //         path: 'welcome',
    //         name: "TheWelcome",
    //         component: TheWelcome
    //     }
    // ]
    // },

    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
