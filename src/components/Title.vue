<template>
    <h2 class="section__title">{{ titleText }}</h2>
</template>

<script>
export default {
    name: "Title",
    props: {
        titleText: {
            type: String,
            required: true,
            default: "section"
        }
    }
}
</script>

<style lang="scss" scoped>
    .section__title {
        font-size: 36px;
        color: var(--primaryColor);
        text-transform: uppercase;
    }
</style>