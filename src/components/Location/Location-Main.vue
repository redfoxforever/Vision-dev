<template>
    <main class="main">
        <div class="container">
            <div class="row">

                <Title titleText="our branches"/>

                <div class="location__cards">
                    <Card v-for="(item, idx) in locations" :key="idx" :locationName="item.name" :locationAddress="item.address" :locationContact="item.contact" :locationLink="item.link"/>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
import TitleVue from '../Title.vue'
import LocationCardVue from './Location-Card.vue'

export default {
    name: "Location-Main",
    components: {
        Title: TitleVue,
        Card: LocationCardVue
    },
    data() {
        return {
            locations: [
                {
                    name: "Kathmandu Branch",
                    address: 'Boudha, Tushal',
                    contact: '9851-328-564',
                    link: 'https://goo.gl/maps/9JRCY6W8rfLxyry47'
                },
                {
                    name: "Kathmandu Branch",
                    address: 'Ganabahal, Kichapokhari, New Road, Arniko Complex',
                    contact: '9851-213-596',
                    link: 'https://goo.gl/maps/9JRCY6W8rfLxyry47'
                },
                {
                    name: "Pokhara Branch",
                    address: 'Chipledhunga, Trade Mall, Ground Floor',
                    contact: '9856-079-555',
                    link: 'https://goo.gl/maps/N9YtjTPivuVXr9qE8'
                },
                {
                    name: "Butwal Branch",
                    address: 'Tinkune Chow, Srijana Mart',
                    contact: '9851-328-564',
                    link: 'https://goo.gl/maps/7dNnTzNZ1ziu3KXYA'
                },
                {
                    name: "Chitwan Branch",
                    address: 'Chitwan, Pragatipath',
                    contact: '9851-328-564',
                    link: 'https://goo.gl/maps/VR5vcVKs7vhhMMfX7'
                },
                {
                    name: "Itahari Branch",
                    address: 'Itahari, Sky plaza',
                    contact: '9851-328-564',
                    link: 'https://goo.gl/maps/ceaJRSv2EmbYd64x5'
                },
                {
                    name: "Dharan Branch",
                    address: 'Putali Line, Maskey complex, Next to Vinayak Digital',
                    contact: '9819-358-689',
                    link: 'https://goo.gl/maps/kPnve4w2X5DyNrAZ7'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.main {
    padding: 60px 0;

    .row {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 40px;
    }

    .location__cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }
}

</style>