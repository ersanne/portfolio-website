<template>
    <section>
        <v-container>
            <v-card>
                <v-card-title>
                    {{title}}
                </v-card-title>
                <v-card-text>
                    <slot></slot>
                </v-card-text>
            </v-card>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "SectionLayout",
        props: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>
