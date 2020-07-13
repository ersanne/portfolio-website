<template>
    <v-container>
        <v-row>
            <h1>This is the blog title</h1>
        </v-row>
        <v-row>
            <h4>This is my amazing blog subtitle</h4>
        </v-row>
        <!-- Slice zone-->
        <v-row v-for="(slice, i) in slices"
               :key="i">
            <!-- Text section -->
            <v-col v-if="slice.slice_type === 'text'">
                <prismic-rich-text></prismic-rich-text>
            </v-col>
            <!-- Code section -->
            <v-col v-else-if="slice.slice_type === 'code_snippet'">

            </v-col>
            <!-- Image section -->
            <v-col v-else-if="slice.slice_type === 'image'">

            </v-col>
        </v-row>
        <!-- Slice zone end -->

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada bibendum mauris, id porttitor libero
            dictum nec. Vestibulum a elit ac odio sollicitudin iaculis a eget lorem. Vivamus imperdiet ipsum dapibus,
            accumsan urna vel, condimentum mauris. Aliquam sit amet ante sed urna pharetra tempus. Praesent at elit
            risus. Mauris sed malesuada ipsum. Nullam nec felis et magna accumsan dignissim. Morbi auctor augue lobortis
            arcu auctor, ac malesuada magna sodales. Nunc pharetra vitae lacus quis rhoncus.

            Vestibulum sodales, tortor et ornare imperdiet, nibh felis dictum est, id tincidunt eros enim ut felis.
            Donec mattis lorem ac magna posuere tristique. Sed sagittis nulla quis dui blandit, sed consequat est
            rutrum. Donec posuere dolor in dolor condimentum bibendum. Sed et erat condimentum, cursus leo sed, mollis
            sem. Vivamus feugiat ut tellus eu placerat. Curabitur accumsan nisl sed bibendum vulputate. Donec at leo sed
            metus luctus rutrum. Quisque in sapien purus. Pellentesque pretium a elit non gravida. Suspendisse potenti.

            Nam lobortis lacinia augue, eu gravida dui bibendum id. Maecenas eu massa ligula. Morbi finibus tempus ante,
            at gravida tellus consequat a. Fusce vel pharetra eros. Praesent semper est eget sapien iaculis consectetur.
            In tempus, felis eu consequat suscipit, ligula leo congue mauris, eget consectetur neque justo ut augue. Ut
            at facilisis risus. Vestibulum tristique, elit quis tristique venenatis, nibh urna maximus risus, nec
            faucibus diam enim vitae lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend
            vitae velit vel porttitor. Morbi tristique convallis enim, sed auctor leo gravida sed. Morbi malesuada leo
            id nibh hendrerit, id finibus tortor vulputate. Proin mattis vulputate interdum. Morbi felis sapien,
            hendrerit venenatis semper quis, efficitur a ante.

            Sed arcu enim, tempus vitae nisl quis, bibendum volutpat nisl. Aenean tincidunt tincidunt ultrices. Morbi
            vel pellentesque enim. Vivamus sed diam ullamcorper, posuere urna nec, pulvinar est. Aenean ut nulla non
            tellus tincidunt condimentum id a felis. Morbi bibendum orci leo, ac volutpat ipsum ultricies vel.
            Vestibulum ultricies velit urna, sed accumsan diam rhoncus iaculis.

            Vestibulum semper nunc in lacinia tristique. Fusce ultrices, lectus ac tincidunt lobortis, ex dui blandit
            felis, et condimentum neque mi vitae orci. Morbi imperdiet aliquet volutpat. Sed non aliquam erat, non porta
            tortor. Vivamus euismod justo sed velit rhoncus auctor. Vestibulum fringilla dapibus vehicula. Sed dignissim
            diam vitae gravida pharetra. Donec quis nulla maximus, bibendum tellus nec, consectetur sapien. Nulla vitae
            orci eget diam euismod lacinia in id quam. Donec aliquam metus ac nisi rhoncus, nec elementum enim cursus.
            Vivamus sit amet ultrices elit. Proin et euismod est, nec feugiat ligula. Vivamus eu ultricies ipsum.
            Aliquam aliquam sapien eu sem interdum, nec interdum nisl pellentesque. Vivamus molestie ullamcorper erat ac
            fermentum.

            Maecenas tempor, est et placerat vestibulum, ipsum nulla efficitur metus, nec laoreet quam ligula sed dui.
            Sed volutpat sagittis leo fermentum efficitur. Etiam vitae nunc volutpat diam dapibus pulvinar. Aenean
            ultricies magna viverra ipsum euismod, quis tempor nisl varius. In sit amet ultrices elit. Phasellus varius
            odio vel erat dignissim sollicitudin. Vestibulum eu enim id magna gravida tristique id nec enim. Suspendisse
            vestibulum at velit ac tincidunt. Nam imperdiet vehicula enim eget feugiat. Sed ac suscipit nibh. Sed
            gravida mollis eleifend.

            Quisque vel tellus id lorem sodales luctus. Praesent vel orci volutpat, dapibus arcu at, laoreet neque.
            Morbi ullamcorper hendrerit commodo. Praesent ante quam, congue in dictum at, egestas quis ante. Curabitur
            hendrerit magna in nibh porttitor venenatis. Pellentesque vel placerat mauris. Duis ac ante in odio gravida
            ultricies. Proin ac sem pretium, aliquet nisi vel, condimentum nibh. Sed euismod dignissim elit eget
            convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pellentesque ante id sapien
            semper, at ullamcorper magna iaculis.

            Etiam suscipit sit amet velit ac pretium. Curabitur dignissim maximus mi, ut consectetur lacus vulputate eu.
            Vestibulum eu enim magna. Fusce elementum non leo sit amet fermentum. Phasellus eu lorem id elit pretium
            porttitor non non leo. Proin molestie auctor est, sagittis ullamcorper nulla euismod vitae. Proin efficitur
            mollis dapibus. Praesent id nisi at ex vestibulum consectetur nec eget metus. Curabitur fermentum erat vitae
            aliquet hendrerit. Mauris bibendum est id placerat efficitur. Suspendisse nec sollicitudin tellus, in
            facilisis velit. Pellentesque tempor lacus rhoncus ante suscipit, in commodo quam maximus. Pellentesque
            laoreet gravida sem. Cras blandit nec nunc a auctor. Cras imperdiet est non suscipit porttitor. Nullam
            tristique sapien fermentum orci lobortis vestibulum.

            Sed sit amet pharetra nunc. Donec sit amet accumsan nisl. Integer vestibulum molestie orci ac luctus.
            Maecenas faucibus ut felis eget rhoncus. Vivamus interdum lorem mauris, ac laoreet urna consectetur sit
            amet. Quisque scelerisque massa vel nisi molestie lacinia. Maecenas sit amet lorem nec tellus luctus
            vehicula ac et massa. Sed vitae sem quis massa ultrices porttitor quis quis est. Aliquam quis lacinia augue,
            nec dapibus sem. Sed ac tortor cursus, consectetur felis ut, convallis ligula. Sed ligula dui, porttitor at
            pellentesque eget, ullamcorper id odio. Sed diam purus, tempor at lacus a, lobortis rhoncus ipsum.
            Pellentesque ultrices ex ut purus volutpat porttitor.

            Nulla eget libero nisi. Nullam sollicitudin ullamcorper sapien, sed tristique urna sodales nec. Mauris
            volutpat velit et gravida iaculis. Vestibulum placerat est tellus, eget dapibus augue pellentesque in.
            Maecenas ac diam enim. Aenean feugiat leo est, non blandit felis sollicitudin a. Maecenas sit amet turpis
            molestie, vestibulum lectus nec, lacinia libero.</p>
    </v-container>
</template>

<script>
    export default {
        name: "BlogPost",
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
                {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
                {name: 'twitter:title', content: 'Erik Sanne'},
                {name: 'twitter:description', content: 'Erik Sanne Homepage and Digital CV'},
                // Your twitter handle, if you have one.
                {name: 'twitter:creator', content: '@ErikKonradSanne'},
                {name: 'twitter:image:src', content: 'https://eriksanne.com/img/logo.png'},

                // Google / Schema.org markup:
                {itemprop: 'name', content: 'Erik Sanne'},
                {itemprop: 'description', content: 'Erik Sanne Homepage and Digital CV'},
                {itemprop: 'image', content: 'https://www.eriksanne.com/img/logo.png'}
            ]
        },
        data() {
            return {
                hasContent: false,
                post: null,
            };
        },
        methods: {
            getContent() {
                this.$prismic.client.getSingle('home')
                    .then((document) => {
                        if (document) {
                            // this.sections.banner.profile_picture = document.data.profile_picture;
                            this.checkForContent();

                        } else {
                            this.$router.push({name: 'not-found'})
                        }
                    })
            },
            checkForContent: function () {
                // if (this.sections.banner.profile_picture != undefined ||
                //     this.sections.banner.banner_image != undefined) {
                    this.hasContent = true;
                // }
            },
        },
        created() {
            this.getContent();
        }
    }
</script>

<style scoped>
    .container {
        max-width: 860px;
    }
</style>
