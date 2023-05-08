<template>
    <div class="card">
        <my-panel>
            <my-step v-for="step
             in stepInfo" :key="stepNumber" :number="step.stepNumber" :title="step.stepTitle" :isActive="step.isActive"
                @click="changePage(step.stepNumber)"></my-step>
        </my-panel>
        <div class="card_container">
            <slot></slot>
            <my-buttons :pages="pages" :changePageUp="changePageUp" :changePageDown="changePageDown"></my-buttons>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-card',
    props: {
        pages: {
            type: Number,
            required: true,
        },
        stepInfo: {
            type: Array,
            required: true,
        },
        changePage: {
            type: Function,
            required: true,
        },
        changePageUp: {
            type: Function,
            required: true,
        },
        changePageDown: {
            type: Function,
            required: true,
        }
    },

}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    width: 880px;
    height: 600px;
    background-color: #fff;
    border-radius: 20px;
    margin: 100px auto;

    &_container {
        width: max-content;
        padding: 57px 40px 0px 100px;

    }
}
</style>