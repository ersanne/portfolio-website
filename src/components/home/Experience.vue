<template>
  <SectionLayout id="experience" title="Experience">
    <v-layout wrap>
      <v-flex xs12>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
              v-for="(item, i) in data.slice(0,numItemsShown)"
              :color="`${item.color} ${item.color_variant}`"
              :key="i"
              small
          >
                        <span slot="opposite"
                              class="title"
                              v-text="`${formatDate(item.from_date)} - ${formatDate(item.to_date)}`"
                        ></span>
            <div class="py-4">
              <h2 class="title text--darken-3 pb-2"
                  v-text="$prismic.richTextAsPlain(item.job_title)"></h2>
              <span :class="`${item.color}--text text--${item.color_variant} pb-2`"
                    v-text="`${item.company_name}, ${item.company_location}`">
                            </span>
              <div class="pb-1 hidden-md-and-up"
                   v-text="`${formatDate(item.from_date)} - ${formatDate(item.to_date)}`"></div>
              <prismic-rich-text class="pb-1" :field="item.summary"/>
            </div>
          </v-timeline-item>
        </v-timeline>
<!--        <v-btn v-if="numItemsShown < data.length" @click="showMoreItems()" outlined text color="accent">-->
<!--          Show all-->
<!--        </v-btn>-->
<!--        <v-btn v-if="numItemsShown >= data.length" block @click="showLessItems()" outlined text color="accent">Show less</v-btn>-->
      </v-flex>
    </v-layout>
  </SectionLayout>
</template>

<script>
import SectionLayout from "@/components/home/SectionLayout";
import moment from "moment";

export default {
  name: "Experience",
  components: {SectionLayout},
  props: {
    data: Array
  },
  data() {
    return {
      numItemsShown: 100,
    }
  },
  methods: {
    formatDate: function (rawDate) {
      // TODO make this a static helper outside components
      let date = moment(rawDate)
      if (date.isValid()) {
        return date.format('MMM YYYY')
      } else {
        return 'Present'
      }
    },
    showMoreItems: function () {
      this.numItemsShown = this.data.length;
    },
    showLessItems: function () {
      this.numItemsShown = 3
    }
  }
}
</script>

<style scoped>

</style>
