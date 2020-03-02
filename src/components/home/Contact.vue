<template>
    <SectionLayout id="contact" title="Contact" class="mb-4">
        <div class="d-flex justify-center pb-4">
            <v-btn
                    v-for="(item, i) in data"
                    :key="i"
                    :color="item.color"
                    :href="item.link"
                    :aria-label="item.name"
                    target="_blank"
                    fab
                    depressed
                    dark
                    class="mx-2"
            >
                <v-icon medium dark>{{ item.icon }}</v-icon>
            </v-btn>
        </div>
        <div class="d-flex justify-center pb-4">
            <v-icon>mdi-email</v-icon>
            <a :class="`${this.$vuetify.theme.dark ? 'white--text text--darken-3' : 'grey--text text--darken-3'} title font-weight-medium`"
               href="mailto:erik@eriksanne.com"
               style="text-decoration: none"
            > erik@eriksanne.com</a>
        </div>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/home/SectionLayout";

    export default {
        name: "Contact",
        components: {SectionLayout},
        props: {
            data: Array
        },
    }
</script>

<style scoped>

</style>
