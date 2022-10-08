<template>
  <div class="wishlist__card">
    <img :src="itemImgUrl" alt="no image" class="wishlist__item-img">

    <div class="wishlist__item-desc">
        <p class="wishlist__item-name">{{ itemName }}</p>
        <p class="wishlist__item-price">${{ itemPrice }}</p>
    </div>

    <button class="buy-btn" @click="toShopCart"><i class="fas fa-shopping-cart"></i></button>
  </div>
</template>

<script>

export default {
    name: 'Wishlist Card',
    props: {
        itemName: {
            type: String,
            default: 'item name'
        },
        itemPrice: {
            type: String,
            default: '0.00'
        },
        itemDate: {
            type: String,
            default: 'no date'
        },
        itemImgUrl: {
            type: String,
            default: ''
        }
    },
    methods: {
        toShopCart() {
            location.href = "#/product"
        }
    }
}

</script>

<style lang="scss" scoped>
.wishlist__card {
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
    padding: 10px;

    .wishlist__item-img {
        max-width: 150px;
        width: 100%;
        object-fit: cover;
    }

    .wishlist__item-desc {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 3px;

        .wishlist__item-name {
            font-size: 18px;
            color: var(--primaryColor);
            text-transform: capitalize;
            font-weight: 500;
        }

        .wishlist__item-price {
            font-size: 14px;
            color: var(--primaryColor);
            font-weight: 600;
        }
    }

    .buy-btn {
        font-size: 25px;
        background: transparent;
        border: none;
        padding: 10px;
        color: var(--primaryColor);
        cursor: pointer;
    }
}
</style>