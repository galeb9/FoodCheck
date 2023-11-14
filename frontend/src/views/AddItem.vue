<template>
  <div class="add-item">
    <AddNew
      v-if="isVisible"
      @close-overlay="closeOverlay"
      @new-data="addNewItem"
    />
  </div>
</template>

<script>
import AddNew from "../components/add-item/AddNew.vue";
export default {
  name: "AddItem",
  components: {
    AddNew,
  },
  data() {
    return {
      isVisible: true,
      newAddedItem: null,
    };
  },
  methods: {
    togglePopup() {
      this.isVisible = !this.isVisible;
    },
    closeOverlay(value) {
      this.isVisible = value;
    },
    addNewItem(item) {
      this.newAddedItem = item;
      console.log("New item: ", item);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss"></style>
