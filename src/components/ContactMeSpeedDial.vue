<template>
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
</template>

<script>
    export default {
        name: "ContactMeSpeedDial"
    }
</script>

<style scoped>

</style>
