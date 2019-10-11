<template>
  <div 
    id="blog"
    class="blog">
    <div class="content">
      <div>
        <div  
          class="heading-1">
          Our blog
        </div>
        <div>
          <div 
            v-for="(post, index) in posts" 
            :key="index" 
            class="list">
            <div class="item">
              <a 
                :href="post.link"
                target="_blank">
                {{ post.title }}
              </a>
              <span class="created">{{ post.created }}</span>
            </div>
          </div>
        
          <div class="action">
            <zi-button 
              shadow 
              type="success"
              @click="goToBlog()">Subscribe</zi-button>
          </div>
        </div>
      </div>
  
  </div></div>
</template>

<script>
import {Client} from "dsteem";

const client = new Client("https://api.steemit.com");

export default {
  data: function () {
    return {
      posts: []
    };
  },
  mounted () {
    client.database
      .getDiscussions("blog", {tag: "steeminc", limit: 5})
      .then(result => {
        if (result) {
          result.forEach(post => {
            const json = JSON.parse(post.json_metadata);
            const image = json.image ? json.image[0] : "";
            const title = post.title;
            const author = post.author;
            const created = new Date(post.created).toDateString();
            const link = "https://steem.online/@" + post.author + "/" + post.permlink;
            this.posts.push({author, title, created, image, link});
          });

        }
      });
  },
  methods: {
    goToBlog () {
      window.open("https://steem.online/@steeminc");
    }
  }
};
</script>

<style scoped>
.blog {
}
.list {
  text-align: left;
}
.list * {
  text-decoration: none;
  font-weight: bold;
}
.list > {
  text-decoration: none;
}
.item {
  margin: 0.7rem 0rem;
}
.action {
  margin: 3rem;
}
.created {
  font-size: 70%;
}
</style>
