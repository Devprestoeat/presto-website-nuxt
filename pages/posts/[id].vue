<template>
    <div>
      <Navbar activeSection=""/>
      <div class="container">
      <div class="post" v-if="post">
        <img :src="post.fields.postImage.fields.file.url" :alt="post.fields.postImage.fields.description" width="200">
        <h2>{{ post.fields.title }}</h2>
        <div  class="body-text" v-html="parseRichText(post.fields.bodyText)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as contentful from "contentful";
import Navbar from "~/components/Navbar.vue";

const client = contentful.createClient({
  space: "817i2xyc13sp",
  accessToken: "254FA7xx8dflssUhgel3_HHMOAgmeP0dybfX5abf_c0"
});

export default {
  name: 'post',
  components: [
    Navbar,
  ],
  data() {
    return {
      post: null
    };
  },
  async created() {
    try {
      const postId = this.$route.params.id;
      const response = await client.getEntry(postId);
      this.post = response;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    parseRichText(richText) {
      let html = '';
      richText.content.forEach(node => {
        switch (node.nodeType) {
          case 'paragraph':
            html += '<p>';
            node.content.forEach(childNode => {
              switch (childNode.nodeType) {
                case 'text':
                  html += childNode.value;
                  break;
                case 'hyperlink':
                  html += `<a href="${childNode.data.uri}">${childNode.content[0].value}</a>`;
                  break;
                // add more cases to handle other types of nodes (e.g. embedded entries, images)
              }
            });
            html += '</p>';
            break;
          // add more cases to handle other types of nodes (e.g. headings, lists)
        }
      });
      return html;
    }
  }
};
</script>

<style scoped>
.post {
  margin: auto;
  max-width: 600px;
}

img {
  width: 100%;
  display: block;
  border-radius: 12px;
  margin-bottom: 24px;
}

h2 {
  margin-bottom: 2px;
}
.body-text {
  font-size: 18px;
  opacity: .8;
}



</style>