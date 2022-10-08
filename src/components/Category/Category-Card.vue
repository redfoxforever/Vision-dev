<template>
  <div class="category__card">
    
    <div class="category__card-img-box">
      <img :src="imgUrl" alt="No Photo" class="category__card-img">    
    </div>
    
    <p class="category__card-name">{{ cardName }}</p>
  </div>
</template>

<script>
export default {
  name: "Category Card",
  props: {
    imgUrl: {
      type: String,
      required: true,
      default: 'No Photo'
    },
    cardName: {
      type: String,
      required: true,
      default: 'name'
    }
  }
}
</script>

<style lang="scss" scoped>
.category__card {
  max-width: 560px;
  width: 100%;
  min-width: 255px;
  display: flex;
  align-items: center;
  column-gap: 80px;
  background: #FFFEFE;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 12px;
  border-radius: 16px;
  
  .category__card-img-box {
    min-height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  &-img {
    max-width: 270px;
    width: 100%;
  }
  
  &-name {
    font-size: 24px;
    color: var(--primaryColor);
    text-transform: capitalize;
    font-weight: 500;
  }
}
</style>