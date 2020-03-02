<template>
    <v-combobox
            v-model="chips"
            :items="items"
            chips
            clearable
            label="Filter by tags"
            multiple
            prepend-icon="mdi-filter"
            solo
    >
        <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="remove(item)"
            >
                <span>{{ item }}</span>&nbsp;
            </v-chip>
        </template>
    </v-combobox>
</template>

<script>
    export default {
        name: "BlogFilter",
        data() {
            return {
                chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
                items: ['Streaming', 'Eating'],
            }
        },
        methods: {
            remove(item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
            },
        },
    }
</script>

<style scoped>

</style>
