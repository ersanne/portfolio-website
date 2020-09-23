<template>
    <v-card class="preview-card mb-4"
            @click="goToPost">
      <v-img v-if="data.hero_img.url"
             class="white--text align-end"
             height="250"
             :src="data.hero_img.url"
             :alt="data.hero_img.alt"
      >
        <v-card-title>
          <prismic-rich-text :field="data.title"/>
        </v-card-title>
      </v-img>
      <v-card-title v-else>
        <prismic-rich-text :field="data.title"/>
      </v-card-title>
      <v-card-subtitle v-if="data.tags.length === 0">
        <v-chip-group>
          <v-chip v-for="(tag, i) in data.tags" :key="i"
                  :color="tag.color"
                  small
          >
            <v-icon left>{{ tag.icon }}</v-icon>
            {{ tag.text }}
          </v-chip>
        </v-chip-group>
      </v-card-subtitle>
      <v-card-text>
        <prismic-rich-text :field="data.summary"/>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    slug: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
  },
  methods: {
    goToPost: function () {
      this.$router.push({
        name: 'blog-post',
        params: {slug: this.$props.slug}
      })
    }
  },
  created() {
    console.log(this.data.hero_img)
  }
}
</script>

<style scoped>
.preview-card {
  min-width: 100%;
}
.v-card__text, .v-card__title {
  word-break: normal;
}
</style>
