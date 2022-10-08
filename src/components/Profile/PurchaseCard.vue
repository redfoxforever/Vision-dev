<template>
  <div class="purchase__card">
    <img :src="itemImgUrl" alt="no image" class="purchase__item-img">

    <div class="purchase__item-desc">
        <p class="purchase__item-name">{{ itemName }}</p>
        <p class="purchase__item-price">${{ itemPrice }}</p>
        <p class="purchase__item-date"> {{ itemDate }}</p>
    </div>

  </div>
</template>

<script>

export default {
    name: 'Purchase Card',
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
    }
}

</script>

<style lang="scss" scoped>
.purchase__card {
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
    padding: 10px;

    .purchase__item-img {
        max-width: 150px;
        width: 100%;
        object-fit: cover;
    }

    .purchase__item-desc {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 3px;

        .purchase__item-name {
            font-size: 18px;
            color: var(--primaryColor);
            text-transform: capitalize;
            font-weight: 500;
            margin-bottom: 4px;
        }

        .purchase__item-price {
            font-size: 14px;
            color: var(--primaryColor);
            font-weight: 600;
        }

        .purchase__item-date {
            font-size: 14px;
            color: var(--primaryColor);
            font-weight: 400;
            text-transform: capitalize;
        }
    }
}
</style>