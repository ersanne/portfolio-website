<template>
    <SectionLayout id="info" title="Info">
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
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/sections/SectionLayout";

    export default {
        name: "Info",
        components: {SectionLayout}
    }
</script>

<style scoped>

</style>
