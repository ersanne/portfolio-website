<template>
    <SectionLayout id="languages" title="Languages">
        <v-layout wrap justify-center>
            <v-flex xs12 sm6 md5 class="px-4">
                <div v-for="item in items" :key="item.text" class="mb-4">
                    <v-layout align-center fill-height>
                        <v-img max-height="20px" max-width="24px" contain :src="`flags/${item.flag}`"></v-img>
                        <div class="subheading blue-grey--text text--darken-3 pl-1" v-text="item.text"></div>
                        <v-spacer></v-spacer>
                        <div class="caption blue-grey--text text--darken-2" v-text="item.level_text"></div>
                    </v-layout>
                    <v-progress-linear class="my-1" height="8" :value="item.value" :color="item.color"></v-progress-linear>
                </div>
            </v-flex>
        </v-layout>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/sections/SectionLayout";
    export default {
        name: "Languages",
        components: {SectionLayout},
        data: () => ({
            items: [
                {
                    text: 'German',
                    value: 100,
                    level_text: 'Native',
                    flag: 'germany-round-icon-32.png',
                    color: 'yellow darken-1'
                },
                {
                    text: 'English',
                    value: 95,
                    level_text: 'Fluent',
                    flag: 'united-kingdom-round-icon-32.png',
                    color: 'red'
                }
            ]
        }),
    }
</script>

<style scoped>

</style>
