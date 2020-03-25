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
        <ButtonGoTop></ButtonGoTop>
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
    import ButtonGoTop from "@/components/home/ButtonGoTop";

    export default {
        name: "Home",
        components: {
            ButtonGoTop,
            Banner,
            SoftSkills,
            About,
            Contact,
            Languages,
            Skills,
            Education,
            Experience,
        },
        metaInfo: {
            title: 'Home',
            meta: [
                {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'Erik Sanne Homepage and Digital CV'},
                // Canonical link (The url expected to be used
                {rel: 'canonical', href: 'https://eriksanne.com'},
                // OpenGraph data (Most widely used)
                {property: 'og:title', content: 'Erik Sanne'},
                {property: 'og:site_name', content: 'Erik Sanne'},
                // The list of types is available here: http://ogp.me/#types
                {property: 'og:type', content: 'website'},
                // Should the the same as your canonical link, see below.
                {property: 'og:url', content: 'https://eriksanne.com'},
                {property: 'og:image', content: 'https://eriksanne.com/img/logo.png'},
                // Often the same as your meta description, but not always.
                {property: 'og:description', content: 'Erik Sanne Homepage and Digital CV'},
                // Twitter card
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:site', content: 'https://eriksanne.com'},
                {name: 'twitter:title', content: 'Erik Sanne'},
                {name: 'twitter:description', content: 'Erik Sanne Homepage and Digital CV'},
                // Your twitter handle, if you have one.
                {name: 'twitter:creator', content: '@ErikKonradSanne'},
                {name: 'twitter:image:src', content: 'https://eriksanne.com/img/profile_pic.jpg'},

                // Google / Schema.org markup:
                {itemprop: 'name', content: 'Erik Sanne'},
                {itemprop: 'description', content: 'Erik Sanne Homepage and Digital CV'},
                {itemprop: 'image', content: 'https://www.eriksanne.com/img/logo.png'}
            ]
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
