<template>
  <Nav activeLink="category"/>
  <Main/>
  <Footer/>
</template>

<script>
import NavVue from './Nav.vue'
import FooterVue from './Footer.vue'
import CategoryMainVue from './Category/Category-Main.vue'

export default {
  name: 'Category',
  components: {
    Nav: NavVue,
    Main: CategoryMainVue,
    Footer: FooterVue
  }
}
</script>

<style lang="scss" scoped>

</style>