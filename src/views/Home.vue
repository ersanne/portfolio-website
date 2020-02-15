<template>
  <div class="home">
    <PersonalInfo/>
    <Skills></Skills>
    <Languages></Languages>
    <Experience></Experience>
    <Education></Education>
    <Contact></Contact>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalInfo from "@/components/sections/Info";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";

export default {
  name: 'Home',
  components: {
    Contact,
    Languages,
    Skills,
    Education,
    Experience,
    PersonalInfo,
  }
}
</script>
