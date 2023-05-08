<template>
    <button class="customButton">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style lang="scss" scoped>
.customButton {
    width: 125px;
    height: 50px;

    background-color: rgba(3, 41, 90, 1);
    border-radius: 10px;

    cursor: pointer;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    text-transform: capitalize;
    border: none;

    transition: all .2s linear;

    &:hover {
        background-color: rgba(23, 74, 139, 1)
    }

    &:first-child {
        color: rgb(157, 156, 156);
        font-weight: 700;

        &:hover {
            color: rgba(3, 41, 90, 1)
        }
    }
}
</style>