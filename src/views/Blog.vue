<template>
    <div class="blog">
        <v-container>
            <BlogFilter></BlogFilter>
            <BlogExpansionPanel></BlogExpansionPanel>
        </v-container>
    </div>
</template>

<script>
    import BlogExpansionPanel from "@/components/blog/BlogExpansionPanel";
    import BlogFilter from "@/components/blog/BlogFilter";
    export default {
        name: "Blog",
        components: {BlogFilter, BlogExpansionPanel}
    }
</script>

<style scoped>

</style>
