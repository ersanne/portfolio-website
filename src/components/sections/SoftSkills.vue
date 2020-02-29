<template>
    <SectionLayout id="soft_skills" title="Soft Skills">
        <v-layout wrap>
            <v-layout class="px-4 hidden-xs-only">
                <v-flex pa-1 shrink v-for="item in bullet_items" :key="item.text" class="mb-4">
                    <v-card :color="item.color" dark>
                        <v-card-text class="white--text" v-text="item.text"></v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout wrap class="px-4 hidden-sm-and-up">
                <v-flex pa-1 shrink v-for="item in bullet_items" :key="item.text" class="mb-4">
                    <v-card :color="item.color" dark>
                        <v-card-text v-text="item.text"></v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-layout>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/sections/SectionLayout";
    export default {
        name: "SoftSkills",
        components: {SectionLayout},
        data: () => ({
            bullet_items: [
                {
                    text: 'Able to work independently or as part of a wider team',
                    color: 'blue'
                },
                {
                    text: 'Proficiency in Microsoft Office',
                    color: 'orange'
                },
                {
                    text: 'Experience with both Agile and Waterfall methodologies',
                    color: 'green lighten-1'
                },
                {
                    text: 'Excellent problem solver',
                    color: 'red darken-2'
                }
            ]
        }),
    }
</script>

<style scoped>

</style>
