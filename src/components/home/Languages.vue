<template>
    <SectionLayout id="languages" title="Languages">
        <v-layout wrap justify-center>
            <v-flex xs12 sm6 md5 class="px-4">
                <div v-for="(item, i) in data" :key="i" class="mb-4">
                    <v-layout align-center fill-height>
                        <prismic-image :field="item.icon"
                                       style="max-height: 20px; max-width: 24px">
                        </prismic-image>
                        <!--                        <v-img max-height="20px" max-width="24px" contain :src="`img/flags/${item.flag}`"></v-img>-->
                        <div class="subheading text--darken-3 pl-1" v-text="$prismic.richTextAsPlain(item.name)"></div>
                        <v-spacer></v-spacer>
                        <div class="caption text--darken-2" v-text="item.skill_level"></div>
                    </v-layout>
                    <v-progress-linear class="my-1"
                                       height="8"
                                       :value="item.level_value"
                                       :color="`${item.color} ${item.color_variant}`">
                    </v-progress-linear>
                </div>
            </v-flex>
        </v-layout>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/home/SectionLayout";

    export default {
        name: "Languages",
        components: {SectionLayout},
        props: {
            data: Array,
        }
    }
</script>

<style scoped>

</style>
