<template>
  <transition name="fade-in-from-bottom">
    <div v-if="isVisible" :class="['base-popup', 'popup--' + type]">
      <div class="base-popup__header">
        <h3>{{ heading }}</h3>
        <font-awesome-icon
          class="close-icon"
          @click="$emit('close')"
          :icon="['fa', 'xmark']"
        />
      </div>
      <div :class="['base-popup__body', align]">
        <slot></slot>
      </div>
      <BaseOverlay v-if="isVisible" @close="$emit('close')" />
    </div>
  </transition>
</template>

<script>
import BaseOverlay from "./BaseOverlay.vue";

export default {
  name: "BasePopup",
  components: { BaseOverlay },
  props: {
    heading: { type: String, default: "Title" },
    isVisible: { type: Boolean, default: false },
    align: { type: String, default: "" },
    type: { type: String, default: "" },
  },
};
</script>

<style lang="scss">
.base-popup {
  width: 80%;
  max-height: 70vh;
  margin: 15vh auto;
  max-width: 800px;
  position: fixed;
  z-index: 101;
  top: 0;
  // bottom: 0;
  left: 0;
  right: 0;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  padding: 30px 50px;
  .base-popup__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .close-icon {
      padding: 10px;
      padding-right: 0;
      cursor: pointer;
      transition: $transition;
      &:hover {
        color: $secondary;
      }
    }
  }
  .base-popup__body {
    height: 100%;
    overflow-y: auto;
    margin-top: 30px;
    padding: 0 20px 30px 0;
  }
  @media only screen and (max-width: 768px) {
    bottom: -10px;
    top: auto;
    width: 100%;
    max-height: 85vh;
    margin: 15vh auto 0;
    border-radius: 18px 18px 0 0;
    padding: 20px 30px 30px;
    .base-popup__body {
      padding: 0 15px 20px 0;
      margin-top: 10px;
    }
  }

  // aligment of body items
  .center {
    text-align: center;
  }
}
// type of popup
.popup--blured {
  background: rgba($color: black, $alpha: 0.54);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  margin-bottom: 10px;
  color: $lightText;
  box-shadow: $shadow2;
}
</style>
