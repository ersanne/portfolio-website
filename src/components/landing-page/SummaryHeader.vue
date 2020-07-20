<template>
    <v-img src="@/assets/hero.jpg" max-height="100vh">
        <v-container fluid style="height: 100vh">
            <v-row align="center" justify="center" style="height: 100%">

                <v-col cols="12" md="2" class="d-flex flex-column align-center justify-center">
                    <v-avatar size="200">
                        <v-img src="https://images.prismic.io/eriksannecom/498741f7-715a-4055-9afa-51a1bfcdbced_QONZ8vJF_400x400.jpg?auto=compress,format&rect=0,0,400,400&w=200&h=200"></v-img>
                    </v-avatar>
                </v-col>
                <v-col cols="12" md="6" style="max-width: 560px;">
                    <v-row style="min-height: 170px;">
                        <v-col cols="12">
                            <vue-typed-js :strings="typedStrings"
                                          :showCursor="false"
                                          :typeSpeed="25"
                                          :startDelay="30"
                                          class="white--text"
                            >
                                <span class="typing"></span>
                            </vue-typed-js>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" md="4">
                            <v-btn block outlined to="home">About</v-btn>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-btn block outlined to="projects">Projects</v-btn>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-btn block outlined to="blog">Blog</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
</template>

<script>
    export default {
        name: "SummaryHeader",
        data: () => ({

            typedStrings: [
                "<h1>Hi, I'm Erik Sanne</h1><br>" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lectus vitae augue laoreet pretium. Donec varius felis nec volutpat consectetur. Mauris ornare venenatis arcu id tempor.",
            ]
        }),
    }
</script>

<style scoped>
</style>
