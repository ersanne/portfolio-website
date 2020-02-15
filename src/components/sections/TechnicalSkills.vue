<template>
    <SectionLayout id="technical_skills" title="Technical Skills">
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-4" v-for="(groups, i) in bar_items" :key="i">
                <div v-for="item in groups" :key="item.text" class="mb-4">
                    <v-layout align-center fill-height>
                        <v-icon :color="item.color" v-text="`${item.icon}`" class="mr-2"></v-icon>
                        <div class="subheading text--darken-3" v-text="item.text"></div>
                        <v-spacer></v-spacer>
                        <div class="caption text--darken-2" v-text="item.level_text"></div>
                    </v-layout>
                    <v-progress-linear class="my-1" readonly height="8" :value="item.value"
                                       :color="item.color"></v-progress-linear>
                </div>
            </v-flex>
        </v-layout>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/sections/SectionLayout";

    export default {
        name: "Skills",
        components: {SectionLayout},
        data: () => ({
            bar_items: [
                [
                    {
                        icon: 'icon-java',
                        text: 'Java',
                        value: 75,
                        level_text: 'Advanced',
                        color: 'red'
                    },
                    {
                        icon: 'icon-spring',
                        text: 'Spring Framework',
                        value: 50,
                        level_text: 'Intermediate',
                        color: 'green'
                    },
                    {
                        icon: 'mdi-language-csharp',
                        text: 'C#',
                        value: 75,
                        level_text: 'Advanced',
                        color: 'purple darken-2'
                    },
                    {
                        icon: 'mdi-language-python',
                        text: 'Python',
                        value: 50,
                        level_text: 'Intermediate',
                        color: 'light-blue darken-2'
                    },
                    {
                        icon: 'mdi-docker',
                        text: 'Docker',
                        value: 25,
                        level_text: 'Beginner',
                        color: 'blue lighten-2'
                    }
                ],
                [
                    {
                        icon: 'fa-database',
                        text: 'SQL',
                        value: 75,
                        level_text: 'Advanced',
                        color: 'black'
                    },
                    {
                        icon: 'fa-vector-square',
                        text: 'UML',
                        value: 50,
                        level_text: 'Intermediate',
                        color: 'blue darken-2'
                    },
                    {
                        icon: 'mdi-language-javascript',
                        text: 'JavaScript',
                        value: 50,
                        level_text: 'Intermediate',
                        color: 'yellow darken-2'
                    },
                    {
                        icon: 'mdi-vuejs',
                        text: 'VueJS',
                        value: 50,
                        level_text: 'Intermediate',
                        color: 'green lighten-1'
                    },
                    {
                        icon: 'mdi-angular',
                        text: 'Angular',
                        value: 25,
                        level_text: 'Beginner',
                        color: 'red darken-1'
                    }
                ]
            ],
        }),
    }
</script>

<style scoped>

</style>
