<template>
  <div class="home">
    <PersonalInfo/>
    <Experience></Experience>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalInfo from "@/components/sections/Info";
import Experience from "@/components/sections/Experience";

export default {
  name: 'Home',
  components: {
    Experience,
    PersonalInfo,
  }
}
</script>
