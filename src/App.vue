<template>
    <v-app dark>
        <AppBar></AppBar>
        <v-content>
            <RouterView></RouterView>
        </v-content>
        <Footer></Footer>
        <BottomNav></BottomNav>
        <CookieNotice></CookieNotice>
    </v-app>
</template>

<script>
    import BottomNav from "@/components/nav/BottomNav";
    import AppBar from "@/components/nav/AppBar";
    import Footer from "@/components/Footer";
    import CookieNotice from "@/components/CookieNotice";

    export default {
        name: 'App',
        metaInfo: {
            title: 'Erik Sanne',
            titleTemplate: '%s - Erik Sanne',
        },
        components: {
            CookieNotice,
            Footer,
            AppBar,
            BottomNav
        },
        data: () => ({
            fab: false
        }),
        created: function () {
            this.$vuetify.theme.dark = this.$store.getters.darkMode
        }
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
