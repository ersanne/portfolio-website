<template>
    <v-app-bar
            app
    >
        <div class="d-flex align-center">
            <router-link to="/">
                <v-img
                        class="shrink"
                        contain
                        src="@/assets/logo/full-name/logo_transparent_cropped_small.png"
                        transition="scale-transition"
                        width="240"
                />
            </router-link>
        </div>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="(link, i) in navLinks"
                   :key="i"
                   :to="link.path"
                   exact-active-class="primary--text"
                   text>
                {{ link.name }}
            </v-btn>
        </v-toolbar-items>
        <div style="height: 50%"
             class="px-2">
            <v-btn href="https://drive.google.com/uc?id=1hB4meXXmXaFwEICmqYnHHpmmLm59RyDR&export=download"
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
    import {mapState} from 'vuex'

    export default {
        name: "AppBar",
        computed: mapState([
            'navLinks'
        ])
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
