import { createRouter, createWebHashHistory } from "vue-router";
import Finance_tracker from "../views/Finance-tracker/Finance-tracker.vue";
import '../assets/style.css';


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Finance_tracker",
      component: Finance_tracker,
    },
    
  ],
});

export default router;