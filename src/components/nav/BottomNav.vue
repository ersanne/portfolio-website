<template>
    <v-bottom-navigation
            app
            fixed
            horizontal
            grow
            class="hidden-md-and-up"
    >
        <v-row no-gutters>
            <v-col v-for="(link, i) in navLinks"
                   :key="i"
            >
                <v-btn
                        :to="link.path"
                        class="subtitle-1 font-weight-medium"
                        exact-active-class="primary--text subtitle-1 font-weight-medium"
                        text>
                    {{ link.name }}
                </v-btn>
            </v-col>
            <v-col align-self="center">
                <v-switch
                        v-model="$vuetify.theme.dark"
                        label="Dark Mode"
                        class="pt-1 mt-0"
                        hide-details
                        dense
                ></v-switch>
            </v-col>
        </v-row>
    </v-bottom-navigation>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "BottomNav",
        computed: mapState([
            'navLinks'
        ])
    }
</script>

<style scoped>
    .v-btn {
        height: 100% !important;
    }
</style>
