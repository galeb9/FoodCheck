<template>
  <div class="home">
    <ListContainer :newData="newAddedItem" />
    <!-- <BasePopup
      :isVisible="isVisible"
      @close="closeOverlay"
      type="blured"
      heading="Something"
    >
      <Transition name="fade-in">
        <AddItem @close-overlay="closeOverlay" @new-data="addNewItem" />
      </Transition>
    </BasePopup>

    <div
      @click="togglePopup"
      :class="['show__add-item', { 'hide__add-item': isVisible }]"
    >
      +
    </div> -->
  </div>
</template>

<script>
import ListContainer from "../components/list/ListContainer.vue";

export default {
  name: "HomePage",
  components: {
    ListContainer,
  },
  methods: {
    // togglePopup() {
    //   this.isVisible = !this.isVisible;
    // },
    // closeOverlay(value) {
    //   this.isVisible = value;
    // },
    // addNewItem(item) {
    //   this.newAddedItem = item;
    //   console.log("New item: ", item);
    // },
  },
};
</script>

<style lang="scss">
// toggle popup css
// .show__add-item {
//   position: fixed;
//   bottom: 15px;
//   right: 15px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   font-size: 40px;
//   background: $secondary;
//   width: 55px;
//   height: 55px;
//   color: white;
//   padding: 6px;
//   border-radius: 50%;

//   cursor: pointer;
//   transition: all 0.2s ease-out 0.01s;
//   &:hover {
//     transform: translateY(-5px);
//   }
// }
// .hide__add-item {
//   background: red;
//   transform: rotate(45deg);
//   &:hover {
//     transform: rotate(45deg) translateX(0px);
//   }
// }
// // add-item transition
// .fade-in-enter-active,
// .fade-in-leave-active {
//   transition: opacity 0.5s ease;
// }
// .fade-in-enter-from,
// .fade-in-leave-to {
//   opacity: 0;
// }
</style>
