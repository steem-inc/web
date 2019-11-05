<template>
  <div class="about">
    <div 
      id="about"
      class="container" >
      <div class="content">
    
        <div class="about-sections">
    
          <div>
            <div class="heading-1">About us</div>
            <div class="description">
              Steem is our business. We build, smart modern entreprise apps on the Steem blockchain for the everyday Internet user. 
              Our <a 
                href="https://steem.institute" 
                target="_blank" >Steem Institute</a> initiative provides free products and services to the community.
            </div>
          </div>
    
          <div>
            <div class="social">
              <a 
                href="https://fb.com/thesteeminc" 
                target="_blank">
                <img 
                  :src="'./img/social/fb.png'" 
                  class="social-icon">
              </a>
              <a 
                href="https://linkedin.com/company/steeminc" 
                target="_blank">
                <img 
                  :src="'./img/social/li.png'" 
                  class="social-icon">
              </a>
              <a 
                href="https://twitter.com/steeminc" 
                target="_blank">
                <img 
                  :src="'./img/social/tr.png'" 
                  class="social-icon">
              </a>
            </div>
    
            <div class="action">
              <zi-button 
                v-if="false" 
                shadow
                type="success"
                @click="goCommunity()">Join our open community</zi-button>
            </div>
          </div>
    
        </div>
    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goCommunity () {
      window.open("https://steemian.net/community/steeminc");
    }
  }
};
</script>

<style scoped>
.about {
  padding: 1rem 0rem;
}
.social {
  margin: 1.5rem;
}
.social-icon {
  width: 40px;
  height: 40px;
  margin: 1rem;
}
.description {
  width: 90%;
}

.about-section {
}
</style>
