<template>
    <div v-if="hasContent">
      <v-container>
        <v-row v-for="(item, i) in items" :key="i">
          <BlogCard :slug="item.uid" :data="item.data"></BlogCard>
        </v-row>
      </v-container>
    </div>
</template>

<script>
    import BlogCard from "@/components/blog/BlogCard";

    export default {
        name: "BlogList",
        components: {BlogCard},
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
                      orderings: '[my.blog_post.date desc]'
                  }
                ).then((document) => {
                    if (document) {
                        this.items = document.results;
                        console.log(this.items)
                        this.checkForContent();
                    }
                })
            },
            checkForContent: function () {
                //Use if to check that content has loaded
                if(this.items != null) this.hasContent = true;
            },
        },
        created() {
            this.getContent();
        }
    }
</script>

<style scoped>

</style>
