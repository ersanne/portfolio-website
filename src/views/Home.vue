<template>
    <div class="home">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <SoftSkills></SoftSkills>
        <Languages></Languages>
        <Experience></Experience>
        <Education></Education>
        <Contact></Contact>
    </div>
</template>

<script>
    import Experience from "@/components/sections/Experience";
    import Education from "@/components/sections/Education";
    import Skills from "@/components/sections/TechnicalSkills";
    import Languages from "@/components/sections/Languages";
    import Contact from "@/components/sections/Contact";
    import About from "@/components/sections/About";
    import SoftSkills from "@/components/sections/SoftSkills";
    import Banner from "@/components/sections/Banner";

    export default {
        name: 'Home',
        components: {
            Banner,
            SoftSkills,
            About,
            Contact,
            Languages,
            Skills,
            Education,
            Experience,
        }
    }
</script>
