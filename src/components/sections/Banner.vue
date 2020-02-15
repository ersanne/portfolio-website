<template>
    <v-parallax
            src="img/banner_new.jpeg"
    >
        <v-layout
                align-center
                column
                justify-center
        >
            <v-avatar class="mb-4" size="200">
                <v-img class="avatar_img_border" src="img/profile_pic.jpg"></v-img>
            </v-avatar>
            <h1 class="display-2 mb-3">Erik Sanne</h1>
            <h4 class="subheading">Software Engineer</h4>
        </v-layout>
    </v-parallax>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style scoped>
    .v-parallax__image {
        transform: none !important;
        width: 100% !important;
    }
    .avatar_img_border {
        border: 4px solid #fff3e0;
    }
</style>
