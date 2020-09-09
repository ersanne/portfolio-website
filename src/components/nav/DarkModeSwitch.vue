<template>
  <v-switch
      v-model="$store.state.darkMode"
      label="Dark Mode"
      hide-details
      @click.stop.prevent="toggleTheme()"
  ></v-switch>
</template>

<script>
export default {
  name: "DarkModeSwitch",
  methods: {
    toggleTheme() {
      this.$store.dispatch('toggleDarkMode')
      this.$store.dispatch('disablePreferredColorScheme')
      // Wait for theme to switch before resetting disqus
      // Otherwise disqus does not pick up color properly
      setTimeout(() => {
        this.$disqus.reset()
      }, 10)
    }
  }
}
</script>

<style scoped>

</style>
