<template>
  <SectionLayout id="technical_skills" title="Technical Skills">
    <v-row>
      <v-col cols="12" md="6" v-for="(slice, i) in data" :key="i" class="px-4 mb-4">
        <v-row justify="space-between"
               no-gutters
        >
          <v-col cols="12" md="3" class="pb-2">
            <span class="font-weight-medium">{{slice.primary.label}}</span>
          </v-col>
          <v-col cols="12" md="9">
            <v-chip outlined v-for="(item, i) in slice.items" :key="i" class="mx-1 mb-2" :color="item.color">
              {{ item.name }}
            </v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </SectionLayout>
</template>

<script>
import SectionLayout from "@/components/home/SectionLayout";

export default {
  name: "TechSkills",
  components: {SectionLayout},
  props: {
    data: Array
  }
}
</script>

<style scoped>
@media (max-width: 599px) {
  .column_wrapper {
    column-count: 1;
  }
}

@media (min-width: 600px) {
  .column_wrapper {
    column-count: 2;
  }
}
</style>
