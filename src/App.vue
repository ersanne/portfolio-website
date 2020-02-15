<template>
    <v-app>
        <AppBar></AppBar>
        <v-content>
            <v-container fluid>
                <RouterView></RouterView>
            </v-container>
        </v-content>
        <Footer></Footer>
        <BottomNav class="hidden-md-and-up"></BottomNav>
    </v-app>
</template>

<script>


    import BottomNav from "@/components/nav/BottomNav";
    import AppBar from "@/components/nav/AppBar";
    import Footer from "@/components/Footer";

    export default {
        name: 'App',

        components: {
            Footer,
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
