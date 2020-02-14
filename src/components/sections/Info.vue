<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-card>
                    <v-card-title>Info</v-card-title>
                    <v-card-text class="text-center">
                        <v-row>
                            <v-col>
                                <v-avatar size="180">
                                    <v-img src="@/assets/profile_pic.jpg"
                                    ></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <b>Erik Sanne</b><br>
                                Software Developer<br>
                                Edinburgh, United Kingdom
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card style="height: 100%">
                    <v-card-title>About</v-card-title>
                    <v-card-text>
                        Highly skilled and motivated Software Engineering undergraduate, with over one year of
                        experience in
                        professional software development. Solid knowledge of the design, development and testing of
                        computer software, with innovative problem-solving skills and proven attention to detail.
                        Analytical
                        with excellent critical reasoning, with a commitment to deliver quality performance and maintain
                        professional excellence.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "PersonalInfo"
    }
</script>

<style scoped>

</style>
