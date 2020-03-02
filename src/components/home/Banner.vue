<template>
    <v-img :src="data.banner_image.url"
           height="500"
    >
        <div class="d-flex flex-column align-center justify-center"
             style="height: 500px"
        >
            <v-avatar class="mb-4" size="200">
                <prismic-image class="avatar_img_border" :field="data.profile_picture"></prismic-image>
            </v-avatar>
            <h1 class="white--text display-2 mb-3">Erik Sanne</h1>
            <vue-typed-js :strings="subtitle_array"
                          :showCursor="false"
                          :typeSpeed="60"
                          :startDelay="50"
                          class="white--text"
            >
                <h4><span class="typing"></span> Software Engineer</h4>
            </vue-typed-js>
        </div>
    </v-img>
</template>

<script>
    export default {
        name: 'Banner',
        props: {
            data: Object,
        },
        computed: {
            subtitle_array: function () {
                return this.data.banner_subtitles.map(item => item.text)
            }
        }
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
