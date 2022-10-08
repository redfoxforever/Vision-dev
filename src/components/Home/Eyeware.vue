<template>
    <section class="cards__section">
        <div class="container">
            <div class="row">

                <Title titleText="protective eyeware"/>

                <div class="cards__list">
                    <Card v-for="(card, idx) in frames" :key="idx" :cardImg="card.url" :cardName="card.name" :cardPrice="card.price"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import CardVue from './Card.vue'
import TitleVue from '../Title.vue'

export default {
    name: "Eyeware",
    components: {
        Card: CardVue,
        Title: TitleVue
    },
    data() {
        return {
            frames: [
                {
                    name: 'Safety Glasses',
                    price: 39.95,
                    url: require('@/assets/images/eyeware/safety.png')
                },
                {
                    name: 'Protective Glasses',
                    price: 27.95,
                    url: require('@/assets/images/eyeware/protective.png')
                },
                {
                    name: 'Sports Protective Goggles',
                    price: 45.95,
                    url: require('@/assets/images/eyeware/sport-protective.png')
                },
                {
                    name: 'Protective Goggles',
                    price: 9.95,
                    url: require('@/assets/images/eyeware/protective-goggles.png')
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