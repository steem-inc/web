<template>
  <div 
    id="partners"
    class="partners">
    <div class="content">
      <div>
        <div  
          class="heading-1">
          Our partners
        </div>
        <div class="grid">
          <div 
            v-for="(partner, index) in partners" 
            :key="index" 
            class="list">
            <a 
              :href="partner.link"
              target="_blank"          
              class="item">
              <div style="margin: auto">
                <img 
                  :src="partner.logo" 
                  class="partner-logo">
                <div>
                  <small>{{ partner.name }}</small>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="action">
          <zi-button 
            v-if="false" 
            shadow
            type="success"
            @click="goPartners()">Partnership</zi-button>
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      partners: [
        {
          logo: "./img/partners/steem-institute.png",
          name: "Steem Institute",
          link: "https://steem.institute"
        },
        {
          logo: "./img/partners/coin-sheriff.png",
          name: "Coin Sheriff",
          link: "https://coinsheriff.com"
        }
      ]
    };
  },
  methods: {
    goPartners () {
      window.open("https://steemstudios.com/company/steeminc/partnership");
    }
  }
};
</script>

<style scoped>
.partners {
}
.partner-logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 4px rgba(0,0,0,.06);
}
.item {
  margin: 2rem;
  display: flex;
  justify-content: centent;
  align-items: center;
}
.list * {
  text-decoration: none;
  font-weight: bold;
  text-align: center;
}
.list > {
  text-decoration: none;
  text-align: center;
}
</style>
