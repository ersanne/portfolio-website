<template>
    <section :class="this.$vuetify.theme.dark ? 'dark-section' : 'light-section'">
        <v-container>
            <h2 class="headline font-weight-bold text-uppercase text-left pa-3">{{title}}</h2>

            <div class="pa-3">
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
