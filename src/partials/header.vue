<template>
  
  <div>
    <div 
      v-if="homePage && showNavbar" 
      class="navbar">
      <div class="container">
        <div class="justified">

          <div>
            <router-link to="/">
              <img 
                src="../assets/steem-inc-wordmark.svg" 
                style="height: 25px" 
                class="full">
              <img 
                src="../assets/steem-inc-logo.svg" 
                style="height: 45px" 
                class="mobile">
            </router-link>
          </div>

          <div>
            <div 
              class="menu-items full">
              <zi-button 
                type="abort" 
                auto
                @click="scroll('#work')">Work</zi-button>
              <zi-button 
                type="abort" 
                auto
                @click="scroll('#partners')">Partners</zi-button>
              <zi-button 
                type="abort" 
                auto
                @click="scroll('#blog')">Blog</zi-button>
              <zi-button 
                type="abort" 
                auto
                @click="scroll('#about')">About</zi-button>
            </div>
            <div class="mobile">
              <zi-popover align="right">
                <zi-button 
                  size="small" 
                  type="abort"  
                  auto>
                  <menu-icon 
                    size="1.5x" 
                    class="menu-icon-class"/>
                </zi-button>
                <template v-slot:dropdown>
                  <zi-popover-item @click.native="scroll('#work')">Work</zi-popover-item>
                  <zi-popover-item @click.native="scroll('#partners')">Partners</zi-popover-item>
                  <zi-popover-item @click.native="scroll('#blog')">Blog</zi-popover-item>
                  <zi-popover-item @click.native="scroll('#about')">About</zi-popover-item>
                </template>
              </zi-popover>
            </div>

          </div>

        </div>
      </div>
    </div>

    <div 
      v-else-if="!homePage"
      class="navbar">

      <div class="container">
        <div class="justified">

          <div>
            <router-link to="/">
              <img 
                src="../assets/steem-inc-wordmark.svg" 
                style="height: 25px" 
                class="full">
              <img 
                src="../assets/steem-inc-logo.svg" 
                style="height: 45px" 
                class="mobile">
            </router-link>
          </div>
          <div/>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { MenuIcon } from "vue-feather-icons";

export default {
  components: {
    MenuIcon
  },
  data () {
    return {
      showNavbar: false,
      lastScrollPosition: 0
    };
  },
  computed: {
    homePage () {
      return this.$route.path === "/";
    }
  },
  mounted () {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    scroll (el) {
      this.$scrollTo(el);
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return;
      }
      this.showNavbar = currentScrollPosition > this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>

<style scoped>
.menu-item {
  margin: 0.3rem;
}
.menu-items * {
  color: white !important;
  font-weight: bold;
}
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 20000;
  height: 50px;
  box-shadow: 0 3px 10px rgba(0,0,0,.12);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style>
.menu-icon-class {
  color: white;
}
</style>