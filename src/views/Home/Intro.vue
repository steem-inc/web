<template>
  <div 
    id="intro" 
    class="intro" >
    <div 
      class="content" 
      style="padding: 0">
      <div>
        <div class="heading-1">
          Decentralizing and Democratizing
        </div>
        <div class="heading-3">
          the web through services and platforms for communities and businesses on Steem, the Web 2?
        </div>
        <div class="action">
          <zi-button 
            shadow 
            type="success"
            @click="scroll('#work')">Discover</zi-button>
        </div>
      </div>
  
  </div></div>
</template>

<script>
export default {
  methods: {
    scroll (el) {
      this.$scrollTo(el);
    }
  }
};
</script>

<style scoped>
.intro {
  height: 100vh;
}
.action {
  margin: 1rem;
}
</style>
