<template>
  <form class="MyForm">
    <h1 class="MyForm_title">{{ title }}</h1>
    <p class="MyForm_desc">
      {{ desc }}
    </p>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "my-form",
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.MyForm {
  width: 450px;
  min-height: 365px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  &_title {
    color: #082c5c;
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
