<template>
    <Nav :userlinkActive="true" :activeLink="''"/>

    <main class="main">
        <div class="container">
            <div class="row">

                <UserProfile/>

                <div class="user__informations">
                    <Purchased/>

                    <Wishlist/>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
import NavVue from './Nav.vue'
import UserProfileVue from './Profile/UserProfile.vue'
import PurchaseHistoryVue from './Profile/PurchaseHistory.vue'
import WishlistVue from './Profile/Wishlist.vue'

export default {
    name: 'User',
    components: {
        Nav: NavVue,
        UserProfile: UserProfileVue,
        Purchased: PurchaseHistoryVue,
        Wishlist: WishlistVue
    }
}

</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    padding: 45px 0;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 45px;
    }

    .user__informations {
        width: 100%;
        display: flex;
    }
}
</style>