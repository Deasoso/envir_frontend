import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/home.vue";
import Page1 from "@/views/page.vue";
import Page2 from "@/views/page2.vue";
import newPage from "@/views/newpage.vue";
import personalpage from "@/views/PersonalHomePage/PersonalPage.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
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
  ]
});
