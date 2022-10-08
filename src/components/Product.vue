<template>
    <Nav :activeLink="''" :cartlinkActive="true"/>

    <main class="main">
        <div class="container">
            <div class="row">

                <!-- <div>
                    <button @click="amount >= 2 ? amount-- : false">-</button>
                    <p>{{ amount }}</p>
                    <button @click="amount++">+</button>

                    <p>{{ total }}</p>
                </div> -->


                <!-- <p>Cooming Soon...</p> -->

                <div class="product__cart-info">
                    <p class="product__cart-info-type">items</p>
                    <p class="product__cart-info-type">quantity</p>
                    <p class="product__cart-info-type">subtotal</p>
                </div>
                
                <div class="product__cards">

                </div>
                
            </div>
        </div>
    </main>

</template>

<script>
import NavVue from './Nav.vue'

export default {
    name: 'Product',
    components: {
        Nav: NavVue,
    },
    data() {
        return {
        }
    },
    // watch: {
    //     amount(val) {
    //         this.total = val * this.price
    //         console.log(Math.round(this.total))
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    padding: 55px 0;

    .row {
        column-gap: 10px;
        align-items: center;
    }

    .product__cart-info {
        width: 100%;
        display: flex;
        background: #FF843F;
        padding: 8px 55px 8px 100px;
        column-gap: 100px;

        .product__cart-info-type {
            font-size: 18px;
            color: var(--thirdColor);
            font-weight: 500;
            text-transform: capitalize;
        }

        p {
            &:nth-of-type(2) {
                margin-left: auto;
            }
        }
    }
}    
</style>
