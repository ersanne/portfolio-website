<template>
    <SectionLayout id="education" title="Education">
        <v-layout wrap>
            <v-flex xs12>
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                            v-for="(item, i) in items"
                            :color="item.color"
                            :key="i"
                            small
                    >
            <span
                    slot="opposite"
                    :class="`title font-weight-regular ${item.color}--text text--${item.dark}`"
                    v-text="item.date"
            ></span>
                        <div class="py-4">
                            <h2
                                    :class="`title font-weight-regular ${item.color}--text text--${item.dark} pb-1`"
                                    v-text="item.title"
                            ></h2>
                            <span
                                    :class="`font-weight-regular ${item.color}--text text--${item.dark} pb-3`"
                                    v-text="item.grade">
              </span>
                            <br v-if="item.grade">
                            <span :class="`font-weight-regular ${item.color}--text text--${item.dark} pb-2`"
                                  v-text="`${item.institution}, ${item.location}`">
              </span>
                            <div class="blue-grey--text text--darken-1 pb-1 hidden-md-and-up" v-text="item.date"></div>
                            <div class="blue-grey--text text--darken-3" v-text="item.text"></div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/sections/SectionLayout";
    export default {
        name: "Education",
        components: {SectionLayout},
        data: () => ({
            items: [
                {
                    color: 'teal',
                    dark: 'darken-1',
                    date: '2016 - 2020',
                    title: 'BEng (Hons) Software Engineering',
                    grade: 'First-Class (Predicted)',
                    institution: 'Edinburgh Napier University',
                    location: 'Edinburgh, UK',
                    text: 'A wide variety of modules covering the analysis, design, development, testing, evaluation and' +
                        ' modification of reliable, maintainable and high-quality software including real-time, mobile and' +
                        ' large-scale enterprise systems.'
                },
                {
                    color: 'blue',
                    dark: 'darken-1',
                    date: '2014 - 2016',
                    title: 'A-Levels',
                    institution: 'Boston College',
                    location: 'Boston, UK',
                    text: 'A-Levels in Math\'s, Further Math\'s and Economics. IELTS (Academic) 8 '
                }
            ]
        }),
    }
</script>

<style scoped>

</style>
