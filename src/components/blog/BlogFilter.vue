<template>
    <v-autocomplete
            v-model="chips"
            :items="tags"
            item-text="tag"
            item-value="tag"
            chips
            clearable
            multiple
            label="Filter by tags..."
            prepend-icon="mdi-filter"
    >
        <template v-slot:selection="data">
            <v-chip v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
            >
                <v-icon>{{data.item.icon}}</v-icon><span>{{ data.item.tag }}</span>
            </v-chip>
        </template>
        <template v-slot:item="data">
            <v-icon>{{data.item.icon}}</v-icon><span>{{ data.item.tag }}</span>
        </template>
    </v-autocomplete>
</template>

<script>
    export default {
        name: "BlogFilter",
        props: {
            tags: Array
        },
        data() {
            return {
                chips: [],
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
