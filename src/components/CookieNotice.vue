<template>
    <div class="Cookie__declineButton__custom">
        <cookie-law theme="dark-lime--rounded"
                    :buttonDecline="true"
                    buttonDeclineClass="Cookie__declineButton__custom"
                    v-on:accept="acceptCookies()"
                    v-on:decline="declineCookies()"
        >
        </cookie-law>
    </div>
</template>

<script>
    import CookieLaw from 'vue-cookie-law'

    export default {
        name: "CookieNotice",
        components: {CookieLaw},
        methods: {
            acceptCookies: function () {
                this.$gtm.enable(true)
            },
            declineCookies: function () {
            }
        }
    }
</script>

<style>
    .Cookie__declineButton__custom {
        background: #f44336;
        padding: .625em 3.125em;
        color: #fff;
        border-radius: 20px;
        border: 0;
        font-size: 1em;
    }
</style>
