<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    navigation
    :pagination="{ clickable: true }"
    class="header__slider"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :speed="1000"
    :loop="true"
  >
    <swiper-slide v-for="img in images" :key="img.id" class="swiper__slide">
      <img :src="img.imgUrl" alt="" class="swiper__slide-img">
    </swiper-slide>
    
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Navigation, Pagination } from 'swiper';

  import 'swiper/scss';
  import 'swiper/scss/navigation';
  import 'swiper/scss/pagination';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Navigation, Pagination],
      };
    },
    data() {
      return {
        images: [
          {
            id: 1,
            imgUrl: require('@/assets/images/slider/cat.png'),
            imgAlt: "cat photo"
          },
          {
            id: 2,
            imgUrl: require('@/assets/images/slider/women.png'),
            imgAlt: "women photo"
          },
          {
            id: 3,
            imgUrl: require('@/assets/images/slider/aviator.png'),
            imgAlt: "aviator sunglasses"
          },
          {
            id: 4,
            imgUrl: require('@/assets/images/slider/sport.png'),
            imgAlt: "sport girl"
          }
        ]
      }
    }
  };
</script>

<style lang="scss" scoped>
  .header__slider {
    width: 100%;
    max-height: 730px;
    height: 100%;

    .swiper__slide {
      width: 100%;
      height: 100%;

      .swiper__slide-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
//   .swiper-button-prev, .swiper-button-next {
//   --swiper-theme-color: #ffffff;
// }
</style>