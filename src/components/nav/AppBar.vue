<template>
    <v-app-bar
            app
    >
        <div class="d-flex align-center">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink"
                    contain
                    src="@/assets/logo/full-name/logo_transparent_cropped_small.png"
                    transition="scale-transition"
                    width="240"
            />
        </div>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="route in routes"
                   :key="route.path"
                   :to="route.path"
                   exact-active-class="primary--text"
                   text>
                {{ route.name }}
            </v-btn>
        </v-toolbar-items>
        <div style="height: 50%"
             class="px-2">
            <v-btn href="/ErikSanne_CV.docx"
                   color="primary"
                   rounded
            >
                CV
                <v-icon small>mdi-download</v-icon>
            </v-btn>
        </div>
        <v-switch
                class="hidden-sm-and-down"
                v-model="$vuetify.theme.dark"
                label="Dark Mode"
                hide-details
        ></v-switch>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",
        computed: {
            routes: function () {
                return this.$router.options.routes.filter(route => route.path !== '*')
            }
        }
    }
</script>

<style scoped>
    .max-width-md {
        max-width: 1264px;
    }

    .v-btn {
        height: 100% !important;
    }
</style>
