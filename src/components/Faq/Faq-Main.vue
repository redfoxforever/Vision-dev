<template>
    <main class="main">
        <div class="container">
            <div class="row">
                
                <div class="faq__cards">
                    
                    <div class="faq__card" v-for="(card, idx) in questions" :key="idx">
                        <h3 class="faq__card-title">{{ card.title }}</h3>
                        
                        <div class="faq__card-answers" v-for="(info, idx) in card.informations" :key="idx">
                            <p class="faq__card-question">{{ info.question }}</p>
                            <p class="faq__card-answer">{{ info.answer  }}</p>    
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Faq-Main",
    data() {
        return {
            questions: [
                {
                    title: 'delivery',
                    informations: [
                        {
                            question: 'Is the delivery free for all over Nepal?',
                            answer: 'Yes delivery is free all over Nepal.'
                        },
                        {
                            question: 'When will I receive the product?',
                            answer: 'The products are only delivered on business days from Sunday to Friday.'
                        },
                        {
                            question: 'When will I receive the product?',
                            answer: 'Products will be delivered within 2 day s from the date of order inside Kathmandu Valley . For outside Kathmandu Valley the time may vary depending upon you location.'
                        }
                    ]
                },
                {
                    title: 'exchange and return',
                    informations: [
                        {
                            question: 'What is vision.com exchange and return Policy ?',
                            answer: "Vision.com's exchange and return Policy offers 5 days of exchange and return from the date of your purchase. (e.g.: if you purchased your product of Jan 1st you can exchange and return it until Jan 5th). All the products to be returned must be in its original form without any defects whatsoever. (e.g.: the sunglasses must not contain any damages and must be returned intact with the box if provided with.)"
                        },
                        {
                            question: 'How does Vision.com exchange and return Policy work ?',
                            answer: "Vision.com's 5 day exchange and return policy gives you the option to exchange or return the product you have purchased. However, the state and condition of the item must be same at the time of purchase. You can try on the item, although do so with special care. Once the item is returned to us it will go through our quality check and after if passes the test we will refund the amount to you."
                        },
                        {
                            question: 'Will there be extra charge for product I exchange?',
                            answer: "No, there is no extra charge."
                        }
                    ]
                },
                {
                    title: 'cancellation',
                    informations: [
                        {
                            question: 'How can I cancel my order?',
                            answer: 'SMS or call us at 9851200990 .'
                        }
                    ]
                },
                {
                    title: 'payment',
                    informations: [
                        {
                            question: 'How do I pay for products if I am located outside Kathmandu Valley ?',
                            answer: 'You will need to deposit the the amount of the product to our bank account , IME or esewa. After verifying the amount your product will be dispatched to your location. Delivery time may range from 2 days or more.'
                        },
                        {
                            question: 'Can I use cheque to pay for the items I purchased?',
                            answer: 'No, we only accept hand cash.'
                        },
                        {
                            question: 'What payment methods do we accept?',
                            answer: 'Currently we accept only cash on delivery and esewa , bank payments and IME.'
                        }
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    padding: 60px 0;
    
    .faq__cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 30px;
        
        .faq__card {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 25px;
            
            &-title {
                font-size: 40px;
                font-weight: 600;
                color: var(--primaryColor);
                text-decoration: underline;
                text-transform: uppercase;
            }
            
            &-answers {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 10px;
            }
            
            &-question {
                font-size: 20px;
                font-weight: 600;
                color: var(--primaryColor);
            }
            
            &-answer {
                font-size: 18px;
                color: var(--primaryColor);
            }
        }
    }
}
</style>