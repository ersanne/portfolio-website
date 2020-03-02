<template>
    <v-fab-transition>
        <v-btn
                v-scroll="onScroll"
                v-show="hidden"
                v-on:click="$vuetify.goTo(0)"
                bottom
                left
                fab
                fixed
                color="primary"
                class="padding-sm-and-down"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </v-fab-transition>
</template>

<script>
export default {
  data: () => ({
    hidden: false
  }),
  methods: {
    onScroll () {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || document.documentElement.offsetTop || 0
      this.hidden = top > 560
    }
  }
}
</script>

<style scoped>
    @media (max-width:959px) {
        .padding-sm-and-down {
            margin-bottom: 56px;
        }
    }
</style>
