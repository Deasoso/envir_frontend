import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/home.vue";
import feedback from"@/views/Feedback/feedback.vue";
import personalpage from "@/views/PersonalHomePage/PersonalPage.vue";
import login from "@/views/loginregister/login.vue";
import register from "@/views/loginregister/register.vue";
import orderdetail from "@/views/Order/orderdetail.vue";
import Orderlist from "@/views/Order/orderlist.vue";
import Rank from "@/views/Rank/rank.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/feedback",
      name: "feedback",
      component: feedback
    },
    {
      path: "/Home",
      name: "Home",
      component: Home
    },
    {
      path: "/personal",
      name: "personal",
      component: personalpage
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/orderlist",
      name: "Orderlist",
      component: Orderlist
    },
    {
      path: "/orderdetail",
      name: "orderdetail",
      component: orderdetail
    },
    {
      path: "/rank",
      name: "Rank",
      component: Rank
    },
  ]
});
