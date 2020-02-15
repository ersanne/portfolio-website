<template>
    <section :class="this.$vuetify.theme.dark ? 'dark-section' : 'light-section'">
        <v-container>
            <h2 class="text-center py-5">{{title}}</h2>
            <v-divider></v-divider>
            <div class="py-12">
                <slot></slot>
            </div>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "SectionLayout",
        props: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>
    .dark-section:nth-child(odd) {
        background: #1e1e1e;
    }
    .light-section:nth-child(odd) {
        background: #f6f8fb;
    }
</style>
