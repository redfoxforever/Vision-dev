<template>
    <header class="header">
        <SwiperSliderVue/>
    </header>
</template>

<script>
import SwiperSliderVue from './SwiperSlider.vue'

export default {
    name: "Header",
    components: {
        SwiperSliderVue        
    }
}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;

        .row {
            justify-content: center;
            align-items: center;
        }
    }
</style>