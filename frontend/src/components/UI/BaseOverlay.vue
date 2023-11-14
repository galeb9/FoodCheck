<template>
  <div @click="$emit('close', false)" class="base-overlay"></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.base-overlay {
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(black, 0.5);
}
</style>
