<template>
    <v-bottom-navigation
            app
            fixed
            horizontal
            grow
            hide-on-scroll
            class="hidden-md-and-up"
    >
        <v-row no-gutters justify="center">
            <v-col v-for="(link, i) in navLinks"
                   :key="i"
            >
                <v-btn
                        :to="link.path"
                        class="subtitle-1 font-weight-medium"
                        exact-active-class="primary--text subtitle-1 font-weight-medium"
                        text
                        block>
                    {{ link.name }}
                </v-btn>
            </v-col>
            <v-col cols="5" xs="4" sm="3" class="pl-3" align-self="center">
<!--            <v-col cols="auto" align-self="center"> &lt;!&ndash; Until Nav links are re-enabled &ndash;&gt;-->
                <v-switch
                        v-model="$store.state.darkMode"
                        label="Dark Mode"
                        class="pt-1 mt-0"
                        hide-details
                        dense
                        @click.stop.prevent="toggleTheme()"
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
        ]),
        methods: {
            toggleTheme() {
                this.$store.dispatch('toggleDarkMode');
            }
        }
    }
</script>

<style scoped>
    .v-btn {
        height: 100% !important;
    }
</style>
