<template>
    <section class="cards__section">
        <div class="container">
            <div class="row">

                <Title titleText="Sunglasses"/>

                <div class="cards__list">
                    <Card v-for="(card, idx) in sunglasses" :key="idx" :cardImg="card.url" :cardName="card.name" :cardPrice="card.price"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import CardVue from './Card.vue'
import TitleVue from '../Title.vue'

export default {
    name: "Sunglasses",
    components: {
        Card: CardVue,
        Title: TitleVue
    },
    data() {
        return {
            sunglasses: [
                {
                    name: 'premium square sunglasses',
                    price: 32.95,
                    url: require('@/assets/images/sunglasses/square.png')
                },
                {
                    name: 'premium cat-eye sunglasses',
                    price: 39.95,
                    url: require('@/assets/images/sunglasses/cat-eye.png')
                },
                {
                    name: 'premium tint sunglasses',
                    price: 29.95,
                    url: require('@/assets/images/sunglasses/tint.png')
                },
                {
                    name: 'premium aviator sunglasses',
                    price: 39.95,
                    url: require('@/assets/images/sunglasses/aviator.png')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .cards__section {
        width: 100%;
        padding: 25px 0;

        .row {
            flex-direction: column;
            align-items: flex-start;
            text-align: start;
            row-gap: 25px;
        }

        .cards__list {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            column-gap: 50px;
            row-gap: 30px;
        }
    }
</style>