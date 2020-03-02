<template>
    <div class="home-content" v-if="hasContent">
        <Banner :data="sections.banner"></Banner>
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
    import Banner from "@/components/home/Banner";
    import SoftSkills from "@/components/home/SoftSkills";
    import About from "@/components/home/About";
    import Contact from "@/components/home/Contact";
    import Languages from "@/components/home/Languages";
    import Skills from "@/components/home/TechnicalSkills";
    import Education from "@/components/home/Education";
    import Experience from "@/components/home/Experience";

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
        data() {
            return {
                hasContent: false,
                sections: {
                    banner: {
                        profile_picture: null,
                        banner_image: null,
                        banner_subtitles: null,
                    },
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
            getContent() {
                this.$prismic.client.getSingle('home')
                    .then((document) => {
                        if (document) {
                            this.sections.banner.profile_picture = document.data.profile_picture;
                            this.sections.banner.banner_image = document.data.banner_image;
                            this.sections.banner.banner_subtitles = document.data.banner_subtitles;
                            this.sections.about = document.data.about;
                            this.sections.tech_skills = document.data.tech_skills;
                            this.sections.soft_skills = document.data.soft_skills;
                            this.sections.languages = document.data.languages;
                            this.sections.experience = document.data.experience;
                            this.sections.education = document.data.education;
                            this.sections.contact = document.data.contact;

                            this.checkForContent();

                        } else {
                            this.$router.push({name: 'not-found'})
                        }
                    })
            },
            checkForContent: function () {
                if (this.sections.banner.profile_picture != undefined ||
                    this.sections.banner.banner_image != undefined ||
                    this.sections.banner.banner_subtitles != undefined ||
                    this.sections.about != undefined ||
                    this.sections.tech_skills != undefined ||
                    this.sections.soft_skills != undefined ||
                    this.sections.languages != undefined ||
                    this.sections.experience != undefined ||
                    this.sections.education != undefined ||
                    this.sections.contact != undefined) {
                    this.hasContent = true;
                }
            },
        },
        created() {
            this.getContent();
        }
    }
</script>

<style scoped>

</style>
