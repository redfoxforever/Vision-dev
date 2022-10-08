<template>
    <Nav activeLink="location"/>
    <Main/>
    <Footer/>
</template>

<script>
import NavVue from './Nav.vue'
import FooterVue from './Footer.vue'
import LocationMainVue from './Location/Location-Main.vue'

export default {
    name: 'Location',
    components: {
        Nav: NavVue,
        Main: LocationMainVue,
        Footer: FooterVue
    },
}
</script>

<style lang="scss" scoped>

</style>