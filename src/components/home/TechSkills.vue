<template>
    <SectionLayout id="technical_skills" title="Technical Skills">
        <div class="column_wrapper">
            <div v-for="(item, i) in data" :key="i" class="px-4 mb-4">
                <v-row justify="space-between"
                       no-gutters
                >
                    <v-col>
                        <v-icon :color="item.color" v-text="`${item.icon}`" class="mr-2"></v-icon>
                        <span class="subheading text--darken-3" v-text="$prismic.richTextAsPlain(item.name)"></span>
                    </v-col>
                    <v-col>
                        <div class="caption text--darken-2 text-right" v-text="item.level"></div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-progress-linear class="my-1" readonly height="8" :value="item.level_value"
                                       :color="item.color"></v-progress-linear>
                </v-row>
            </div>
        </div>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/home/SectionLayout";

    export default {
        name: "Skills",
        components: {SectionLayout},
        props: {
            data: Array
        }
    }
</script>

<style scoped>
    @media (max-width:599px) {
        .column_wrapper {
            column-count: 1;
        }
    }
    @media (min-width:600px) {
        .column_wrapper {
            column-count: 2;
        }
    }
</style>
