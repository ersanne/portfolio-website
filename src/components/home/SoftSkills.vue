<template>
    <SectionLayout id="soft_skills" title="Soft Skills">
        <v-row justify="center"
        no-gutters>
            <v-col  v-for="(item, i) in data"
                    :key="i"
                    cols="auto"
                    class="pa-1">
                <v-card :color="`${item.color} ${item.color_variant}`" dark>
                    <v-card-text class="white--text" v-text="$prismic.richTextAsPlain(item.name)"></v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/home/SectionLayout";
    export default {
        name: "SoftSkills",
        components: {SectionLayout},
        props: {
            data: Array,
        }
    }
</script>

<style scoped>

</style>
