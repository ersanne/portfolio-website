<template>
    <v-footer
            app
            absolute>
        <v-col
                class="text-center"
                cols="12"
        >
            Made with <v-icon color="red">mdi-heart</v-icon> | &copy;{{ new Date().getFullYear() }} Erik Sanne
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
