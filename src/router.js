import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/home.vue";
import Page1 from "@/views/page.vue";
import Page2 from "@/views/page2.vue";
import newPage from "@/views/newpage.vue";
import feedback from"@/views/feedback.vue";
import feedback1 from"@/views/feedback1.vue";
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
      path: "/feedback1",
      name: "feedback1",
      component: feedback1
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
      path: "/page1",
      name: "Page1",
      component: Page1
    },
    {
      path: "/page2",
      name: "Page2",
      component: Page2
    },
    {
      path: "/newpage",
      name: "newpage",
      component: newPage
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
