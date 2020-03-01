<template>
    <div class="home-content">
        <Banner></Banner>
        <About :data="sections.about"></About>
        <Skills :data="sections.tech_skills"></Skills>
        <SoftSkills :data="sections.soft_skills"></SoftSkills>
        <Languages :data="sections.languages"></Languages>
        <Experience :data="sections.experience"></Experience>
        <Education :data="sections.education"></Education>
        <Contact :data="sections.contact"></Contact>
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
