<template>
    <div class="location__card">
        <p class="location__card-name">{{ locationName }}</p>
        <p class="location__card-address">address: {{ locationAddress }}</p>
        <a :href="`tel:${locationContact}`" class="location__card-contact">contact: {{ locationContact }}</a>
        <a :href="`${locationLink}`" target="_blank" class="location__card-link">location: <span>google map</span></a>
    </div>
</template>

<script>
export default {
    name: 'Location Card',
    props: {
        locationName: {
            type: String,
            required: true,
            default: 'branch'
        },
        locationAddress: {
            type: String,
            required: true,
            default: 'location'
        },
        locationContact: {
            type: String,
            required: true,
            default: '9999-999-999'
        },
        locationLink: {
            type: String,
            required: true,
            default: 'Link'
        },
    }
}
</script>

<style lang="scss" scoped>

.location__card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 2px;

    &-name {
        font-size: 24px;
        color: var(--primaryColor);
        font-weight: 500;
        text-transform: capitalize;
    }

    &-address {
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--primaryColor);
    }

    &-contact {
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--primaryColor);
        transition: .3s;

        &:hover {
            color: var(--linkHoverColor);
        }
    }

    &-link {
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--primaryColor);
        transition: .3s;

        &:hover {
            color: var(--linkHoverColor);
        }

        span {
            color: var(--linkHoverColor);
        }
    }
}

</style>