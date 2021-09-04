<template>
    <v-app dark>
<!--        <div v-if="$router.currentRoute.name === 'landing-page'">-->
<!--            <RouterView></RouterView>-->
<!--        </div>-->
<!--        <div v-else>-->
            <AppBar></AppBar>
            <v-main>
                <RouterView></RouterView>
            </v-main>
            <Footer></Footer>
<!--        </div>-->
        <BottomNav></BottomNav>
<!--        <CookieNotice></CookieNotice>-->
    </v-app>
</template>

<script>
    import BottomNav from "@/components/nav/BottomNav";
    import Footer from "@/components/Footer";
    // import CookieNotice from "@/components/CookieNotice";
    import AppBar from "@/components/nav/AppBar";

    export default {
        name: 'App',
        metaInfo: {
            title: 'Erik Sanne',
            titleTemplate: '%s - Erik Sanne',
        },
        components: {
            AppBar,
            // CookieNotice,
            Footer,
            BottomNav
        },
        data: () => ({
            fab: false
        }),
        created: function () {
            // Check to see if Media-Queries are supported
            if (window.matchMedia && this.$store.getters.usePreferredColorScheme) {
                // Check if the dark-mode Media-Query matches
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    // Dark
                    this.$store.dispatch('setDarkMode')
                } else {
                    // Light
                    // Nothing to do here
                }
            } else {
                // Default (when Media-Queries are not supported or theme was previously set)
                this.$vuetify.theme.dark = this.$store.getters.darkMode
            }
        }
    };
</script>

<style scoped>

</style>
