<template>
    <v-app>
        <AppBar></AppBar>
        <v-content>
            <RouterView></RouterView>
        </v-content>
        <Footer></Footer>
        <BottomNav></BottomNav>
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
    .container, v-app-bar--fixed {
        max-width: 1264px;
    }
    .v-toolbar--fixed, .v-toolbar__content {
        margin: 0 auto
    }
</style>
