<template>
    <div class="customInput_body">
        <div class="customInput_info">
            <span class="customInput_info-name">{{ InputName }}</span>
            <span class="customInput_info-error" v-if="isError">{{ error }}</span>
        </div>
        <input class="customInput" :placeholder="placeholder" :class="isError ? 'customInput_error' : ''"
            v-model="inputValue" @input="changeInput" />
    </div>
</template>

<script>
export default {
    name: 'my-input',
    data() {
        return {
            inputValue: this.modelValue,
            error: "This field is required",
        }
    },
    props: {
        InputName: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
            default: 'input placeholder'
        },
        isError: {
            type: Boolean,
            required: true
        },
        modelValue: {
            type: String
        },
        validate: {
            type: Function,
            required: false
        }
    },
    watch: {
        modelValue(newValue) {
            this.inputValue = newValue;
        }
    },
    methods: {
        changeInput(event) {
            this.validate(event.target.value);
            this.inputValue = event.target.value;
            this.$emit('update:modelValue', this.inputValue);
        }
    }
}
</script>

<style lang="scss" scoped>
.customInput {
    &_body {
        margin-bottom: 20px;
        width: max-content;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        font-weight: 500;

        &-name {
            text-transform: capitalize;
        }

        &-error {
            color: red;
        }
    }

    &_error {
        outline: 1px solid red;
    }

    width: 450px;
    height: 50px;

    border: 1px solid #DADADA;
    border-radius: 10px;

    padding-left: 15px;


    font-size: 16px;
    font-weight: 700;
    color:#082C5C;

    &:focus-visible {
        outline: 1px solid rgba(83, 77, 149, 1);
    }

    &::placeholder {
        opacity: 0.7;
    }




}
</style>