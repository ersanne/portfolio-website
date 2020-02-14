<template>
    <v-app>
        <AppBar></AppBar>
        <v-content>
            <v-container fluid>
                <RouterView></RouterView>
            </v-container>
            <v-speed-dial
                    fab
                    v-model="fab"
                    bottom
                    left
                    direction="bottom"
                    open-on-hover
                    transition="slide-y-transition"
                    absolute
            >
                <template v-slot:activator>
                    <v-btn
                            v-model="fab"
                    >
                        Contact Me
                    </v-btn>
                </template>
                <div class="text-left">
                    <v-btn
                    >
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                    >
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                    >
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                    >
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                </div>
            </v-speed-dial>
        </v-content>
        <BottomNav class="hidden-md-and-up"></BottomNav>
    </v-app>
</template>

<script>


    import BottomNav from "@/components/nav/BottomNav";
    import AppBar from "@/components/nav/AppBar";

    export default {
        name: 'App',

        components: {
            AppBar,
            BottomNav
        },
        data: () => ({
            fab: false
        }),
    };
</script>

<style>
    .container, v-app-bar--fixed, .v-toolbar__content {
        max-width: 1200px
    }
    .v-toolbar--fixed, .v-toolbar__content {
        margin: 0 auto
    }
</style>
