<template>
    <SectionLayout id="about" title="About Me">
        <prismic-rich-text :field="data"/>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/home/SectionLayout";

    export default {
        name: "About",
        components: {SectionLayout},
        props: {
            data: Array
        }
    }
</script>

<style scoped>

</style>
