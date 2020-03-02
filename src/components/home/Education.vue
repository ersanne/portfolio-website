<template>
    <SectionLayout id="education" title="Education">
        <v-layout wrap>
            <v-flex xs12>
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                            v-for="(item, i) in data"
                            :key="i"
                            :color="item.color"
                            small
                    >
            <span
                    slot="opposite"
                    :class="`title font-weight-regular ${item.color}--text text--${item.color_variant}`"
                    v-text="`${formatDate(item.from_date)} - ${formatDate(item.to_date)}`"
            ></span>
                        <div class="py-4">
                            <h2
                                    :class="`title font-weight-regular ${item.color}--text text--${item.color_variant} pb-1`"
                                    v-text="$prismic.richTextAsPlain(item.qualification)"
                            ></h2>
                            <span
                                    :class="`font-weight-regular ${item.color}--text text--${item.color_variant} pb-3`"
                                    v-text="item.grade">
              </span>
                            <br v-if="item.grade">
                            <span :class="`font-weight-regular ${item.color}--text text--${item.color_variant} pb-2`"
                                  v-text="`${item.institution}, ${item.location}`">
              </span>
                            <div class="text--darken-1 pb-1 hidden-md-and-up" v-text="`${formatDate(item.from_date)} - ${formatDate(item.to_date)}`"></div>
<!--                            <div class="text&#45;&#45;darken-3" v-text="item.summary"></div>-->
                            <prismic-rich-text class="text--darken-3" :field="item.summary"/>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
    </SectionLayout>
</template>

<script>
    import moment from 'moment'
    import SectionLayout from "@/components/home/SectionLayout";

    export default {
        name: "Education",
        components: {SectionLayout},
        props: {
            data: Array,
        },
        methods: {
            // TODO make this a static helper outside components
            formatDate : function(date) {
                return moment(date).format('MMM YYYY')
            }
        }
    }
</script>

<style scoped>

</style>
