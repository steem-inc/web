import Vue from "vue";
import Router from "vue-router";

import HomeView from "./views/Home/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: HomeView,
      meta: {
        title: "Steem for Enterprice - Steem Inc",
        metaTags: [
          {
            name: "description",
            content: `
            Building a decentralized and democratic the Web 2.0 for communities and businesses on Steem.
            `
          },
          {
            property: "og:description",
            content: `
            Building a decentralized and democratic the Web 2.0 for communities and businesses on Steem.
            `
          }
        ]
      }
    },
    {
      path: "/about",
      component: () =>
            import(
              /* webpackChunkName: "about" */ "./views/About.vue"
            ),
      meta: {
        title: "About us - Steem Inc",
        metaTags: [
          {
            name: "description",
            content: `
            Steem is our business. We build, smart modern entreprise apps on the Steem blockchain 
            for the everyday Internet user. Our Steem Institute initiative provides free products 
            and services to the community.
            `
          },
          {
            property: "og:description",
            content: `
            Steem is our business. We build, smart modern entreprise apps on the Steem blockchain 
            for the everyday Internet user. Our Steem Institute initiative provides free products 
            and services to the community.
            `
          }
        ]
      }
    },
    {
      path: "/contact",
      component: () =>
            import(
              /* webpackChunkName: "contact" */ "./views/Contact.vue"
            ),
      meta: {
        title: "Contact us - Steem Inc",
        metaTags: [
          {
            name: "description",
            content: "We want to hear from you! Get in touch with us by email or messenger."
          },
          {
            property: "og:description",
            content: "We want to hear from you! Get in touch with us by email or messenger."
          }
        ]
      }
    },
    {
      path: "/privacy",
      component: () =>
            import(
              /* webpackChunkName: "privacy" */ "./views/Privacy.vue"
            ),
      meta: {
        title: "Privacy policy - Steem Inc",
        metaTags: [
          {
            name: "description",
            content: "We read and love our facinating Privacy policy."
          },
          {
            property: "og:description",
            content: "We read and love our facinating Privacy policy."
          }
        ]
      }
    },
  ],
});
