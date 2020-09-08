<template>
  <div v-if="hasContent">
    <BlogPostContent :post="post"></BlogPostContent>
  </div>
</template>

<script>
import BlogPostContent from "@/components/blog/BlogPostContent";

export default {
  name: "BlogPost",
  components: {BlogPostContent},
  metaInfo: {
    title: 'Home',
    meta: [
      {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Erik Sanne Homepage and Digital CV'},
      // Canonical link (The url expected to be used
      {rel: 'canonical', href: 'https://eriksanne.com'},
      // OpenGraph data (Most widely used)
      {property: 'og:title', content: 'Erik Sanne'},
      {property: 'og:site_name', content: 'Erik Sanne'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'https://eriksanne.com'},
      {property: 'og:image', content: 'https://eriksanne.com/img/logo.png'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Erik Sanne Homepage and Digital CV'},
      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
      {name: 'twitter:title', content: 'Erik Sanne'},
      {name: 'twitter:description', content: 'Erik Sanne Homepage and Digital CV'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@ErikKonradSanne'},
      {name: 'twitter:image:src', content: 'https://eriksanne.com/img/logo.png'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Erik Sanne'},
      {itemprop: 'description', content: 'Erik Sanne Homepage and Digital CV'},
      {itemprop: 'image', content: 'https://www.eriksanne.com/img/logo.png'}
    ]
  },
  data() {
    return {
      hasContent: false,
      post: null,
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getByUID('blog_post', this.$route.params.slug).then((document) => {
        if (document) {
          this.post = document.data
          this.checkForContent();
        } else {
          this.$router.push({name: 'not-found'})
        }
      })
    },
    checkForContent: function () {
      if (this.post != undefined) {
        this.hasContent = true;
      }
    },
  },
  created() {
    this.getContent();
  }
}
</script>

<style scoped>

</style>
