<template>
    <div class="home-content" v-if="contentReady">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <SoftSkills></SoftSkills>
        <Languages></Languages>
        <Experience></Experience>
        <Education :data="sections.education"></Education>
        <Contact></Contact>
    </div>
</template>

<script>
    import Banner from "@/components/sections/Banner";
    import SoftSkills from "@/components/sections/SoftSkills";
    import About from "@/components/sections/About";
    import Contact from "@/components/sections/Contact";
    import Languages from "@/components/sections/Languages";
    import Skills from "@/components/sections/TechnicalSkills";
    import Education from "@/components/sections/Education";
    import Experience from "@/components/sections/Experience";

    export default {
        name: "Home",
        components: {
            Banner,
            SoftSkills,
            About,
            Contact,
            Languages,
            Skills,
            Education,
            Experience,
        },
        data () {
            return {
                contentReady: false,
                sections: {
                    about: null,
                    tech_skills: null,
                    soft_skills: null,
                    languages: null,
                    experience: null,
                    education: null,
                    contact: null
                }
            };
        },
        methods: {
            getContent () {
                this.$prismic.client.getSingle('home')
                    .then((document) => {
                        this.sections.about = document.data.about;
                        this.sections.tech_skills = document.data.tech_skills;
                        this.sections.soft_skills = document.data.soft_skills;
                        this.sections.languages = document.data.languages;
                        this.sections.experience = document.data.experience;
                        this.sections.education = document.data.education;
                        this.sections.contact = document.data.contact;
                    })
                this.contentReady = true
            }
        },
        created () {
            this.getContent();
        }
    }
</script>

<style scoped>

</style>
