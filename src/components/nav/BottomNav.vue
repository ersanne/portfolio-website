<template>
    <v-bottom-navigation
            app
            fixed
            horizontal
    >
        <v-btn>
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn>
            <span>Portfolio</span>
            <v-icon>mdi-folder</v-icon>
        </v-btn>
        <v-btn>
            <span>Blog</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        name: "BottomNav"
    }
</script>

<style scoped>
    .v-btn {
        height: 100% !important;
    }
</style>
