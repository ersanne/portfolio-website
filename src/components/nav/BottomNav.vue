<template>
    <v-bottom-navigation
            app
            fixed
            horizontal
            grow
    >
        <v-row no-gutters>
            <v-col v-for="route in routes"
                   :key="route.path"
            >
                <v-btn
                        :to="route.path"
                        class="subtitle-1 font-weight-medium"
                        exact-active-class="primary--text subtitle-1 font-weight-medium"
                        text>
                    {{ route.name }}
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
    export default {
        name: "BottomNav",
        computed: {
            routes: function () {
                return this.$router.options.routes.filter(route => route.path !== '*')
            }
        }
    }
</script>

<style scoped>
    .v-btn {
        height: 100% !important;
    }
</style>
