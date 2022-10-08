<template>
    <div class="profile__dashboard">
        <img :src="userImgUrl" alt="" class="user-portrait">

        <div class="user__info-content">

            <div class="user-info">
                <p class="user-nickname">{{ user.nickname }}</p>
                
                <span class="black-round"></span>

                <span class="black-line"></span>
            </div>

            <div class="user-info">
                <p class="info-type">email :</p>

                <p class="user-email">{{ user.email }}</p>

                <span class="black-round"></span>

                <span class="black-line"></span>
            </div>

            <div class="user-info">
                <p class="info-type">contact :</p>

                <p class="user-contact">{{ user.contact }}</p>

                <span class="black-round"></span>

                <span class="black-line"></span>
            </div>

            <div class="user-info">
                <p class="info-type">address :</p>

                <p class="user-address">{{ user.address }}</p>

                <span class="black-round"></span>

                <span class="black-line"></span>
            </div>

            <div class="user-info-controls">
                <button class="user-control-btn edit-btn">edit</button>
                <button class="user-control-btn logout-btn" @click="clearLogin">logout</button>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'User-Profile',
    data() {
        return {
            userImgUrl: require('@/assets/images/profile/user.jpg'),
            user: {
                nickname: 'redfox',
                email: 'anonym@gmail.com',
                contact: '998173066',
                address: 'the walk street, 10077'
            }
        }
    },
    methods: {
        clearLogin() {
            sessionStorage.clear()
            location.href = "#/signIn"
        }
    }
}

</script>

<style lang="scss" scoped>

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(.9);
  }
    100% {
    transform: scale(1);
  }
}

.profile__dashboard {
    max-width: 800px;
    width: 100%;
    display: flex;
    column-gap: 45px;
    align-items: center;
    justify-content: center;

    .user-portrait {
        max-width: 300px;
        max-height: 300px;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        user-select: none;
        z-index: 3;
        object-fit: cover;
    }

    .user__info-content {
        max-width: 450px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 8px;

        .user-info {
            width: max-content;
            display: flex;
            column-gap: 20px;
            align-items: center;
            border-bottom: 1px solid var(--primaryColor);
            padding: 0px 35px 0px 20px;
            position: relative;

            .info-type {
                font-size: 18px;
                color: var(--primaryColor);
                text-transform: capitalize;
            }

            .black-round {
                width: 15px;
                height: 15px;
                background: transparent;
                border: solid 1px var(--primaryColor);
                border-radius: 50%;
                position: absolute;
                right: -15px;
                bottom: -8px;
            }

            .user-email,
            .user-contact,
            .user-address {
                font-size: 18px;
                color: var(--primaryColor);
            }

            .user-address {
                text-transform: capitalize;
            }

            .user-nickname {
                font-size: 36px;
                color: var(--primaryColor);
                text-transform: uppercase;
                text-align: center;
                font-weight: 500;
            }

            .black-line {
                width: 80px;
                height: 1px;
                position: absolute;
                bottom: -21px;
                left: -73px;
                background: var(--primaryColor);
                transform: rotate(330deg);
            }

        }
        
        .user-info-controls {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;

            .user-control-btn {
                max-width: 155px;
                width: 100%;
                padding: 10px 10px;
                color: var(--primaryColor);
                font-size: 18px;
                font-weight: 500;
                text-transform: capitalize;
                background: transparent;
                border-radius: 50px;
                cursor: pointer;
                transition: .3s;

                &:hover {
                    animation: pulse 1s infinite;
                    background: var(--primaryColor);
                    color: var(--thirdColor);
                    
                }

                &.logout-btn {
                    color: red;
                    border-color: red;

                    &:hover {
                        background: red;
                        color: var(--thirdColor);
                    }
                }
            }
        }
    }
}

</style>