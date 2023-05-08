<template>
    <form class="MyForm">
        <h1 class="MyForm_title">Personal info</h1>
        <p class="MyForm_desc">please provide your name, email adress, and phone number.</p>
        <my-input v-for="input in fields" :InputName="input.name" :key="input.name" :placeholder="input.placeholder"
            :isError="input.isError" v-model="input.value" :validate="input.validate" />

    </form>
</template>

<script>
export default {
    name: "my-form",
    props: {
        fields: {
            type: Array,
            required: true,
        },

    },

}
</script>

<style lang="scss" scoped>
.MyForm {
    width: 450px;
    min-height: 365px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;

    &_title {
        color: #082C5C;
        margin-bottom: 10px;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    &_desc {
        opacity: 0.5;
        margin-bottom: 20px;
        font-weight: 500;

        &::first-letter {
            text-transform: uppercase;
        }
    }


}
</style>