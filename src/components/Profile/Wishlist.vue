<template>
    <div class="wishlist-history__content">
        <h3 class="wishlist__title">{{ title }}</h3>

        <div class="wishlist__cards">
            <Card v-for="(item, idx) in wishlistItems" :key="idx" :itemImgUrl="item.img" :itemName="item.name" :itemPrice="item.price"/>
        </div>
    </div>
</template>

<script>
import WishlistCardVue from './WishlistCard.vue'

export default {
    name: 'wishlist History',
    components: {
        Card: WishlistCardVue
    },
    data() {
        return {
            title: 'wishlist',
            wishlistItems: [
                {
                    name: 'premium square sunglasses',
                    price: '32.95',
                    img: require('@/assets/images/sunglasses/square.png')
                },
                {
                    name: 'aviator glasses',
                    price: '32.95',
                    img: require('@/assets/images/frames/aviator.png')
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.wishlist-history__content {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-left: solid 1px var(--primaryColor);
    row-gap: 10px;

    .wishlist__title {
        font-size: 24px;
        font-weight: 600;
        color: var(--primaryColor);
        text-transform: uppercase;
        padding-left: 20px;
    }

    .wishlist__cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 30px 0;
        border-top: 1px solid var(--primaryColor);
        row-gap: 20px;
        padding-left: 20px;
    }
}

</style>