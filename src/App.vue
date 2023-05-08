<script >


export default {
  data() {
    return {
      inputFields: [
        {
          placeholder: "e.g. Stephen King",
          name: "Name",
          value: "",
          validate: this.checkNameValidation,
          isError: false,
        },
        {
          placeholder: "e.g.stpehenking@lorem.com",
          name: "Email Address",
          value: "",
          validate: this.checkEmailValidation,
          isError: false,
        },
        {
          placeholder: "e.g. +1 234 567 890",
          name: "Phone Number",
          value: "",
          validate: this.checkNubmerValidation,
          isError: false,
        }
      ],
      page: 1,
      stepInfo: [
        {
          stepNumber: 1,
          stepTitle: "YOUR INFO",
          isActive: true,
        },
        {
          stepNumber: 2,
          stepTitle: "SELECT PLAN",
          isActive: false,
        },
        {
          stepNumber: 3,
          stepTitle: "ADD-ONS",
          isActive: false,
        },
        {
          stepNumber: 4,
          stepTitle: "SUMMARY",
          isActive: false,
        },
      ]
    }
  },
  methods: {
    checkEmailValidation(email) {

      if (email.replace(/\s+/g, "").includes("@") && email.replace(/\s+/g, "").includes(".")) {
        this.inputFields[1].isError = false;
      } else {
        this.inputFields[1].isError = true;
      }
    },
    checkNameValidation(name) {

      if (name.replace(/\s+/g, "").length >= 4) {
        this.inputFields[0].isError = false;
      } else {
        this.inputFields[0].isError = true;
      }
    },
    checkNubmerValidation(number) {

      if (number.replace(/\s+/g, "").length >= 11 && number.includes("+")) {
        this.inputFields[2].isError = false;
      } else {
        this.inputFields[2].isError = true;
      }
    },
    changePageUp() {
      if (this.page < 4) {
        this.page = this.page + 1;
      }
      else {
        this.page;
      }
    },
    changePageDown() {
      if (this.page > 1) {
        this.page = this.page - 1;
      }
      else {
        this.page;
      }
    },
    changePage(page) {
      this.page = page;
    },
  },
  watch: {
    page() {
      this.stepInfo.forEach((stepInfo) => {
        if (stepInfo.stepNumber === this.page) {
          stepInfo.isActive = true;
        } else {
          stepInfo.isActive = false;
        }
      })
    }
  },


}
</script>

<template>
  <div>
    <my-card :pages="page" :stepInfo="stepInfo" :changePage="changePage" :changePageUp="changePageUp"
      :changePageDown="changePageDown">
      <my-form v-if="page === 1" :fields="inputFields" />
    </my-card>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Ubuntu',
    sans-serif;
  background-color: #EEF5FF;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
