<template>
    <div class="purchase-history__content">
        <h3 class="purchase__title">{{ title }}</h3>

        <div class="purchase__cards">
            <Card v-for="(item, idx) in purchasedItems" :key="idx" :itemImgUrl="item.img" :itemName="item.name" :itemDate="item.date" :itemPrice="item.price"/>
        </div>
    </div>
</template>

<script>
import PurchaseCardVue from './PurchaseCard.vue'

export default {
    name: 'Purchase History',
    components: {
        Card: PurchaseCardVue
    },
    data() {
        return {
            title: 'purchase history',
            purchasedItems: [
                {
                    name: 'premium square sunglasses',
                    price: '32.95',
                    date: '14th february 2022',
                    img: require('@/assets/images/sunglasses/square.png')
                },
                {
                    name: 'aviator sunglasses',
                    price: '32.95',
                    date: '4th january 2022',
                    img: require('@/assets/images/sunglasses/aviator.png')
                },
                {
                    name: 'sports protective goggles',
                    price: '45.95',
                    date: '21st december 2021',
                    img: require('@/assets/images/eyeware/protective-goggles.png')
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.purchase-history__content {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: solid 1px var(--primaryColor);
    row-gap: 10px;

    .purchase__title {
        font-size: 24px;
        font-weight: 600;
        color: var(--primaryColor);
        text-transform: uppercase;
    }

    .purchase__cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 30px 0;
        border-top: 1px solid var(--primaryColor);
        row-gap: 12px;
    }
}

</style>