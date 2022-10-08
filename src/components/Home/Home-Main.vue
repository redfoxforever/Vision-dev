<template>
    <main class="main">
        <Sunglasses/>
        <Frames/>
        <Eyeware/>
    </main>
</template>

<script>
import EyewareVue from './Eyeware.vue'
import FramesVue from './Frames.vue'
import SunglassesVue from './Sunglasses.vue'

export default {
    name: "Home-Main",
    components: {
        Sunglasses: SunglassesVue,
        Frames: FramesVue,
        Eyeware: EyewareVue
    },
    data() {
        return {
            category: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .main {
        width: 100%;
        padding: 45px 0;
    }
</style>