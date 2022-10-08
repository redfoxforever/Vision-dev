<template>
    <section class="cards__section">
        <div class="container">
            <div class="row">

                <Title titleText="prescription frames"/>

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
    name: "Frames",
    components: {
        Card: CardVue,
        Title: TitleVue
    },
    data() {
        return {
            frames: [
                {
                    name: 'Square Glasses',
                    price: 23.95,
                    url: require('@/assets/images/frames/square.png')
                },
                {
                    name: 'Aviator Glasses',
                    price: 32.95,
                    url: require('@/assets/images/frames/aviator.png')
                },
                {
                    name: 'Cat Eye Glasses',
                    price: 23.95,
                    url: require('@/assets/images/frames/cat-eye.png')
                },
                {
                    name: 'Rimless Glasses',
                    price: 35.95,
                    url: require('@/assets/images/frames/rimless.png')
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