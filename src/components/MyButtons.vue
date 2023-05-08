<template>
    <div class="MyButtons">
        <my-button @click="changePageDown" v-if="pages > 1" style="background-color:inherit;">Go Back</my-button>
        <div v-else></div>
        <my-button @click="changePageUp">Next step</my-button>
    </div>
</template>

<script>
export default {
    name: 'my-buttons',
    props: {
        pages: {
            type: Number,
            required: true
        },
        changePageUp: {
            type: Function,
            required: true,
        },
        changePageDown: {
            type: Function,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.MyButtons {
    display: flex;
    justify-content: space-between;
}
</style>