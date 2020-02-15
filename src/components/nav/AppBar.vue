<template>
    <v-app-bar
            app
            color="appbar"
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
            <v-btn flat>
                Home
            </v-btn>
            <v-btn
            >
                Projects
            </v-btn>
            <v-btn
            >
                Blog
            </v-btn>
            <v-switch
                    v-model="$vuetify.theme.dark"
                    label="Dark Theme"
            ></v-switch>
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
