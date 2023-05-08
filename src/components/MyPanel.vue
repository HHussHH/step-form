<template>
    <div class="panel">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "my-panel"
}
</script>

<style lang="scss" scoped>
.panel {
    min-width: 275px;
    min-height: 570px;
    padding: 40px 0px 0px 30px;
    background: url('../img/panel_bg.svg') no-repeat;
    margin: 17px;

}
</style>