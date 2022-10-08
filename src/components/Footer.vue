<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                
                <div class="footer__cards">

                    <div class="footer__card" v-for="(card, idx) in footerInfo" :key="idx">
                        <p class="footer__card-title">{{ card.title }}</p>
                        <router-link to="/faq" class="footer__card-link" v-for="(link, idx) in card.links" :key="idx">{{ link }}</router-link>
                    </div>

                </div>

            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            footerInfo: [
                {
                    title: "about us",
                    links: [
                        "Nepal's Coolest Eyewear Store",
                        "order anytime and receive free and fast delivery."
                    ]
                },
                {
                    title: 'contact',
                    links: [
                        '9823-749-232',
                        'visioncustomercare@outlook.com',
                        'Maitidevi, Kathmandu'
                    ] 
                },
                {
                    title: 'policy',
                    links: [
                        'delivery',
                        'exchange and return',
                        'payment',
                        'cancellation'
                    ],
                    routeLink: '/faq'
                },
                {
                    title: 'socials',
                    links: [
                        'instagram',
                        'twitter',
                        'facebook',
                        'youtube'
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        padding: 40px 0;
        background: var(--primaryColor);

        a {
            color: var(--thirdColor);
        }

        &__cards {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(255px, 1fr) );
            gap: 45px;
        }

        &__card {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 3px;

            &-title {
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 18px;
                font-weight: 600;
                color: var(--thirdColor);
            }

            &-link {
                font-size: 15px;
                color: var(--thirdColor);
                transition: .3s;
                text-transform: capitalize;

                &:hover {
                    color: var(--linkHoverColor);
                }
            }
        }
    }
</style>