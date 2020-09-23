<template>
  <v-container v-if="hasContent">
    <h1 v-text="plainTitle"></h1>
    <v-row no-gutters>
      <v-col>
        <h3 class="subtitle-1 pb-4 shrink" v-text="plainSubtitle"></h3>
      </v-col>
      <v-btn icon small
             :href="`https:twitter.com/intent/tweet?text=${encodeURIComponent(`${this.$prismic.richTextAsPlain(this.post.title)} by @ErikKonradSanne `)}${shareUrl}`"
             target="_blank">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon small
             :href="`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`"
             target="_blank">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon small
             :href="`https://www.facebook.com/dialog/share?app_id=316255176143959&display=popup&href=${shareUrl}`"
             target="_blank">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-img v-if="post.hero_img.url"
               :src="post.hero_img.url"
               :alt="post.hero_img.alt">
        </v-img>
      </v-col>
    </v-row>
    <!-- Slice zone-->
    <v-row v-for="(slice, i) in post.body"
           :key="i">
      <!-- Text section -->
      <v-col v-if="slice.slice_type === 'text'">
        <prismic-rich-text v-if="slice.primary.title" :field="slice.primary.title"
                           class="mb-2"></prismic-rich-text>
        <prismic-rich-text v-if="slice.primary.text" :field="slice.primary.text"></prismic-rich-text>
      </v-col>
      <!-- Code section -->
      <v-col v-else-if="slice.slice_type === 'code_snippet'">
        <prismic-rich-text v-if="slice.primary.title" :field="slice.primary.title"
                           class="mb-2"></prismic-rich-text>
        <pre v-if="slice.primary.code" v-highlightjs="$prismic.richTextAsPlain(slice.primary.code)"><code
            class="java"></code></pre>
        <prismic-rich-text v-if="slice.primary.caption" :field="slice.primary.caption"></prismic-rich-text>
      </v-col>
      <!-- Image section -->
      <v-col v-else-if="slice.slice_type === 'image'">
        <prismic-rich-text v-if="slice.primary.title" :field="slice.primary.title"
                           class="mb-2"></prismic-rich-text>
        <v-img v-if="slice.primary.image.url" :src="slice.primary.image.url"
               :alt="slice.primary.image.alt"
        ></v-img>
        <prismic-rich-text v-if="slice.primary.caption" :field="slice.primary.caption"></prismic-rich-text>
      </v-col>
    </v-row>
    <!-- Slice zone end -->
    <v-row class="comments">
      <v-col>
        <Disqus shortname="erik-sanne"></Disqus>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BlogPost",
  metaInfo() {
    return {
      title: this.hasContent ? this.plainTitle : 'Erik Sanne Blog',
      meta: [
        {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: ''},
        // Canonical link (The url expected to be used
        {rel: 'canonical', href: window.location.href},
        // OpenGraph data (Most widely used)
        {property: 'og:title', content: this.hasContent ? this.plainTitle : 'Erik Sanne Blog'},
        {property: 'og:site_name', content: 'Erik Sanne'},
        // The list of types is available here: http://ogp.me/#types
        {property: 'og:type', content: 'website'},
        // Should the the same as your canonical link, see below.
        {property: 'og:url', content: window.location.href},
        {property: 'og:image', content: 'https://eriksanne.com/img/logo.png'},
        // Often the same as your meta description, but not always.
        {property: 'og:description', content: this.hasContent ? this.plainSubtitle : ''},
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: window.location.href},
        {name: 'twitter:title', content: this.hasContent ? this.plainTitle : 'Erik Sanne Blog'},
        {name: 'twitter:description', content: this.hasContent ? this.plainSubtitle : ''},
        // Your twitter handle, if you have one.
        {name: 'twitter:creator', content: '@ErikKonradSanne'},
        {name: 'twitter:image:src', content: 'https://eriksanne.com/img/logo.png'},

        // Google / Schema.org markup:
        {itemprop: 'name', content: this.hasContent ? this.plainTitle : 'Erik Sanne Blog'},
        {itemprop: 'description', content: this.hasContent ? this.plainSubtitle : ''},
        {itemprop: 'image', content: 'https://www.eriksanne.com/img/logo.png'}
      ]
    }
  },
  data() {
    return {
      hasContent: false,
      post: null,
    };
  },
  computed: {
    plainTitle: function () {
      return this.$prismic.richTextAsPlain(this.post.title)
    },
    plainSubtitle: function () {
      return this.$prismic.richTextAsPlain(this.post.subtitle)
    },
    shareUrl: function () {
      return encodeURIComponent(window.location.href)
    },
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
.container {
  max-width: 860px;
}
</style>
