<template>
  <div 
    id="work"
    class="work">
    <div class="content">
      <div>
        <div  
          class="heading-1">
          Our work
        </div>
        <div class="grid">
          <div 
            v-for="(work, index) in work" 
            :key="index" 
            class="list">
            <a 
              :href="work.link"
              target="_blank"          
              class="item">
              <div style="margin: auto">
                <img 
                  :src="work.logo" 
                  class="work-logo">
                <div>
                  <small>{{ work.name }}</small>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="action">
          <zi-button 
            shadow
            type="success"
            @click="goSolutions">Solutions</zi-button>
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      work: [
        {
          logo: "./img/work/steem-command.png",
          name: "Steem CMD",
          link: "https://steemcommand.com"
        },
        {
          logo: "./img/work/steem-metrics.png",
          name: "Steem Metrics",
          link: "https://steemmetrics.com"
        }
      ]
    };
  },
  methods: {
    goSolutions () {
      window.open("https://steemstudios.com");
    }
  }
};
</script>

<style scoped>
.work-logo {
  width: 70px;
  height: 70px;
}
.item {
  margin: 2rem;
  display: flex;
  justify-content: centent;
  align-items: center;
  border-radius: 50%;
  border: dotted 1px white;
  width: 12rem;
  height: 12rem;
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
