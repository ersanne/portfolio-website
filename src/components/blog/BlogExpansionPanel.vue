<template>
    <v-expansion-panels
            multiple
            accordion>
        <v-expansion-panel class="mb-4">
            <v-expansion-panel-header>
                <v-row>
                    <v-col>
                        <h2>My Blog Post</h2>
                    </v-col>
                    <v-col class="text-right">
                        <v-chip
                                class="mr-2"
                                color="pink"
                                text-color="white"
                                small
                        >
                            <v-icon left>mdi-label</v-icon>
                            Tag
                        </v-chip>
                        <v-chip
                                class="mr-2"
                                color="blue"
                                text-color="white"
                                small
                        >
                            <v-icon left>mdi-label</v-icon>
                            Tag
                        </v-chip>
                    </v-col>
                </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <p>This is where a summary would be</p>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="mb-4">
            <v-expansion-panel-header>
                <v-row>
                    <v-col>
                        Test 1
                    </v-col>
                    <v-col>
                        Test 2
                    </v-col>
                </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="mb-4">
            <v-expansion-panel-header>
                <v-row>
                    <v-col>
                        Test 1
                    </v-col>
                    <v-col>
                        Test 2
                    </v-col>
                </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
    export default {
        name: "BlogExpansionPanel"
    }
</script>

<style scoped>

</style>
