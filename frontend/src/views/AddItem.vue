<template>
  <div class="add-item">
    <AddNew />
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
      newAddedItem: null,
    };
  },
  methods: {
    addNewItem(item) {
      this.newAddedItem = item;
    },
  },
};
</script>

<style lang="scss"></style>
