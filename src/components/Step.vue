<template>
    <div class="step">
        <div class="step_click" :class="isActive ? 'active' : ''">
            <div class="step_click-number">{{ number }}</div>
        </div>
        <div class="step_body">
            <span class="step_body-info">Step {{ number }}</span>
            <h2 class="step_body-title">{{ title }}</h2>
        </div>

    </div>
</template>

<script>
export default {
    name: "my-step",
    props: {
        title: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.active {
    background-color: #fff;
    color: #000;

    .step_click-number {
        color: #000;
    }
}

.step {
    display: flex;
    width: max-content;
    height: max-content;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;

    cursor: pointer;

    &:last-child {

        margin-bottom: 0px;
    }

    &_click {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33px;
        height: 33px;
        border: 1px solid #fff;
        border-radius: 20px;

        &-number {
            font-weight: 700;
            font-size: 18px;
            color: #fff;
        }
    }

    &_body {
        &-info {
            color: #fff;
            text-transform: uppercase;
            opacity: 0.7;
            font-size: 16px;
        }

        &-title {
            font-size: 16px;
            color: #fff;
        }
    }
}
</style>