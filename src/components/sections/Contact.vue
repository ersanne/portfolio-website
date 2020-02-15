<template>
    <SectionLayout id="contact" title="Contact">
        <div class="text-xs-center pb-4">
            <v-btn
                    v-for="item in items"
                    :color="item.color"
                    :key="item.icon"
                    :href="item.link"
                    :aria-label="item.label"
                    target="_blank"
                    rel="noopener"
                    fab
                    depressed
                    dark
            >
                <v-icon medium dark>mdi-{{ item.icon }}</v-icon>
            </v-btn>
        </div>
        <v-layout align-center justify-center fill-height>
            <v-icon>email</v-icon>
            <span class="title font-weight-light grey--text text--darken-3"> erik@eriksanne.com</span>
        </v-layout>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/sections/SectionLayout";
    export default {
        name: "Contact",
        components: {SectionLayout},
        data: () => ({
            items: [
                {
                    label: 'GitHub',
                    icon: 'github-circle',
                    link: 'https://github.com/ersanne',
                    color: '#333'
                },
                {
                    label: 'LinkedIn',
                    icon: 'linkedin',
                    link: 'https://www.linkedin.com/in/eriksanne/',
                    color: '#0077b5'
                },
                {
                    label: 'Twitter',
                    icon: 'twitter',
                    link: 'https://twitter.com/ErikKonradSanne',
                    color: '#38a1f3'
                }
            ]
        }),
    }
</script>

<style scoped>

</style>
