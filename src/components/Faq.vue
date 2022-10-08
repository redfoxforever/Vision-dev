<template>
    <Nav activeLink="faq"/>
    <Main/>
    <Footer/>
</template>

<script>
import NavVue from './Nav.vue'
import FooterVue from './Footer.vue'
import FaqMainVue from './Faq/Faq-Main.vue'

export default {
    name: 'Location',
    components: {
        Nav: NavVue,
        Main: FaqMainVue,
        Footer: FooterVue
    },
}
</script>

<style lang="scss" scoped>

</style>