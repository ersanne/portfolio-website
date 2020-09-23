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
              <DarkModeSwitch class="pt-0 mt-0"></DarkModeSwitch>
            </v-col>
        </v-row>
    </v-bottom-navigation>
</template>

<script>
    import {mapState} from 'vuex'
    import DarkModeSwitch from "@/components/nav/DarkModeSwitch";

    export default {
        name: "BottomNav",
      components: {DarkModeSwitch},
      computed: mapState([
            'navLinks'
        ]),
    }
</script>

<style scoped>
    .v-btn {
        height: 100% !important;
    }
</style>
