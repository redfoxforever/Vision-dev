<template>
    <div class="card">
        <div class="card__img-box">
            <img :src="cardImg" alt="No Photo" class="card-img">
        </div>
        <router-link to="category" class="card-name">{{ cardName }}</router-link>
        <p class="card-price">${{ cardPrice }}</p>

        <div class="card-btns">
            <button class="like-btn"><i class="far fa-heart"></i></button>
            <button class="addToCart-btn"><i class="fas fa-shopping-cart"></i>add to cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        cardName: {
            type: String,
            required: true,
            default: "no name"
        },
        cardPrice: {
            type: Number,
            required: true,
            default: 0
        },
        cardImg: {
            type: String,
            required: true,
            default: "No Photo"
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: var(--thirdColor);
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
        padding: 30px 10px 20px;
        row-gap: 15px;
        border-radius: 16px;
        transition: .4s;

        &__img-box {
            width: 100%;
            min-height: 115px;
            max-height: 115px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-img {
            max-width: 300px;
            width: 100%;
            max-height: 100%;
            object-fit: cover;
        }

        &-name {
            font-size: 16px;
            color: var(--primaryColor);
            text-transform: capitalize;
            font-weight: 600;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            margin-top: 35px;
            transition: .4s;
            
            &:hover {
                color: var(--linkHoverColor);
            }
        }

        &-price {
            font-size: 16px;
            color: var(--primaryColor);
            font-weight: 600;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }
        
        &-btns {
            display: flex;
            align-items: center;

            button {
                padding: 0 10px;
                border: none;
                font-size: 22px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: 10px;
            }

            .like-btn {
                background: #E7E3E3;
            }

            .addToCart-btn {
                font-size: 14px;
                column-gap: 5px;
                background: var(--primaryColor);
                color: var(--thirdColor);
                text-transform: uppercase;
            }
        }

        &:hover {
            box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
        }
    }
</style>