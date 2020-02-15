<template>
    <v-footer
            absolute>
        <v-col
                class="text-center"
                cols="12"
        >
            &copy;{{ new Date().getFullYear() }} Erik Sanne
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
