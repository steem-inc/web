<template>
  <div class="container">
    <div class="justified footer">

      <div>Copyright Steem Inc 2019. All Rights Reserved.</div>

      <div>
        <router-link to="/about" >About</router-link> &nbsp;|
        <a 
          href="https://steemsolutions.com" 
          target="_blank">Solutions</a> |&nbsp;
        <a 
          href="https://steemian.net" 
          target="_blank">Community</a> |&nbsp;
        <router-link to="/contact" >Contact</router-link> &nbsp;|
        <router-link to="/privacy" >Privacy</router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.footer {
    font-size: 80%;
    padding: 2rem 0rem;
}

.footer * {
    font-size: 80%;
}

.footer > {
    font-size: 80%;
}

</style>