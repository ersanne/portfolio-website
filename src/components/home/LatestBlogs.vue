<template>
  <SectionLayout v-if="hasContent && items.length > 0" id="latest_blogs" title="Latest Blogs">
    <v-row>
      <v-col :cols="12 / items.length" v-for="(item, i) in items" :key="i">
        <BlogCard :slug="item.uid" :data="item.data"></BlogCard>
      </v-col>
    </v-row>
  </SectionLayout>
</template>

<script>
import SectionLayout from "@/components/home/SectionLayout";
import BlogCard from "@/components/blog/BlogCard";

export default {
  name: "LatestBlogs",
  components: {BlogCard, SectionLayout},
  data: () => ({
    hasContent: false,
    items: null,
    selected: null
  }),
  methods: {
    getContent() {
      this.$prismic.client.query(
          this.$prismic.Predicates.at('document.type', 'blog_post'),
          {
            orderings: '[my.blog_post.date desc]',
            pageSize: 3,
            page: 1
          }
      ).then((document) => {
        if (document) {
          this.items = document.results;
          this.checkForContent();
        }
      })
    },
    checkForContent: function () {
      //Use if to check that content has loaded
      if (this.items != null) this.hasContent = true;
    },
  },
  created() {
    this.getContent();
  }
}
</script>

<style scoped>

</style>
