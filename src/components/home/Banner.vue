<template>
  <v-img id="banner-img" :src="data.banner_image.url"
         height="500"
  >
    <div class="d-flex flex-column align-center justify-center"
         style="height: 500px"
    >
      <v-avatar class="mb-4" size="200">
        <prismic-image class="avatar_img_border" :field="data.profile_picture"></prismic-image>
      </v-avatar>
      <h1 :class="`${textColour} display-2 mb-3`">Erik Sanne</h1>
      <vue-typed-js :strings="subtitle_array"
                    :showCursor="false"
                    :typeSpeed="60"
                    :startDelay="50"
                    :class="textColour"
      >
        <h4><span class="typing"></span> Software Engineer</h4>
      </vue-typed-js>
    </div>
  </v-img>
</template>

<script>
import Vanta from 'vanta/dist/vanta.net.min';
import * as THREE from "three";

export default {
  name: 'Banner',
  props: {
    data: Object,
  },
  computed: {
    subtitle_array: function () {
      return this.data.banner_subtitles.map(item => item.text)
    },
    textColour: function () {
      return this.$vuetify.theme.dark ? 'white--text' : 'black--text';
    },
  },
  mounted() {
   Vanta({
      el: '#banner-img',
      mouseControls: true,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xf44336,
      backgroundColor: this.$vuetify.theme.dark ? 0x272727 : 0xF5F5F5,
      THREE,
    });
  }
}
</script>

<style scoped>
.v-parallax__image {
  transform: none !important;
  width: 100% !important;
}

.avatar_img_border {
  border: 4px solid #D0D0D2;
}
</style>
