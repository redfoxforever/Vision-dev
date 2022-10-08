<template>
  <main class="main">
    <div class="container">
      <div class="row">
        
        <Title titleText="different styles"/>  
        
        <div class="category__cards">
          <CategoryCard v-for="(card, idx) in categories" :key="idx" :imgUrl="card.imgUrl" :cardName="card.imgCategory"/>
        </div>
        
      </div>
    </div>
  </main>
</template>

<script>
import TitleVue from '../Title.vue'
import CategoryCardVue from './Category-Card.vue'

export default {
  name: "Category-Main",
  components: {
    Title: TitleVue,
    CategoryCard: CategoryCardVue
  },
  data() {
    return {
      categories: [
        {
          imgCategory: 'sunglasses',
          imgUrl: require('@/assets/images/sunglasses/square.png')
        },
        {
          imgCategory: 'aviator',
          imgUrl: require('@/assets/images/sunglasses/aviator.png')
        },
        {
          imgCategory: 'square',
          imgUrl: require('@/assets/images/sunglasses/tint.png')
        },
        {
          imgCategory: 'cat eye',
          imgUrl: require('@/assets/images/frames/cat-eye.png')
        },
        {
          imgCategory: 'rimless',
          imgUrl: require('@/assets/images/frames/rimless.png')
        },
        {
          imgCategory: 'sports',
          imgUrl: require('@/assets/images/eyeware/protective-goggles.png')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    padding: 45px 0 85px;
    
    .row {
      flex-direction: column;
      align-items: center;
      row-gap: 35px;
    }
    
    .category__cards {
      width: 100%;
      column-gap: 50px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      row-gap: 35px;
    }
  }
</style>