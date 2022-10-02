<template>
  <div class="home">
    <ListContainer  :newData="newAddedItem" />
  </div>
</template>

<script>
import ListContainer from '../components/list/ListContainer.vue'

export default {
  name: "HomePage",
  components: {
    ListContainer
  }
}
</script>

<style>

</style>