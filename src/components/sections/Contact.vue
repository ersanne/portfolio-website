<template>
    <SectionLayout id="contact" title="Contact" class="mb-4">
        <div class="d-flex justify-center pb-4">
            <v-btn
                    v-for="item in items"
                    :color="item.color"
                    :key="item.icon"
                    :href="item.link"
                    :aria-label="item.label"
                    target="_blank"
                    fab
                    depressed
                    dark
                    class="mx-2"
            >
                <v-icon medium dark>mdi-{{ item.icon }}</v-icon>
            </v-btn>
        </div>
        <div class="d-flex justify-center">
            <v-icon>mdi-email</v-icon>
            <a class="title font-weight-medium text--darken-3"
               href="mailto:erik@eriksanne.com"
               style="text-decoration: none"
            > erik@eriksanne.com</a>
        </div>
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
