<template>
    <v-item>
        <v-card class="preview-card mb-4"
                @click="goToPost">
            <v-img
                    class="white--text align-end"
                    max-height="350"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
                <v-card-title>
                    <prismic-rich-text :field="data.title"/>
                </v-card-title>
            </v-img>
            <v-card-subtitle>
                <v-chip-group>
                    <v-chip v-for="(tag, i) in data.tags" :key="i"
                            :color="tag.color"
                            small
                    >
                        <v-icon left>{{tag.icon}}</v-icon>
                        {{tag.text}}
                    </v-chip>
                </v-chip-group>
            </v-card-subtitle>
            <v-card-text>
                <prismic-rich-text :field="data.summary"/>
            </v-card-text>
            <v-card-actions>

            </v-card-actions>
        </v-card>
    </v-item>
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
                    params: { slug: this.$props.slug}
                  })
            }
        }
    }
</script>

<style scoped>
    .preview-card {
        min-width: 100%;
    }
</style>
