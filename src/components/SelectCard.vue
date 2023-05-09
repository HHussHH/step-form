<template>
  <div class="selectCard">
    <div class="selectCard_icon"></div>
    <div class="selectCard_body">
      <div class="selectCard_body-title">Arcade</div>
      <div class="selectCard_body-price">$90/yr</div>
      <div class="selectCard_body-sale">2 months free</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "select-card",
};
</script>

<style lang="scss" scoped>
.selectCard {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  min-height: 183px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 20px;

  &_icon {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: blue;
  }
  &_body {
    &-title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    &-price {
      font-size: 16px;
      color: #8c8c8c;
      font-weight: 400;
      margin-bottom: 5px;
    }
    &-sale {
      font-weight: 500;
      color: rgba(19, 30, 58, 1);
      font-size: 14px;
    }
  }
}
</style>
