<template>
  <div>
    <div class="selectedCards">
      <select-card></select-card>
      <select-card></select-card>
      <select-card></select-card>
    </div>
    <div class="plan">
      <span class="plan_variant">Monthly</span>
      <div class="plan_switcher">
        <v-switch
          inset
          v-model="isYearly"
          thumb-color="white"
          style="color: #03285f"
        ></v-switch>
      </div>
      <span class="plan_variant">Yearly</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "select-cards",
  data() {
    return {
      isYearly: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.selectedCards {
  display: flex;
  gap: 15px;
  margin-bottom: 35px;
}

.plan {
  width: 100%;
  background-color: rgba(248, 249, 254, 1);
  border-radius: 10px;
  height: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  &_switcher {
    height: 60px;
    display: flex;
  }
  &_variant {
    font-size: 16px;
    font-weight: 700;
    color: rgba(154, 154, 166, 1);
  }
}
</style>
