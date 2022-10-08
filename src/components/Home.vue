<template>
  <Nav activeLink="home"/>
  <Header/>
  <Main/>
  <Footer/>
</template>

<script>

import NavVue from './Nav.vue'
import HeaderVue from './Home/Home-Header.vue'
import MainVue from './Home/Home-Main.vue'
import FooterVue from './Footer.vue'

export default {
  name: 'App',
  components: {
    Nav: NavVue,
    Header: HeaderVue,
    Main: MainVue,
    Footer: FooterVue
  }
}
</script>

<style lang="scss">
</style>