<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <h1 v-text="$prismic.richTextAsPlain(post.title)"></h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <h3 class="subtitle-1" v-text="$prismic.richTextAsPlain(post.subtitle)"></h3>
      </v-col>
    </v-row>
    <div></div>
    <!-- Slice zone-->
    <v-row v-for="(slice, i) in post.body"
           :key="i">
      <!-- Text section -->
      <v-col v-if="slice.slice_type === 'text'">
        <prismic-rich-text :field="slice.primary.title"></prismic-rich-text>
        <prismic-rich-text :field="slice.primary.text"></prismic-rich-text>
      </v-col>
      <!-- Code section -->
      <v-col v-else-if="slice.slice_type === 'code_snippet'">
        <prismic-rich-text :field="slice.primary.title"></prismic-rich-text>
        <pre v-highlightjs="$prismic.richTextAsPlain(slice.primary.code)"><code class="java"></code></pre>
        <prismic-rich-text :field="slice.primary.caption"></prismic-rich-text>
      </v-col>
      <!-- Image section -->
      <v-col v-else-if="slice.slice_type === 'image'">
        <prismic-rich-text :field="slice.primary.title"></prismic-rich-text>
        <v-img :src="slice.primary.image.url"
               :alt="slice.primary.image.alt"
        ></v-img>
        <prismic-rich-text :field="slice.primary.caption"></prismic-rich-text>
      </v-col>
    </v-row>
    <!-- Slice zone end -->
  </v-container>
</template>

<script>
export default {
  name: "BlogPostContent",
  props: {
    post: Object
  },
  created() {
    console.log(this.post)
  }
}
</script>

<style scoped>
.container {
  max-width: 860px;
}
</style>
