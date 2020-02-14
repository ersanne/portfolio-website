<template>
    <v-app-bar
            app
    >
        <div class="d-flex align-center">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink"
                    contain
                    src="@/assets/logo/logo_transparent_cropped_small.png"
                    transition="scale-transition"
                    width="240"
            />
        </div>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn>
                Home
            </v-btn>
            <v-btn
            >
                Portfolio
            </v-btn>
            <v-btn
            >
                Blog
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar"
    }
</script>

<style scoped>
    .v-btn {
        height: 100% !important;
    }
</style>
