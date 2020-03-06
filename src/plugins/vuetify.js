import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: '#f44336',
                secondary: '#36e7f4',
                accent: '#f43688',
                appbar: '#272727'
            },
            light: {
                primary: '#f44336',
                secondary: '#36e7f4',
                accent: '#f43688',
                appbar: '#ffffff'
            },
        },
    }
});
