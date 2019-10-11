<template>
  <div>
    <div class="section">
      <intro-component/>
    </div>
    <div class="section">
      <work-component/>
    </div>
    <div class="section">
      <partners-component/>
    </div>
    <div class="section">
      <blog-component/>
    </div>
    <div class="section">
      <about-component/>
    </div>
  </div>
</template>

<script>
import IntroComponent from "./Intro.vue";
import WorkComponent from "./Work.vue";
import PartnersComponent from "./Partners.vue";
import BlogComponent from "./Blog.vue";
import AboutComponent from "./About.vue";

export default {
  components: {
    IntroComponent,
    WorkComponent,
    PartnersComponent,
    BlogComponent,
    AboutComponent,
  }

};
</script>

<style>
</style>
