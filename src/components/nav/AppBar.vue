<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
            class="shrink"
            contain
            src="@/assets/logo/full-name/logo_transparent_cropped_small.png"
            transition="scale-transition"
            width="240"
        />
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="(link, i) in navLinks"
             :key="i"
             :to="link.path"
             exact-active-class="primary--text"
             text>
        {{ link.name }}
      </v-btn>
    </v-toolbar-items>
    <div style="height: 50%"
         class="px-2">
      <v-btn href="/ErikSanne_CV.pdf"
             color="primary"
             rounded
             target="_blank"
      >
        <v-icon small>mdi-download</v-icon>
        CV
      </v-btn>
    </div>
    <DarkModeSwitch class="hidden-sm-and-down"></DarkModeSwitch>
  </v-app-bar>
</template>

<script>
import {mapState} from 'vuex'
import DarkModeSwitch from "@/components/nav/DarkModeSwitch";

export default {
  name: "AppBar",
  components: {DarkModeSwitch},
  computed: mapState([
    'navLinks'
  ]),
}
</script>

<style scoped>
.max-width-md {
  max-width: 1264px;
}

.v-btn {
  height: 100% !important;
}
</style>
