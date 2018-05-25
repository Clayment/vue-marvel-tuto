import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import HeroList from "./components/HeroList.vue";
import HeroSingle from "./components/HeroSingle.vue";

const routes = [
  { path: "/", name: "list", component: HeroList, props: {  } },
  { path: "/page/:num", component: HeroList, props: true },
  { path: "/single/:id", component: HeroSingle, props: true }
];

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
