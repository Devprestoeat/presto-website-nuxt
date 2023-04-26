<template>
  <div class="container">
    <h2>{{ $t("latest_news") }}</h2>
    <hr />
    <ul class="grid">
      <li v-for="post in posts" :key="post.sys.id">
        <div class="router-replacer" @click="pushPage(post.sys.id)">
          <img :src="post.fields.postImage.fields.file.url" :alt="post.fields.postImage.fields.description">
          <h3>{{ post.fields.title }}</h3>

          <div class="body-text" v-html="parseRichText(post.fields.bodyText)"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "817i2xyc13sp",
  accessToken: "254FA7xx8dflssUhgel3_HHMOAgmeP0dybfX5abf_c0"
});

export default {
  data() {
    return {
      posts: []
    };
  },
  async created() {
    try {
      const response = await client.getEntries({
        content_type: "prestoBlog"
      });
      
      this.posts = response.items;
      
      console.log(this.posts)

    } catch (error) {
      console.log('error:::::::');
      console.log(error);
    }
  },
  methods: {
    pushPage(id) {
      const router = useRouter();
      const localePath = useLocalePath();
      console.log('langgg::::')
      router.push({ path: localePath("/posts" + '/' + id) });
      // { name: 'posts', params: { id: post.sys.id } }
    },
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
  .router-replacer {
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
  }

  ul li {
    /* min-width: 364px; */
    /* flex-grow: 1; */
    padding: 0;
    margin: 0;
  }

  ul img {
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    border: 1px solid #D0D0D0;
    border-radius: 12px;
  }

  ul h3 {
    /* width: 200px; */
    font-size: 18px;
    color: #000;
    margin-top: 12px;
  }

  hr {
    width: 88px;
    border-color: #FF4E02;
    border-width: 2px;
    border-style: solid;
    /* margin: 0 auto; */
    border-radius: 8px;
    margin-bottom: 32px;
  }

  .body-text{
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical;
  }

@media (min-width: 1024px) {
  ul.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

}

/* Tablet view */
@media (min-width: 768px) and (max-width: 1023px) {
  ul.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

}

/* Mobile view */
@media (max-width: 767px) {
  ul.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 36px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }


}
</style>